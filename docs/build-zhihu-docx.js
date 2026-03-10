const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  ExternalHyperlink, LevelFormat,
} = require("docx");

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function text(t, opts = {}) {
  return new TextRun({ text: t, font: "Microsoft YaHei", size: 22, ...opts });
}

function bold(t, opts = {}) {
  return text(t, { bold: true, ...opts });
}

function italic(t, opts = {}) {
  return text(t, { italics: true, ...opts });
}

function p(children, opts = {}) {
  return new Paragraph({
    spacing: { after: 200 },
    ...opts,
    children: Array.isArray(children) ? children : [text(children)],
  });
}

function heading(t, level) {
  return new Paragraph({
    heading: level,
    spacing: { before: 360, after: 200 },
    children: [new TextRun({ text: t, font: "Microsoft YaHei", bold: true, size: level === HeadingLevel.HEADING_1 ? 40 : level === HeadingLevel.HEADING_2 ? 32 : 26 })],
  });
}

function quote(children) {
  return new Paragraph({
    spacing: { after: 200 },
    indent: { left: 600 },
    border: { left: { style: BorderStyle.SINGLE, size: 6, color: "999999", space: 8 } },
    children: Array.isArray(children) ? children : [text(children, { color: "555555" })],
  });
}

function bullet(t) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 100 },
    children: [text(t)],
  });
}

function hr() {
  return new Paragraph({
    spacing: { before: 300, after: 300 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: "CCCCCC", space: 1 } },
    children: [],
  });
}

function tableRow(cells, isHeader = false) {
  return new TableRow({
    children: cells.map((c, i) => {
      const widths = cells.length === 2 ? [4680, 4680] : [2340, 7020];
      return new TableCell({
        borders,
        width: { size: widths[i] || 4680, type: WidthType.DXA },
        margins: cellMargins,
        shading: isHeader ? { fill: "E8F0FE", type: ShadingType.CLEAR } : undefined,
        children: [new Paragraph({ children: [text(c, isHeader ? { bold: true } : {})] })],
      });
    }),
  });
}

