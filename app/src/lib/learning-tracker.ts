/**
 * Learning Tracker — tracks knowledge points, mastery level, and review schedule.
 * Implements spaced repetition based on simplified Leitner system.
 */

export interface KnowledgePoint {
  id: string;
  /** The concept / knowledge point text */
  content: string;
  /** When it was first learned */
  learnedAt: string;
  /** When it should be reviewed next */
  nextReviewAt: string;
  /** Review stage: 0=new, 1=1day, 2=3days, 3=7days, 4=14days, 5=mastered */
  stage: number;
  /** Last review timestamp */
  lastReviewedAt: string | null;
  /** Which tutor taught this point */
  taughtBy?: string;
  /** Batch ID — KPs learned in the same response share a batchId */
  batchId?: string;
}

export interface SkillProgress {
  slug: string;
  knowledgePoints: KnowledgePoint[];
  /** Total conversation rounds (user messages sent) */
  totalRounds: number;
  /** Mastery score 0-100 */
  mastery: number;
  /** Computed from knowledge points stages */
  updatedAt: string;
}

const STORAGE_KEY = "learning-progress";
const STREAK_KEY = "learning-streak";

// ── Streak & XP ──

export interface StreakData {
  /** Current consecutive learning days */
  currentStreak: number;
  /** Longest streak ever */
  longestStreak: number;
  /** Total XP earned */
  totalXP: number;
  /** Current level (computed from XP) */
  level: number;
  /** Last active date (YYYY-MM-DD) */
  lastActiveDate: string;
  /** XP history for last 7 days */
  weeklyXP: Record<string, number>;
}

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function getYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

/** XP thresholds per level: level N requires N*100 cumulative XP */
function computeLevel(xp: number): number {
  let level = 1;
  let threshold = 100;
  while (xp >= threshold) {
    level++;
    threshold += level * 100;
  }
  return level;
}

/** XP needed to reach next level */
export function xpToNextLevel(data: StreakData): { current: number; needed: number } {
  let cumulative = 0;
  for (let l = 1; l < data.level; l++) cumulative += l * 100;
  const nextThreshold = cumulative + data.level * 100;
  return { current: data.totalXP - cumulative, needed: data.level * 100 };
}

export function getStreakData(): StreakData {
  if (typeof window === "undefined") {
    return { currentStreak: 0, longestStreak: 0, totalXP: 0, level: 1, lastActiveDate: "", weeklyXP: {} };
  }
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { currentStreak: 0, longestStreak: 0, totalXP: 0, level: 1, lastActiveDate: "", weeklyXP: {} };
    const data: StreakData = JSON.parse(raw);
    // Check if streak is still active
    const today = getToday();
    const yesterday = getYesterday();
    if (data.lastActiveDate !== today && data.lastActiveDate !== yesterday) {
      // Streak broken
      data.currentStreak = 0;
    }
    data.level = computeLevel(data.totalXP);
    return data;
  } catch {
    return { currentStreak: 0, longestStreak: 0, totalXP: 0, level: 1, lastActiveDate: "", weeklyXP: {} };
  }
}

function saveStreak(data: StreakData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STREAK_KEY, JSON.stringify(data));
}

/** XP rewards */
const XP_REWARDS = {
  message: 5,        // Each message sent
  knowledgePoint: 20, // Each new KP learned
  review: 15,         // Each review completed
  streakBonus: 10,    // Daily streak bonus per streak day (capped at 50)
};

