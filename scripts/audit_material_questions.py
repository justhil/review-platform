# -*- coding: utf-8 -*-
"""对照 PDF 卷面统计客观题数量 vs questions.ts"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TS = ROOT / "src/data/materialMechanics/questions.ts"
text = TS.read_text(encoding="utf-8")

expected = {
    1: {"truefalse": 10, "single": 10, "fill": 8},
    2: {"single": 8, "fill": 5},
    3: {"truefalse": 10, "fill": 8},
    4: {"truefalse": 5, "single": 6, "fill": 3},
    5: {"truefalse": 10, "single": 10, "fill": 9},
}

actual: dict[int, dict[str, int]] = {}
for m in re.finditer(
    r"id: 'mat-p(\d+)-(tf|single|fill)-\d+'[\s\S]*?qtype: '(truefalse|single|fill)'",
    text,
):
    p, _, qt = int(m.group(1)), m.group(2), m.group(3)
    actual.setdefault(p, {})
    actual[p][qt] = actual[p].get(qt, 0) + 1

print("试卷 | 题型     | 应有 | 实有 | 状态")
print("-" * 48)
ok = True
for p in sorted(expected):
    for qt, need in expected[p].items():
        got = actual.get(p, {}).get(qt, 0)
        st = "OK" if got >= need else "缺"
        if got < need:
            ok = False
        print(f"  {p}   | {qt:10} | {need:4} | {got:4} | {st}")
print("-" * 48)
print("合计题数:", len(re.findall(r"id: 'mat-", text)))
print("审计:", "通过" if ok else "未通过")