function makeTable(headers, rows, colWidths) {
  const totalWidth = (colWidths || []).reduce((a, b) => a + b, 0) || 9360;
  return new Table({
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths: colWidths || headers.map(() => Math.floor(9360 / headers.length)),
    rows: [
      tableRow(headers, true),
      ...rows.map((r) => tableRow(r)),
    ],
  });
}

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Microsoft YaHei", size: 22 },
      },
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 40, bold: true, font: "Microsoft YaHei" },
        paragraph: { spacing: { before: 360, after: 240 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Microsoft YaHei" },
        paragraph: { spacing: { before: 300, after: 200 }, outlineLevel: 1 },
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Microsoft YaHei" },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
      {
        reference: "numbers",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    children: [
      // Title
      heading("AI\u6709\u4e86\u6280\u80fd\u6811\uff0c\u4eba\u7c7b\u5462\uff1f", HeadingLevel.HEADING_1),
      quote([italic("\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\u7684\u8bde\u751f\uff1a\u5f53\u8ba4\u77e5\u79d1\u5b66\u9047\u4e0aAI Agent", { color: "555555" })]),
      hr(),

      // Opening
      p([bold("\u4f60\u6709\u6ca1\u6709\u60f3\u8fc7\u4e00\u4e2a\u95ee\u9898\uff1a")]),
      p("2025\u5e74\uff0cAI Agent\u901a\u8fc7Skill\u3001MCP\u7b49\u6807\u51c6\u5316\u534f\u8bae\uff0c\u83b7\u5f97\u4e86\u64cd\u7eb5\u73b0\u5b9e\u4e16\u754c\u7684\u80fd\u529b\u3002Claude\u80fd\u8dd1\u4ee3\u7801\u3001\u67e5\u6570\u636e\u5e93\u3001\u63a7\u5236\u6d4f\u89c8\u5668\uff1bChatGPT\u80fd\u8054\u7f51\u3001\u5199\u7a0b\u5e8f\u3001\u505a\u6570\u636e\u5206\u6790\uff1bGemini\u80fd\u770b\u3001\u80fd\u542c\u3001\u80fd\u548c\u7269\u7406\u4e16\u754c\u4ea4\u4e92\u3002"),
      p("AI\u6709\u4e86\u81ea\u5df1\u7684\u6280\u80fd\u6811\u3002"),
      p([bold("\u4f46\u4eba\u7c7b\u7684\u6280\u80fd\u6811\u5462\uff1f")]),
      p("\u4e00\u4e2a35\u5c81\u7684\u7a0b\u5e8f\u5458\u53d1\u73b0\u81ea\u5df1\u7684\u6280\u672f\u6808\u6b63\u5728\u88abAI\u66ff\u4ee3\uff0c\u600e\u4e48\u8ffd\uff1f\u4e00\u4e2a10\u5c81\u7684\u5b69\u5b50\u5c06\u6bd5\u4e1a\u5728AI\u5b8c\u6210\u5927\u90e8\u5206\u77e5\u8bc6\u52b3\u52a8\u7684\u4e16\u754c\uff0c\u8be5\u5b66\u4ec0\u4e48\uff1f\u4e00\u4e2a\u535a\u58eb\u751f\u82b15\u5e74\u6b7b\u78d5\u4e00\u4e2a\u7a84\u9886\u57df\uff0c\u8fd9\u4e2a\u6295\u8d44\u5bf9\u5417\uff1f\u4e00\u4e2a\u519c\u6751\u51fa\u6765\u7684\u5927\u5b66\u65b0\u751f\uff0c\u6ca1\u4eba\u6559\u4ed6\u90a3\u4e9b\u4e0d\u5199\u5728\u8bfe\u672c\u4e0a\u7684\u6f5c\u89c4\u5219\uff0c\u8c01\u6765\u6559\uff1f"),
      p([bold("\u8fd9\u4e9b\u4e0d\u662f\u5047\u8bbe\u6027\u95ee\u9898\u3002"), text("\u8fd9\u5c31\u662f\u6211\u4eec\u8fd9\u4e2a\u65f6\u4ee3\u6700\u6838\u5fc3\u7684\u95ee\u9898\u3002")]),
      hr(),

      // Section 2
      heading("\u5b66\u4e60\u8fd9\u4ef6\u4e8b\uff0c\u6211\u4eec\u4e00\u76f4\u505a\u9519\u4e86", HeadingLevel.HEADING_2),
      p("\u5148\u8bf4\u51e0\u4e2a\u53ef\u80fd\u98a0\u8986\u4f60\u8ba4\u77e5\u7684\u7814\u7a76\u7ed3\u8bba\uff1a"),

      heading("1. AI\u8f85\u5bfc\u80fd\u8ba9\u6210\u7ee9\u7ffb\u500d\uff0c\u4f46\u6709\u4e2a\u524d\u63d0", HeadingLevel.HEADING_3),
      p([text("2025\u5e74\u53d1\u8868\u5728 "), bold("PNAS"), text("\uff08\u7f8e\u56fd\u56fd\u5bb6\u79d1\u5b66\u9662\u9662\u520a\uff0c\u548cNature\u3001Science\u5e76\u5217\u4e09\u5927\u9876\u520a\uff09\u4e0a\u7684\u4e00\u9879\u5927\u89c4\u6a21\u968f\u673a\u5bf9\u7167\u5b9e\u9a8c\u53d1\u73b0\uff1a\u4f7f\u7528GPT-4\u8f85\u5bfc\u7684\u9ad8\u4e2d\u751f\uff0c\u6570\u5b66\u6210\u7ee9\u63d0\u5347\u4e8648%\u2013127%\u3002")]),
      p([text("\u4f46\u7814\u7a76\u540c\u65f6\u53d1\u73b0\u4e00\u4e2a\u5173\u952e\u95ee\u9898\uff1a"), bold("\u5982\u679c\u4e0d\u52a0\u6559\u5b66\u8bbe\u8ba1\uff0c\u5b66\u751f\u4f1a\u4f9d\u8d56AI\u76f4\u63a5\u7ed9\u7b54\u6848\uff0c\u53cd\u800c\u5b66\u4e0d\u5230\u4e1c\u897f\u3002"), text(" \u53ea\u6709\u7cbe\u5fc3\u8bbe\u8ba1\u4e86\u201c\u7ed9\u63d0\u793a\u800c\u975e\u7ed9\u7b54\u6848\u201d\u7684\u6559\u5b66\u5f15\u5bfc\u540e\uff0c\u5b66\u4e60\u6548\u679c\u624d\u771f\u6b63\u663e\u73b0\u3002")]),
      quote([italic("Bastani et al. (2025). PNAS, 122(26). doi:10.1073/pnas.2422633122", { color: "555555" })]),

      heading("2. \u4f60\u6700\u5e38\u7528\u7684\u5b66\u4e60\u65b9\u6cd5\uff0c\u5927\u6982\u7387\u662f\u65e0\u6548\u7684", HeadingLevel.HEADING_3),
      p([text("\u4e00\u9879\u6db5\u76d6242\u9879\u7814\u7a76\u300116.9\u4e07\u4eba\u7684\u5143\u5206\u6790\u5f97\u51fa\u7ed3\u8bba\uff1a"), bold("\u53cd\u590d\u9605\u8bfb\u3001\u5212\u91cd\u70b9\u3001\u505a\u6458\u8981\uff0c\u8fd9\u4e9b\u6700\u6d41\u884c\u7684\u5b66\u4e60\u65b9\u6cd5\u6548\u679c\u6700\u5dee\u3002"), text(" \u771f\u6b63\u6709\u6548\u7684\u662f\u68c0\u7d22\u7ec3\u4e60\uff08\u4e3b\u52a8\u56de\u5fc6\uff09\u548c\u95f4\u9694\u91cd\u590d\u3002")]),
      p([text("\u4f60\u56de\u60f3\u4e00\u4e0b\uff1a\u4f60\u662f\u600e\u4e48\u201c\u590d\u4e60\u201d\u7684\uff1f\u7ffb\u5f00\u7b14\u8bb0\u91cd\u65b0\u770b\u4e00\u904d\uff1f\u90a3\u53eb\u201c\u4ea7\u751f\u4e86\u5b66\u4f1a\u7684\u9519\u89c9\u201d\u3002\u8ba4\u77e5\u79d1\u5b66\u5bb6\u6709\u4e2a\u672f\u8bed\u53eb "), bold("fluency illusion"), text("\uff08\u6d41\u7545\u6027\u9519\u89c9\uff09\uff0c\u4f60\u89c9\u5f97\u81ea\u5df1\u770b\u61c2\u4e86\uff0c\u4f46\u4ec0\u4e48\u90fd\u6ca1\u8bb0\u4f4f\u3002")]),
      quote([italic("Dunlosky et al. (2013). Psychological Science in the Public Interest. doi:10.1177/1529100612453266", { color: "555555" })]),

      heading("3. \u7b97\u6cd5\u4f18\u5316\u7684\u95f4\u9694\u91cd\u590d\uff0c\u80fd\u8ba9\u8bb0\u5fc6\u6548\u7387\u500d\u589e", HeadingLevel.HEADING_3),
      p([text("\u4e00\u9879\u53d1\u8868\u5728 "), bold("PNAS"), text(" \u7684\u7814\u7a76\uff0c\u5206\u6790\u4e861200\u4e07Duolingo\u7528\u6237\u7684\u5b66\u4e60\u6570\u636e\uff0c\u53d1\u73b0\uff1a\u7ecf\u8fc7\u7b97\u6cd5\u4f18\u5316\u7684\u95f4\u9694\u91cd\u590d\u590d\u4e60\u8ba1\u5212\uff0c\u663e\u8457\u4f18\u4e8e\u4f20\u7edf\u7684\u4eba\u5de5\u8bbe\u5b9a\u590d\u4e60\u95f4\u9694\uff0c\u8ba9\u5b66\u4e60\u8005\u5728\u66f4\u77ed\u65f6\u95f4\u5185\u8bb0\u4f4f\u66f4\u591a\u5185\u5bb9\u3002")]),
      p([text("\u8fd9\u53ef\u4e0d\u662f\u5b9e\u9a8c\u5ba4\u91cc\u7684\u5c0f\u6837\u672c\u5b9e\u9a8c\uff0c\u662f\u5343\u4e07\u7ea7\u771f\u5b9e\u7528\u6237\u7684\u6570\u636e\u3002")]),
      quote([italic("Tabibian et al. (2019). PNAS, 116(10), 3988\u20133993. doi:10.1073/pnas.1815156116", { color: "555555" })]),

      p([bold("\u79d1\u5b66\u5df2\u7ecf\u544a\u8bc9\u6211\u4eec\u7b54\u6848\u4e86\uff1aAI + \u8ba4\u77e5\u79d1\u5b66 = \u4eba\u7c7b\u5386\u53f2\u4e0a\u6700\u5f3a\u5927\u7684\u5b66\u4e60\u7ec4\u5408\u3002")]),
      p([text("\u4f46\u95ee\u9898\u6765\u4e86\uff1a"), bold("AI\u672c\u8eab\u6ca1\u6709\u6559\u5b66\u7ed3\u6784\u3002\u5b83\u4ec0\u4e48\u90fd\u77e5\u9053\uff0c\u4f46\u4ec0\u4e48\u4e5f\u4e0d\u4f1a\u201c\u6559\u201d\u3002")]),
      p("\u4f60\u95eeChatGPT\u4e00\u4e2a\u95ee\u9898\uff0c\u5b83\u7ed9\u4f60\u4e00\u4e2a\u7b54\u6848\u3002\u4f46\u5b83\u4e0d\u4f1a\uff1a"),
      bullet("\u5148\u8bc4\u4f30\u4f60\u7684\u6c34\u5e73\uff0c\u518d\u51b3\u5b9a\u8bb2\u591a\u6df1"),
      bullet("\u7528\u95f4\u9694\u91cd\u590d\u5e2e\u4f60\u5de9\u56fa\u8bb0\u5fc6"),
      bullet("\u5728\u4f60\u5feb\u653e\u5f03\u7684\u65f6\u5019\u6362\u4e00\u79cd\u89e3\u91ca\u65b9\u5f0f"),
      bullet("\u4e3b\u52a8\u7ed9\u4f60\u51fa\u9898\uff0c\u800c\u4e0d\u662f\u7b49\u4f60\u6765\u95ee"),
      bullet("\u5728\u4f60\u9700\u8981\u7684\u65f6\u5019\uff0c\u6a21\u62df\u4e00\u4e2a\u793e\u4ea4\u573a\u666f\u8ba9\u4f60\u7ec3\u4e60"),
      p([bold("\u9664\u975e\u4f60\u7ed9\u5b83\u4e00\u4e2aSkill\u3002")]),
      hr(),

      // Section 3
      heading("Human Skill Tree\uff1a\u7ed9AI\u88c5\u4e0a\u6559\u80b2\u64cd\u4f5c\u7cfb\u7edf", HeadingLevel.HEADING_2),
      p([text("\u8fd9\u5c31\u662f\u6211\u505a "), new ExternalHyperlink({ children: [text("Human Skill Tree", { color: "2E75B6", underline: {} })], link: "https://github.com/24kchengYe/human-skill-tree" }), text(" \u8fd9\u4e2a\u5f00\u6e90\u9879\u76ee\u7684\u51fa\u53d1\u70b9\u3002")]),
      p([bold("\u4e00\u53e5\u8bdd\uff1a33\u4e2aAI Agent\u6280\u80fd\uff0c\u628aChatGPT/Claude/Gemini/Copilot/DeepSeek\u53d8\u6210\u6709\u7ed3\u6784\u3001\u6709\u65b9\u6cd5\u8bba\u3001\u57fa\u4e8e\u8ba4\u77e5\u79d1\u5b66\u7684\u5b66\u4e60\u4f19\u4f34\u3002")]),
      p([text("\u5b83\u4e0d\u662f\u804a\u5929\u673a\u5668\u4eba\uff0c\u4e5f\u4e0d\u662f\u8bfe\u7a0b\u5e73\u53f0\uff0c\u662f\u4e00\u4e2a"), bold("\u8ba9AI\u771f\u6b63\u4f1a\u6559\u4f60\u4e1c\u897f"), text("\u7684\u6280\u80fd\u96c6\u5408\u3002")]),

      heading("\u5b83\u8986\u76d6\u4ec0\u4e48\uff1f", HeadingLevel.HEADING_3),
      makeTable(
        ["\u9636\u6bb5", "\u793a\u4f8b\u6280\u80fd"],
        [
          ["\ud83c\udfeb K-12\u57fa\u7840\u6559\u80b2", "\u6570\u5b66\u5bfc\u5e08\u3001\u79d1\u5b66\u5bfc\u5e08\u3001\u8bed\u8a00\u5b66\u4e60\u3001\u4eba\u6587\u793e\u79d1\u3001\u8003\u8bd5\u7cfb\u7edf\u6559\u7ec3"],
          ["\ud83c\udf93 \u5927\u5b66\u9636\u6bb5", "STEM\u5bfc\u5e08\u3001\u5546\u79d1\u7ecf\u6d4e\u3001\u4eba\u6587\u793e\u79d1\u3001\u533b\u5b66\u5065\u5eb7\u3001\u827a\u672f\u8bbe\u8ba1"],
          ["\ud83d\udd2c \u7814\u7a76\u751f/\u79d1\u7814", "\u7814\u7a76\u65b9\u6cd5\u8bba\u3001\u5b66\u672f\u5199\u4f5c\u3001\u6587\u732e\u7efc\u8ff0\u3001\u6570\u636e\u5206\u6790\u4e0e\u7edf\u8ba1"],
          ["\ud83d\udcbc \u804c\u4e1a\u53d1\u5c55", "\u6280\u672f\u804c\u4e1a\u5bfc\u822a\u3001\u9762\u8bd5\u51c6\u5907\u3001\u91d1\u878d\u804c\u4e1a\u3001\u54a8\u8be2\u804c\u4e1a\u3001\u516c\u52a1\u5458\u8003\u8bd5"],
          ["\ud83e\udd1d \u793e\u4ea4\u667a\u6167", "\u4eba\u60c5\u4e16\u6545\u6559\u7ec3\u3001\u8de8\u6587\u5316\u6c9f\u901a\u3001\u60c5\u5546\u8bad\u7ec3\u3001\u8c08\u5224\u4e0e\u8bf4\u670d"],
          ["\ud83e\udde0 \u81ea\u6211\u53d1\u5c55", "\u6279\u5224\u6027\u601d\u7ef4\u3001\u8d22\u52a1\u7d20\u517b\u3001\u521b\u9020\u529b\u4e0e\u521b\u65b0\u3001\u5065\u5eb7\u7ba1\u7406"],
        ],
        [2340, 7020]
      ),
      p(""),
      p([bold("\u6700\u5e95\u5c42\u7684\u6280\u80fd\u53eb\u201c\u5b66\u4f1a\u5b66\u4e60\u201d\uff08Learning How to Learn\uff09"), text("\uff0c\u57fa\u4e8eBarbara Oakley\u7684\u8bfe\u7a0b\u548cDunlosky\u7684\u5143\u5206\u6790\uff0c\u6559\u4f60\u600e\u4e48\u7528Feynman\u6280\u5de7\u3001\u95f4\u9694\u91cd\u590d\u3001\u4ea4\u53c9\u7ec3\u4e60\u7b49\u65b9\u6cd5\u6765\u5b66\u4efb\u4f55\u4e1c\u897f\u3002")]),

      heading("\u5b83\u4e0d\u540c\u5728\u54ea\u91cc\uff1f", HeadingLevel.HEADING_3),
      makeTable(
        ["\u76f4\u63a5\u95eeAI", "\u7528\u4e86Human Skill Tree"],
        [
          ["\u201c\u89e3\u91ca\u4e00\u4e0b\u91cf\u5b50\u529b\u5b66\u201d \u2192 \u7ed9\u4f60\u4e00\u5806\u6587\u5b57", "\u5148\u8bc4\u4f30\u4f60\u7684\u7269\u7406\u57fa\u7840\uff0c\u518d\u4ece\u4f60\u80fd\u7406\u89e3\u7684\u7c7b\u6bd4\u5165\u624b"],
          ["\u201c\u5e2e\u6211\u51c6\u5907\u9762\u8bd5\u201d \u2192 \u6cdb\u6cdb\u5efa\u8bae", "\u6a21\u62df\u9762\u8bd5\u5b98\uff0c\u7528STAR\u65b9\u6cd5\u9010\u4e2a\u62c6\u89e3\u4f60\u7684\u7ecf\u5386"],
          ["\u201c\u600e\u4e48\u5b66\u82f1\u8bed\u201d \u2192 \u5217\u51fa5\u4e2a\u65b9\u6cd5", "\u5236\u5b9a30\u5929\u8ba1\u5212\uff0c\u542b\u95f4\u9694\u91cd\u590d+shadowing+\u6bcf\u65e5\u68c0\u7d22\u7ec3\u4e60"],
          ["\u201c\u996d\u5c40\u600e\u4e48\u8868\u73b0\u201d \u2192 \u901a\u7528\u793c\u4eea", "\u5206\u6790\u5177\u4f53\u573a\u666f\uff1a\u4f60\u662f\u6700\u5e74\u8f7b\u7684\uff1f\u4f53\u5236\u5185\u8fd8\u662f\u6c11\u4f01\uff1f\u6a21\u62df\u6f14\u7ec3"],
        ],
        [4680, 4680]
      ),

      heading("\u82cf\u683c\u62c9\u5e95\u5f0f\u5f3a\u5236\u6559\u5b66", HeadingLevel.HEADING_3),
      p([text("\u6bcf\u4f4d\u5bfc\u5e08\u90fd\u4f1a\u7528\u95ee\u9898\u5f15\u5bfc\u4f60\u601d\u8003\uff0c\u800c\u975e\u76f4\u63a5\u7ed9\u7b54\u6848\u3002\u8fd9\u4e0d\u662f\u53ef\u9009\u9879\uff0c\u800c\u662f\u5199\u6b7b\u5728 System Prompt \u91cc\u7684\u786c\u6027\u7ea6\u675f\u2014\u2014\u56e0\u4e3a PNAS \u7684\u7814\u7a76\u5df2\u7ecf\u8bc1\u660e\uff1a\u4e0d\u52a0\u6559\u5b66\u8bbe\u8ba1\u7684 AI \u8f85\u5bfc\u53cd\u800c\u6709\u5bb3\u3002")]),
      p([bold("\u8de8\u5bfc\u5e08\u8bb0\u5fc6"), text("\uff1a\u6bcf\u4e2a\u5bfc\u5e08\u4f1a\u5728\u56de\u590d\u672b\u5c3e\u9644\u52a0\u9690\u85cf\u5143\u6570\u636e\u6807\u7b7e\uff08TAUGHT/STUCK/ATTITUDE\uff09\uff0c\u524d\u7aef\u81ea\u52a8\u89e3\u6790\u540e\u6309\u300c\u5bfc\u5e08\u00d7\u6280\u80fd\u300d\u7ef4\u5ea6\u5b58\u50a8\u3002\u5207\u6362\u5bfc\u5e08\u65f6\uff0c\u65b0\u5bfc\u5e08\u80fd\u81ea\u7136\u5730\u5f15\u7528\u4e4b\u524d\u7684\u6559\u5b66\u8bb0\u5f55\u2014\u2014\u9650\u5236\u5728\u6700\u8fd15\u4e2a\u4e3b\u9898 + 3\u4e2a\u5361\u58f3\u70b9\uff0c\u63a7\u5236\u5728300 tokens\u5185\u3002")]),

      heading("\u6e38\u620f\u5316\u5b66\u4e60\u7cfb\u7edf", HeadingLevel.HEADING_3),
      p("\u5b66\u4e60\u672c\u8eab\u9700\u8981\u6b63\u53cd\u9988\u5faa\u73af\uff0c\u6211\u4eec\u52a0\u5165\u4e86\u5b8c\u6574\u7684\u6e38\u620f\u5316\u4f53\u7cfb\uff1a"),
      bullet("\u53d1\u9001\u6d88\u606f +5 XP\uff0c\u5b66\u5230\u65b0\u77e5\u8bc6\u70b9 +20 XP\uff0c\u5b8c\u6210\u590d\u4e60 +15 XP"),
      bullet("\u8fde\u7eed\u5b66\u4e60\u5929\u6570\u5956\u52b1\uff1a\u6bcf\u65e5 +10\u00d7\u5929\u6570 XP\uff08\u4e0a\u9650 50\uff09"),
      bullet("\u7b49\u7ea7\u7cfb\u7edf\uff1aLv.N \u5347\u7ea7\u9700\u8981 N\u00d7100 XP\uff0c\u8d8a\u9ad8\u8d8a\u96be"),
      bullet("\u70b9\u51fb StreakBar \u5c55\u5f00\u8be6\u7ec6\u9762\u677f\uff0c\u67e5\u770b\u5b8c\u6574\u89c4\u5219\u548c\u5347\u7ea7\u8fdb\u5ea6"),
      bullet("\u6210\u7ee9\u5355\u5206\u4eab\uff1a\u4e00\u952e\u751f\u6210\u5b66\u4e60\u62a5\u544a\uff0c\u590d\u5236\u5206\u4eab\u5230\u793e\u4ea4\u5e73\u53f0"),
      p([text("\u6240\u6709\u6570\u636e\u90fd\u5b58\u5728\u6d4f\u89c8\u5668\u672c\u5730\u2014\u2014\u6ca1\u6709\u6ce8\u518c\u3001\u6ca1\u6709\u767b\u5f55\u3001\u5f7b\u5e95\u7684\u9690\u79c1\u4fdd\u62a4\u3002")]),
      p([text("这个设计部分受到了知乎用户吴乐旻的启发。他用Claude Code搭建了一个叫\u201c苏格拉底\u00b7七\u201d的系统，让AI扮演动漫角色当家教。我们在此基础上做了完整产品化：6位预设导师 + 跨导师记忆 + 社交模拟 + 游戏化 + 7层系统提示词架构。")]),
      hr(),

      // Section 4 - Renqingshigu
      heading("\u5173\u4e8e\u201c\u4eba\u60c5\u4e16\u6545\u201d\u8fd9\u4e2a\u6280\u80fd", HeadingLevel.HEADING_2),
      p("\u8fd9\u53ef\u80fd\u662f\u5168\u7f51\u7b2c\u4e00\u4e2a\u7528AI\u6559\u201c\u4eba\u60c5\u4e16\u6545\u201d\u7684\u6280\u80fd\u3002"),
      p("\u4e0d\u662f\u6559\u4f60\u201c\u8981\u6709\u793c\u8c8c\u201d\u4e4b\u7c7b\u7684\u5e9f\u8bdd\u3002\u662f\u5177\u4f53\u5230\uff1a"),
      bullet("\u996d\u5c40\u5ea7\u4f4d\u600e\u4e48\u6392\uff0c\u4e3b\u4f4d\u5728\u54ea\uff0c\u4f60\u8be5\u5750\u54ea"),
      bullet("\u656c\u9152\u7684\u987a\u5e8f\u3001\u676f\u5b50\u9ad8\u5ea6\u3001\u201c\u4ee5\u8336\u4ee3\u9152\u201d\u600e\u4e48\u8bf4"),
      bullet("\u62a2\u4e70\u5355\u7684\u65f6\u673a\u548c\u8282\u594f\uff08\u4ec0\u4e48\u65f6\u5019\u575a\u6301\uff0c\u4ec0\u4e48\u65f6\u5019\u8ba9\u6b65\uff09"),
      bullet("\u9001\u793c\u7684\u7981\u5fcc\uff08\u949f=\u7ec8\uff0c\u68a8=\u79bb\uff0c\u4f1e=\u6563\uff0c\u56db=\u6b7b\uff09"),
      bullet("\u7ea2\u5305\u91d1\u989d\u89c4\u5219\uff08\u5e268\uff0c\u90784\uff0c\u91d1\u989d\u53cd\u6620\u5173\u7cfb\u8fdc\u8fd1\uff09"),
      bullet("\u804c\u573a\u6f5c\u89c4\u5219\uff08\u591a\u8bf7\u793a\u591a\u6c47\u62a5\u3001\u4e0d\u8981\u8d8a\u7ea7\u6c47\u62a5\u3001\u516c\u5f00\u8868\u626c\u79c1\u4e0b\u6279\u8bc4\uff09"),
      bullet("\u201c\u8003\u8651\u8003\u8651\u201d\u5728\u4e2d\u6587\u91cc\u901a\u5e38\u610f\u5473\u7740\u201c\u4e0d\u884c\u201d"),
      p("\u8fd9\u4e9b\u4e1c\u897f\u5728\u54ea\u672c\u6559\u6750\u91cc\uff1f\u6ca1\u6709\u3002\u4f46\u6bcf\u4e2a\u4e2d\u56fd\u4eba\u90fd\u5728\u771f\u5b9e\u573a\u666f\u91cc\u5403\u8fc7\u8fd9\u4e9b\u4e8f\u3002"),
      p([bold("\u73b0\u5728\u4f60\u53ef\u4ee5\u8ba9AI\u6a21\u62df\u8fd9\u4e9b\u573a\u666f\uff0c\u5b89\u5168\u5730\u7ec3\u4e60\u3002")]),
      hr(),

      // Section 5 - Learn AI
      heading("\u6700\u706b\u7684\u5b66\u79d1\uff1a\u5982\u4f55\u5b66AI\uff1f", HeadingLevel.HEADING_2),
      p("\u73b0\u5728\u6240\u6709\u4eba\u90fd\u60f3\u5b66AI\uff0c\u4f46\u7edd\u5927\u591a\u6570\u4eba\u7684\u8def\u5f84\u662f\u9519\u7684\u3002"),
      p("\u6211\u5728\u9879\u76ee\u91cc\u4e13\u95e8\u8bbe\u8ba1\u4e86\u4e00\u4e2aAI\u7d20\u517b\u6846\u67b6\uff0c\u4e09\u5c42\u7ed3\u6784\uff1a"),
      p([bold("\u7b2c\u4e00\u5c42\uff1aAI\u4f7f\u7528\u8005\uff08\u6240\u6709\u4eba\u90fd\u9700\u8981\uff09")]),
      bullet("\u5982\u4f55\u5199\u6709\u6548\u7684prompt"),
      bullet("\u5982\u4f55\u5224\u65adAI\u8f93\u51fa\u7684\u6b63\u786e\u6027\uff08AI\u4f1a\u81ea\u4fe1\u5730\u80e1\u8bf4\u516b\u9053\uff09"),
      bullet("\u4ec0\u4e48\u65f6\u5019\u8be5\u7528AI\uff0c\u4ec0\u4e48\u65f6\u5019\u4e0d\u8be5"),
      p([bold("\u7b2c\u4e8c\u5c42\uff1aAI\u589e\u5f3a\u5de5\u4f5c\u8005\uff08\u5927\u591a\u6570\u77e5\u8bc6\u5de5\u4f5c\u8005\u9700\u8981\uff09")]),
      bullet("\u628aAI\u6574\u5408\u5230\u4f60\u7684\u5de5\u4f5c\u6d41\u7a0b\u4e2d"),
      bullet("\u6570\u636e\u5206\u6790\u81ea\u52a8\u5316"),
      bullet("\u8ba9AI\u8f85\u52a9\u5199\u4f5c\u3001\u7f16\u7a0b\u3001\u7814\u7a76"),
      p([bold("\u7b2c\u4e09\u5c42\uff1aAI\u6784\u5efa\u8005\uff08\u6280\u672f\u4ece\u4e1a\u8005\uff09")]),
      bullet("\u7406\u89e3\u673a\u5668\u5b66\u4e60\u539f\u7406\uff08\u4e0d\u662f\u80cc\u516c\u5f0f\uff0c\u662f\u7406\u89e3\u76f4\u89c9\uff09"),
      bullet("\u5fae\u8c03\u6a21\u578b"),
      bullet("\u6784\u5efaAI\u5e94\u7528"),
      p([bold("\u6bcf\u4e00\u5c42\u90fd\u7528Human Skill Tree\u7684\u65b9\u6cd5\u8bba\u6765\u6559\uff0c\u5f3a\u8c03\u4e3b\u52a8\u5b66\u4e60\u3001\u95f4\u9694\u91cd\u590d\u3001\u5728\u505a\u4e2d\u5b66\u3002")]),
      hr(),

      // Section 6 - Web Platform
      heading("\u4ea4\u4e92\u5f0fWeb\u5b66\u4e60\u5e73\u53f0\uff1a\u5b8c\u6574\u4ea7\u54c1\u4f53\u9a8c", HeadingLevel.HEADING_2),
      p("\u9664\u4e86 AI Agent \u6280\u80fd\u96c6\uff0c\u6211\u4eec\u63a8\u51fa\u4e86\u4ea4\u4e92\u5f0f Web \u5b66\u4e60\u5e73\u53f0\u2014\u2014\u6db5\u76d6\u4ece\u201c\u7b2c\u4e00\u6b21\u6253\u5f00\u201d\u5230\u201c\u957f\u671f\u575a\u6301\u201d\u7684\u5b8c\u6574\u5b66\u4e60\u94fe\u8def\u3002"),
      p([bold("\u4e24\u4e2a\u9879\u76ee\uff0c\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f\uff1a")]),
      makeTable(
        ["\u9879\u76ee", "\u5b9a\u4f4d", "\u94fe\u63a5"],
        [
          ["Human Skill Tree", "AI Agent \u6280\u80fd\u96c6\uff0c\u5728\u4efb\u610f AI \u5de5\u5177\u4e2d\u4f7f\u7528", "github.com/24kchengYe/human-skill-tree"],
          ["Human Skill Tree App", "\u4ea4\u4e92\u5f0f Web \u5b66\u4e60\u5e73\u53f0\uff0c\u5185\u7f6e\u82cf\u683c\u62c9\u5e95\u5bfc\u5e08", "github.com/24kchengYe/human-skill-tree-app"],
        ],
        [2500, 4000, 2860]
      ),
      p(""),
      p([bold("\u82cf\u683c\u62c9\u5e95\u5bfc\u5e08\u7cfb\u7edf")]),
      bullet("\u2728 6\u4f4dAI\u5bfc\u5e08\u89d2\u8272 + \u5f3a\u5236\u82cf\u683c\u62c9\u5e95\u5f0f\u95ee\u7b54"),
      bullet("\ud83e\udde0 \u8de8\u5bfc\u5e08\u8bb0\u5fc6\uff1a\u5bfc\u5e08\u5171\u4eab\u6559\u5b66\u4e0a\u4e0b\u6587"),
      bullet("\ud83d\udcac \u793e\u4ea4\u4e16\u754c\uff1a\u5bfc\u5e08\u7fa4\u804a + \u5b66\u4e60\u65e5\u8bb0"),
      bullet("\ud83d\ude80 \u96f6\u914d\u7f6e\u542f\u52a8\uff1a\u9996\u6b21\u6253\u5f00\u81ea\u52a8\u5206\u914d\u5bfc\u5e08"),
      p([bold("\u6e38\u620f\u5316\u4e0e\u8fdb\u5ea6\u8ffd\u8e2a")]),
      bullet("\ud83d\udd25 \u8fde\u7eed\u5b66\u4e60\u5929\u6570 + XP\u7b49\u7ea7\u7cfb\u7edf"),
      bullet("\ud83d\udcca \u81ea\u52a8\u63d0\u53d6\u77e5\u8bc6\u70b9 + \u91cf\u5316\u638c\u63e1\u5ea6"),
      bullet("\ud83d\udd04 \u95f4\u9694\u91cd\u590d\u590d\u4e60\uff08Leitner\u7cfb\u7edf\uff09"),
      bullet("\ud83d\udccb \u6210\u7ee9\u5355\u5206\u4eab + XP\u8be6\u60c5\u9762\u677f"),
      p([bold("\u5e73\u53f0\u80fd\u529b")]),
      bullet("\ud83c\udf33 \u53ef\u89c6\u5316\u6280\u80fd\u6811\uff0833\u4e2a\u6280\u80fd\uff0cReact Flow\uff09"),
      bullet("\ud83e\udd16 18+\u4e2aAI\u6a21\u578b\u81ea\u7531\u5207\u6362"),
      bullet("\ud83d\udce5 \u9010\u6761\u6570\u636e\u5bfc\u51fa\u4e3aMarkdown"),
      bullet("\ud83c\udf0d \u4e2d\u6587/English/\u65e5\u672c\u8a9e\u4e09\u8bed\u652f\u6301"),
      bullet("\ud83d\udcbe \u5168\u90e8\u6570\u636e\u5b58\u6d4f\u89c8\u5668\u672c\u5730\uff0c\u9690\u79c1\u5b89\u5168"),
      p(""),
      p([bold("\u8bd5\u8bd5Web\u7248\uff1a"), text("\u514b\u9686 "), new ExternalHyperlink({ children: [text("human-skill-tree-app", { color: "2E75B6", underline: {} })], link: "https://github.com/24kchengYe/human-skill-tree-app" }), text(" \u4ed3\u5e93\uff0cnpm install && npm run dev \u5373\u53ef\u4f53\u9a8c\u3002")]),
      hr(),

      // Section 7 - Why open source
      heading("\u4e3a\u4ec0\u4e48\u8981\u5f00\u6e90\uff1f", HeadingLevel.HEADING_2),
      p("\u56e0\u4e3a\u8fd9\u4e2a\u95ee\u9898\u592a\u5927\u4e86\uff0c\u4e0d\u662f\u4e00\u4e2a\u4eba\u80fd\u89e3\u51b3\u7684\u3002"),
      p("\u5168\u4e16\u754c\u670970\u4ebf\u4eba\u9700\u8981\u5728AI\u65f6\u4ee3\u91cd\u65b0\u5b66\u4e60\u3002\u6bcf\u4e2a\u56fd\u5bb6\u7684\u6559\u80b2\u7cfb\u7edf\u4e0d\u540c\uff0c\u6bcf\u79cd\u6587\u5316\u7684\u793e\u4ea4\u89c4\u5219\u4e0d\u540c\uff0c\u6bcf\u4e2a\u884c\u4e1a\u9700\u8981\u7684\u6280\u80fd\u4e0d\u540c\u3002"),
      p([bold("\u4f46\u6211\u9700\u8981\u4f60\u7684\u5e2e\u52a9\uff0c\u4e0d\u7ba1\u4f60\u662f\u6559\u5e08\u3001\u5b66\u751f\u3001\u5bb6\u957f\u3001\u7a0b\u5e8f\u5458\uff0c\u8fd8\u662f\u4efb\u4f55\u5173\u5fc3\u201c\u4eba\u7c7b\u5982\u4f55\u5b66\u4e60\u201d\u7684\u4eba\u3002")]),
      p([bold("\u4e24\u4e2a\u9879\u76ee\uff0c\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f\uff1a")]),
      p([text("\u6280\u80fd\u96c6\uff1a"), new ExternalHyperlink({ children: [bold("github.com/24kchengYe/human-skill-tree", { color: "2E75B6", underline: {} })], link: "https://github.com/24kchengYe/human-skill-tree" })]),
      p([text("Web\u5e73\u53f0\uff1a"), new ExternalHyperlink({ children: [bold("github.com/24kchengYe/human-skill-tree-app", { color: "2E75B6", underline: {} })], link: "https://github.com/24kchengYe/human-skill-tree-app" })]),
      p("\u4f60\u53ef\u4ee5\uff1a"),
      bullet("\u2b50 Star \u8ba9\u66f4\u591a\u4eba\u770b\u5230\uff08\u4e24\u4e2a\u9879\u76ee\u90fd\u53ef\u4ee5 Star\uff09"),
      bullet("\u63d0 Issue \u5efa\u8bae\u65b0\u6280\u80fd\u6216\u65b0\u529f\u80fd"),
      bullet("\u76f4\u63a5\u8d21\u732e\u4e00\u4e2a\u4f60\u64c5\u957f\u9886\u57df\u7684 SKILL.md"),
      bullet("Fork \u540e\u6539\u9020\u6210\u4f60\u81ea\u5df1\u7684\u6559\u5b66\u5de5\u5177"),
      p("MIT / AGPL-3.0 \u5f00\u6e90\u534f\u8bae\uff0c\u514d\u8d39\u4f7f\u7528\uff0c\u6c38\u8fdc\u5f00\u6e90\u3002"),
      hr(),

      // Closing
      heading("\u4e00\u4e2a\u95ee\u9898\u7ed3\u5c3e", HeadingLevel.HEADING_2),
      quote([italic("AI\u901a\u8fc7Skill\u548cMCP\u83b7\u5f97\u4e86\u64cd\u7eb5\u73b0\u5b9e\u7684\u4e13\u9879\u80fd\u529b\u3002\u90a3\u4eba\u7c7b\u4f55\u53bb\u4f55\u4ece\uff1f\u5982\u4f55\u5b66\u4e60\uff1f\u6210\u5e74\u7684\u4eba\u7c7b\u5982\u4f55\u8d76\u4e0a\uff0c\u65b0\u751f\u7684\u4eba\u7c7b\u5982\u4f55\u5f00\u59cb\uff1f", { color: "555555" })]),
      p("\u8fd9\u662f\u6211\u521b\u5efa\u8fd9\u4e2a\u9879\u76ee\u65f6\u7684\u95ee\u9898\u3002\u4e5f\u662f\u7559\u7ed9\u4f60\u7684\u95ee\u9898\u3002"),
      p("\u6b22\u8fce\u6765\u8bc4\u8bba\u533a\u8ba8\u8bba\u3002"),
      hr(),

      // References
      heading("\u53c2\u8003\u6587\u732e", HeadingLevel.HEADING_2),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [text("Bastani, H. et al. (2025). Generative AI without guardrails can harm learning. "), italic("PNAS"), text(", 122(26). doi:10.1073/pnas.2422633122")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [text("Dunlosky, J. et al. (2013). Improving students\u2019 learning with effective learning techniques. "), italic("Psychological Science in the Public Interest"), text(", 14(1), 4-58.")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [text("Donoghue, G. M. & Hattie, J. A. C. (2021). A meta-analysis of ten learning techniques. "), italic("Frontiers in Education"), text(". doi:10.3389/feduc.2021.657895")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [text("Tabibian, B. et al. (2019). Enhancing human learning via spaced repetition optimization. "), italic("PNAS"), text(", 116(10), 3988–3993. doi:10.1073/pnas.1815156116")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [text("Oakley, B. (2014). "), italic("A Mind for Numbers"), text(". TarcherPerigee.")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [text("Brown, P. C., Roediger, H. L., & McDaniel, M. A. (2014). "), italic("Make It Stick: The Science of Successful Learning"), text(". Harvard University Press.")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [text("\u5434\u4e50\u65fb (2026). \u82cf\u683c\u62c9\u5e95\u00b7\u4e03\uff1a\u7528Claude Code\u642d\u5efa\u82cf\u683c\u62c9\u5e95\u5f0fAI\u5bb6\u6559\u7cfb\u7edf. \u77e5\u4e4e\u4e13\u680f.")] }),
      p(""),
      hr(),
      p([italic("\u4f5c\u8005\uff1a24kchengYe \u00b7 "), new ExternalHyperlink({ children: [italic("\u6280\u80fd\u96c6 GitHub", { color: "2E75B6", underline: {} })], link: "https://github.com/24kchengYe/human-skill-tree" }), italic(" \u00b7 "), new ExternalHyperlink({ children: [italic("Web\u5e73\u53f0 GitHub", { color: "2E75B6", underline: {} })], link: "https://github.com/24kchengYe/human-skill-tree-app" }), italic(" \u00b7 \u5982\u679c\u89c9\u5f97\u6709\u7528\uff0c\u8bf7\u7ed9\u9879\u76ee\u4e00\u4e2a \u2b50")]),
      p([italic("#AI\u6559\u80b2 #\u8ba4\u77e5\u79d1\u5b66 #\u4eba\u7c7b\u6280\u80fd\u6811 #ChatGPT #Claude #AI\u5b66\u4e60 #\u7ec8\u8eab\u5b66\u4e60 #\u5f00\u6e90\u6559\u80b2", { color: "999999" })]),
    ],
  }],
});

const outPath = "D:/pythonPycharms/\u5DE5\u5177\u5F00\u53D1/054ai\u6559\u80B2/human-skill-tree/docs/article-zhihu.docx";
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outPath, buffer);
  console.log("Word document created: " + outPath);
});
