import { Node, Edge } from "@xyflow/react";

// Nodes grouped by phase, centered horizontally
// Each phase is a row, spacing: x=220 between nodes, y=160 between rows

const NODE_WIDTH = 200;
const X_GAP = 230;
const Y_GAP = 170;

function centerRow(slugs: string[], y: number): Node[] {
  const totalWidth = slugs.length * NODE_WIDTH + (slugs.length - 1) * (X_GAP - NODE_WIDTH);
  const startX = -totalWidth / 2;
  return slugs.map((slug, i) => ({
    id: slug,
    type: "skillNode",
    position: { x: startX + i * X_GAP, y },
    data: { slug },
  }));
}

// Phase 0: Foundation (2 nodes)
const phase0 = centerRow(
  ["00-learning-how-to-learn", "00-tutor-persona"],
  0
);

// Phase 1: K-12 (5 nodes)
const phase1 = centerRow(
  [
    "01-k12-exam-systems",
    "01-k12-humanities",
    "01-k12-languages",
    "01-k12-mathematics",
    "01-k12-sciences",
  ],
  Y_GAP
);

// Phase 2: University (8 nodes)
const phase2 = centerRow(
  [
    "02-ai-ml-learning",
    "02-arts-design-tutor",
    "02-business-economics-tutor",
    "02-humanities-social-tutor",
    "02-medical-health-tutor",
    "02-music-arts",
    "02-stem-tutor",
    "02-university-guide",
  ],
  Y_GAP * 2
);

// Phase 3: Research (4 nodes)
const phase3 = centerRow(
  [
    "03-academic-writing",
    "03-data-analysis-stats",
    "03-literature-review",
    "03-research-methodology",
  ],
  Y_GAP * 3
);

// Phase 4: Career (6 nodes)
const phase4 = centerRow(
  [
    "04-career-navigator",
    "04-civil-service",
    "04-consulting-career",
    "04-finance-career",
    "04-interview-prep",
    "04-tech-career",
  ],
  Y_GAP * 4
);

// Phase 5: Soft Skills (5 nodes)
const phase5 = centerRow(
  [
    "05-communication-skills",
    "05-cross-cultural",
    "05-emotional-intelligence",
    "05-negotiation-persuasion",
    "05-social-intelligence",
  ],
  Y_GAP * 5
);

// Phase 6: Life Skills (4 nodes)
const phase6 = centerRow(
  [
    "06-creativity-innovation",
    "06-critical-thinking",
    "06-financial-literacy",
    "06-health-wellness",
  ],
  Y_GAP * 6
);

export const initialNodes: Node[] = [
  ...phase0,
  ...phase1,
  ...phase2,
  ...phase3,
  ...phase4,
  ...phase5,
  ...phase6,
];

// Edges: foundation connects to all phase 1 nodes, each phase connects down
export const initialEdges: Edge[] = [
  // Phase 0 → Phase 1
  ...phase1.map((n) => ({
    id: `00-learning-how-to-learn->${n.id}`,
    source: "00-learning-how-to-learn",
    target: n.id,
    animated: true,
    style: { stroke: "#a78bfa", strokeWidth: 1.5, opacity: 0.4 },
  })),
  // Phase 1 → Phase 2 (subject alignment)
  { id: "e-hum-hum", source: "01-k12-humanities", target: "02-humanities-social-tutor", style: { stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-sci-stem", source: "01-k12-sciences", target: "02-stem-tutor", style: { stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-math-stem", source: "01-k12-mathematics", target: "02-stem-tutor", style: { stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-lang-arts", source: "01-k12-languages", target: "02-arts-design-tutor", style: { stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-exam-guide", source: "01-k12-exam-systems", target: "02-university-guide", style: { stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-sci-med", source: "01-k12-sciences", target: "02-medical-health-tutor", style: { stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-math-biz", source: "01-k12-mathematics", target: "02-business-economics-tutor", style: { stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-math-aiml", source: "01-k12-mathematics", target: "02-ai-ml-learning", style: { stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.4 } },
  // Phase 2 → Phase 3
  { id: "e-stem-research", source: "02-stem-tutor", target: "03-research-methodology", style: { stroke: "#34d399", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-stem-data", source: "02-stem-tutor", target: "03-data-analysis-stats", style: { stroke: "#34d399", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-aiml-data", source: "02-ai-ml-learning", target: "03-data-analysis-stats", style: { stroke: "#34d399", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-hum-writing", source: "02-humanities-social-tutor", target: "03-academic-writing", style: { stroke: "#34d399", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-hum-lit", source: "02-humanities-social-tutor", target: "03-literature-review", style: { stroke: "#34d399", strokeWidth: 1.5, opacity: 0.4 } },
  // Phase 3 → Phase 4
  { id: "e-research-tech", source: "03-research-methodology", target: "04-tech-career", style: { stroke: "#fbbf24", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-aiml-tech", source: "02-ai-ml-learning", target: "04-tech-career", style: { stroke: "#fbbf24", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-data-finance", source: "03-data-analysis-stats", target: "04-finance-career", style: { stroke: "#fbbf24", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-writing-consulting", source: "03-academic-writing", target: "04-consulting-career", style: { stroke: "#fbbf24", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-research-career", source: "03-research-methodology", target: "04-career-navigator", style: { stroke: "#fbbf24", strokeWidth: 1.5, opacity: 0.4 } },
  // Phase 4 → Phase 5
  { id: "e-career-comm", source: "04-career-navigator", target: "05-communication-skills", style: { stroke: "#f97316", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-consulting-nego", source: "04-consulting-career", target: "05-negotiation-persuasion", style: { stroke: "#f97316", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-interview-social", source: "04-interview-prep", target: "05-social-intelligence", style: { stroke: "#f97316", strokeWidth: 1.5, opacity: 0.4 } },
  // Phase 5 → Phase 6
  { id: "e-comm-critical", source: "05-communication-skills", target: "06-critical-thinking", style: { stroke: "#ec4899", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-ei-health", source: "05-emotional-intelligence", target: "06-health-wellness", style: { stroke: "#ec4899", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-nego-finance", source: "05-negotiation-persuasion", target: "06-financial-literacy", style: { stroke: "#ec4899", strokeWidth: 1.5, opacity: 0.4 } },
  { id: "e-social-creative", source: "05-social-intelligence", target: "06-creativity-innovation", style: { stroke: "#ec4899", strokeWidth: 1.5, opacity: 0.4 } },
];