/** Record a learning activity and earn XP */
export function earnXP(amount: number, source: string): StreakData {
  const data = getStreakData();
  const today = getToday();

  // Update streak
  if (data.lastActiveDate !== today) {
    if (data.lastActiveDate === getYesterday()) {
      data.currentStreak++;
    } else if (!data.lastActiveDate) {
      data.currentStreak = 1;
    } else {
      data.currentStreak = 1;
    }
    // Streak bonus XP
    const streakBonus = Math.min(data.currentStreak * XP_REWARDS.streakBonus, 50);
    data.totalXP += streakBonus;
    data.lastActiveDate = today;
  }

  data.longestStreak = Math.max(data.longestStreak, data.currentStreak);
  data.totalXP += amount;
  data.level = computeLevel(data.totalXP);

  // Weekly XP tracking
  if (!data.weeklyXP) data.weeklyXP = {};
  data.weeklyXP[today] = (data.weeklyXP[today] || 0) + amount;
  // Clean up old entries (keep last 7 days)
  const keys = Object.keys(data.weeklyXP).sort();
  while (keys.length > 7) {
    delete data.weeklyXP[keys.shift()!];
  }

  saveStreak(data);
  return data;
}

export { XP_REWARDS };

// Spaced repetition intervals in hours
const REVIEW_INTERVALS = [0, 24, 72, 168, 336]; // 0, 1d, 3d, 7d, 14d

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function getAll(): Record<string, SkillProgress> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAll(data: Record<string, SkillProgress>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function ensureProgress(all: Record<string, SkillProgress>, slug: string): SkillProgress {
  if (!all[slug]) {
    all[slug] = {
      slug,
      knowledgePoints: [],
      totalRounds: 0,
      mastery: 0,
      updatedAt: new Date().toISOString(),
    };
  }
  return all[slug];
}

function computeMastery(progress: SkillProgress): number {
  const kps = progress.knowledgePoints;
  if (kps.length === 0) return 0;
  // Mastery = weighted average of stages (max stage = 5)
  const totalStage = kps.reduce((sum, kp) => sum + kp.stage, 0);
  const maxPossible = kps.length * 5;
  const kpMastery = (totalStage / maxPossible) * 90; // KP contribution: 90%
  // Conversation depth bonus: up to 10%, requires 30 rounds for max
  const depthBonus = Math.min(progress.totalRounds / 30, 1) * 10;
  let mastery = Math.round(Math.min(kpMastery + depthBonus, 100));
  // Minimum KP requirement: less than 3 KPs caps mastery at 15%
  if (kps.length < 3) {
    mastery = Math.min(mastery, 15);
  }
  return mastery;
}

// ── Public API ──

export function getSkillProgress(slug: string): SkillProgress {
  const all = getAll();
  return all[slug] || {
    slug,
    knowledgePoints: [],
    totalRounds: 0,
    mastery: 0,
    updatedAt: new Date().toISOString(),
  };
}

export function getAllProgress(): Record<string, SkillProgress> {
  return getAll();
}

export function addKnowledgePoints(slug: string, points: string[], taughtBy?: string): SkillProgress {
  const all = getAll();
  const progress = ensureProgress(all, slug);
  const now = new Date().toISOString();
  const nextReview = new Date(Date.now() + REVIEW_INTERVALS[1] * 3600000).toISOString();
  const batchId = generateId(); // All KPs from this call share a batchId

  for (const content of points) {
    const trimmed = content.trim();
    if (!trimmed || trimmed.length < 5) continue;
    // Deduplicate — skip if similar point exists
    const exists = progress.knowledgePoints.some(
      (kp) => kp.content === trimmed || similarity(kp.content, trimmed) > 0.8
    );
    if (exists) continue;

    progress.knowledgePoints.push({
      id: generateId(),
      content: trimmed,
      learnedAt: now,
      nextReviewAt: nextReview,
      stage: 0,
      lastReviewedAt: null,
      batchId,
      ...(taughtBy ? { taughtBy } : {}),
    });
  }

  progress.mastery = computeMastery(progress);
  progress.updatedAt = now;
  saveAll(all);
  return progress;
}

export function incrementRounds(slug: string): SkillProgress {
  const all = getAll();
  const progress = ensureProgress(all, slug);
  progress.totalRounds++;
  progress.mastery = computeMastery(progress);
  progress.updatedAt = new Date().toISOString();
  saveAll(all);
  return progress;
}

export function reviewKnowledgePoint(slug: string, kpId: string, remembered: boolean) {
  const all = getAll();
  const progress = ensureProgress(all, slug);
  const kp = progress.knowledgePoints.find((k) => k.id === kpId);
  if (!kp) return;

  const now = new Date();
  kp.lastReviewedAt = now.toISOString();

  if (remembered) {
    kp.stage = Math.min(kp.stage + 1, 5);
  } else {
    kp.stage = Math.max(kp.stage - 1, 0);
  }

  const intervalHours = REVIEW_INTERVALS[kp.stage] ?? REVIEW_INTERVALS[REVIEW_INTERVALS.length - 1];
  kp.nextReviewAt = new Date(now.getTime() + intervalHours * 3600000).toISOString();

  progress.mastery = computeMastery(progress);
  progress.updatedAt = now.toISOString();
  saveAll(all);
}

/** Get knowledge points that are due for review */
export function getDueReviews(slug?: string): Array<{ slug: string; kp: KnowledgePoint }> {
  const all = getAll();
  const now = new Date().toISOString();
  const results: Array<{ slug: string; kp: KnowledgePoint }> = [];

  const slugs = slug ? [slug] : Object.keys(all);
  for (const s of slugs) {
    const progress = all[s];
    if (!progress) continue;
    for (const kp of progress.knowledgePoints) {
      if (kp.stage < 5 && kp.nextReviewAt <= now) {
        results.push({ slug: s, kp });
      }
    }
  }

  return results.sort((a, b) => a.kp.nextReviewAt.localeCompare(b.kp.nextReviewAt));
}

/** Get all skills that have due reviews */
export function getReviewSummary(): Array<{ slug: string; dueCount: number; mastery: number }> {
  const all = getAll();
  const now = new Date().toISOString();
  const results: Array<{ slug: string; dueCount: number; mastery: number }> = [];

  for (const [slug, progress] of Object.entries(all)) {
    const dueCount = progress.knowledgePoints.filter(
      (kp) => kp.stage < 5 && kp.nextReviewAt <= now
    ).length;
    if (progress.knowledgePoints.length > 0) {
      results.push({ slug, dueCount, mastery: progress.mastery });
    }
  }

  return results;
}

/**
 * Update KP stages based on quiz results.
 * Correct answer → promote most recent KPs. Incorrect → mark as needing review.
 */
export function updateKPsFromQuiz(slug: string, correct: boolean): void {
  const all = getAll();
  const progress = all[slug];
  if (!progress || progress.knowledgePoints.length === 0) return;

  // Affect the 3 most recently learned KPs
  const recentKPs = [...progress.knowledgePoints]
    .sort((a, b) => b.learnedAt.localeCompare(a.learnedAt))
    .slice(0, 3);

  const now = new Date();
  for (const kp of recentKPs) {
    if (correct) {
      kp.stage = Math.min(kp.stage + 1, 5);
    } else {
      kp.stage = Math.max(kp.stage - 1, 0);
    }
    kp.lastReviewedAt = now.toISOString();
    const intervalHours = REVIEW_INTERVALS[kp.stage] ?? REVIEW_INTERVALS[REVIEW_INTERVALS.length - 1];
    kp.nextReviewAt = new Date(now.getTime() + intervalHours * 3600000).toISOString();
  }

  progress.mastery = computeMastery(progress);
  progress.updatedAt = now.toISOString();
  saveAll(all);
}

// Simple string similarity (Jaccard on character bigrams)
function similarity(a: string, b: string): number {
  const bigramsA = new Set<string>();
  const bigramsB = new Set<string>();
  for (let i = 0; i < a.length - 1; i++) bigramsA.add(a.slice(i, i + 2));
  for (let i = 0; i < b.length - 1; i++) bigramsB.add(b.slice(i, i + 2));
  let intersection = 0;
  for (const bg of bigramsA) if (bigramsB.has(bg)) intersection++;
  const union = bigramsA.size + bigramsB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}
