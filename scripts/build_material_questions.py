# -*- coding: utf-8 -*-
"""从 题库/_mat_extract.txt 与 试题N-答案.pdf 文本抽取客观题，输出 JSON。"""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BANK = ROOT / "题库"
EXTRACT = BANK / "_mat_extract.txt"

TF_ANS = {
    1: list("×√××√××√××"),
    3: list("×××××√××√×"),
    4: list("错对对错对"),  # placeholder overwritten below
    5: list("√×××√√××√×"),
}
SINGLE_ANS = {
    1: list("DBBBDCCDAA"),
    2: list("DADDCBCCA")[:8],
    4: list("CBDCAB"),
    5: list("DCDCCBABCDA")[:10],
}

FILL_ANS = {
    1: [
        ["强度", "刚度", "稳定性"],
        ["主应力"],
        ["5%"],
        ["8"],
        ["0.25", "1/4"],
        ["5"],
        ["1"],
        ["临界压力"],
    ],
    2: [
        ["112MPa", "142MPa"],
        ["连续性", "均匀性", "各向同性"],
        ["无数多", "无数多条"],
    ],
}


def pdftotext(name: str) -> str:
    p = BANK / f"{name}.pdf"
    if not p.exists():
        return ""
    r = subprocess.run(
        ["pdftotext", "-enc", "UTF-8", str(p), "-"],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    return r.stdout or ""


def parse_tf_answers_from_ref(text: str) -> list[str]:
    m = re.search(r"判断题[\s\S]*?答案\s*([×√\s]+)", text)
    if not m:
        m = re.search(r"答案\s*([×√ⅹ]+)", text)
    if not m:
        return []
    raw = re.sub(r"\s+", "", m.group(1))
    out = []
    for ch in raw:
        if ch in "×ⅹ":
            out.append("错")
        elif ch == "√":
            out.append("对")
    return out


def parse_single_row(text: str) -> list[str]:
    m = re.search(r"选择题[\s\S]*?题号[\s\S]*?答案\s*([A-D\s]+)", text)
    if not m:
        return []
    letters = re.findall(r"[A-D]", m.group(1))
    return letters


def latex_escape(s: str) -> str:
    s = s.replace("\\", "\\\\")
    s = re.sub(r"\$([^$]+)\$", lambda m: "$" + m.group(1).replace("\\", "\\\\") + "$", s)
    return s


def norm_stem(s: str) -> str:
    s = re.sub(r"\s+", " ", s).strip()
    s = s.replace("", "\\sigma ").replace("", "\\tau ")
    s = re.sub(r"[（(]\s*[)）]", "()", s)
    return s


def split_papers(text: str) -> dict[int, str]:
    parts = re.split(r"(?=试题\s*[1-5]\s*\n|试题\s*[1-5]\s*$)", text)
    papers: dict[int, str] = {}
    for part in parts:
        m = re.match(r"试题\s*(\d+)", part.strip())
        if m:
            papers[int(m.group(1))] = part
    if 1 not in papers:
        m = re.search(r"试题\s*1", text)
        if m:
            rest = text[m.start() :]
            for n in range(1, 6):
                pat = rf"试题\s*{n}\b"
                starts = [x.start() for x in re.finditer(pat, rest)]
                if starts:
                    idx = starts[0]
                    nxt = re.search(rf"试题\s*{n + 1}\b", rest[idx + 3 :])
                    end = idx + 3 + nxt.start() if nxt else len(rest)
                    papers[n] = rest[idx:end]
    return papers


def parse_tf_stems(section: str) -> list[str]:
    block = re.search(r"一、判断题[\s\S]*?(?=二、选择题|二、\s*选择题)", section)
    if not block:
        return []
    body = block.group(0)
    body = re.sub(r"一、判断题[^\n]*\n", "", body)
    items = re.findall(r"(?:^|\n)\s*(\d+)[\.．、]\s*([^\n]+)", body)
    stems = []
    for num, stem in sorted(items, key=lambda x: int(x[0])):
        if int(num) <= 10:
            stems.append(norm_stem(stem))
    return stems[:10]


def parse_single_stems(section: str, max_n: int = 10) -> list[dict]:
    block = re.search(r"二、选择题[\s\S]*?(?=三、填空题|三、)", section)
    if not block:
        return []
    body = block.group(0)
    chunks = re.split(r"(?=\n\s*\d+[\.．、])", body)
    out = []
    for ch in chunks:
        m = re.match(r"\s*(\d+)[\.．、]\s*(.+)", ch, re.S)
        if not m or int(m.group(1)) > max_n:
            continue
        raw = m.group(2).strip()
        opt_m = re.findall(r"[A-D][\.．、]\s*([^\nA-D]+?)(?=\s*[A-D][\.．、]|$)", raw, re.S)
        stem_part = re.split(r"\s*A[\.．、]", raw, maxsplit=1)[0].strip()
        stem_part = re.sub(r"图示[^。]*。", "", stem_part) if len(stem_part) < 5 else stem_part
        if not stem_part:
            stem_part = raw.split("A.")[0].split("A．")[0].strip()
        options = [norm_stem(o) for o in opt_m[:4]]
        if len(options) >= 2:
            out.append({"n": int(m.group(1)), "stem": norm_stem(stem_part), "options": options})
    return sorted(out, key=lambda x: x["n"])


def parse_fill_stems(section: str) -> list[str]:
    block = re.search(r"三、填空题[\s\S]*?(?=四、|五、|六、|七、)", section)
    if not block:
        return []
    body = block.group(0)
    items = re.findall(r"(?:^|\n)\s*(\d+)[\.．、]\s*([^\n]+)", body)
    return [norm_stem(s) for _, s in sorted(items, key=lambda x: int(x[0]))[:12]]


def chapter_for_tf(stem: str) -> str:
    if any(k in stem for k in ("压杆", "稳定", "临界")):
        return "08"
    if any(k in stem for k in ("弯曲", "梁", "中性")):
        return "04"
    if any(k in stem for k in ("扭", "轴")):
        return "02"
    if any(k in stem for k in ("应力", "单元体", "切应力")):
        return "06"
    return "01"


def chapter_for_single(stem: str) -> str:
    if "压杆" in stem or "稳定" in stem or "欧拉" in stem:
        return "08"
    if "弯" in stem or "梁" in stem:
        return "04"
    if "扭" in stem or "扭矩" in stem:
        return "02"
    if "惯性矩" in stem or "截面" in stem:
        return "03"
    if "强度理论" in stem or "应力圆" in stem or "主应力" in stem:
        return "06"
    return "01"


def main():
    if not EXTRACT.exists():
        subprocess.run(
            ["pdftotext", "-enc", "UTF-8", str(BANK / "材料力学题库3026230.pdf"), str(EXTRACT)],
            check=True,
        )
    text = EXTRACT.read_text(encoding="utf-8", errors="replace")
    papers = split_papers(text)

    for n in (1, 3, 4, 5):
        ref = pdftotext(f"试题{n}-答案" if n != 5 else "试题5-答卷")
        if n == 1:
            tf = parse_tf_answers_from_ref(ref)
            if len(tf) >= 10:
                TF_ANS[1] = tf
            sg = parse_single_row(ref)
            if len(sg) >= 10:
                SINGLE_ANS[1] = sg
        if n == 3:
            tf = parse_tf_answers_from_ref(ref)
            if len(tf) >= 10:
                TF_ANS[3] = tf
        if n == 4:
            ref4 = pdftotext("试题4-答案")
            m = re.search(r"一、([\s\S]*?)二、", ref4)
            if m:
                line = m.group(1)
                tf = []
                for ch in re.findall(r"[对错]", line.replace("错", "错").replace("对", "对")):
                    tf.append("对" if ch == "对" else "错")
                if len(tf) >= 5:
                    TF_ANS[4] = tf[:10]
            m2 = re.search(r"二、([\s\S]*?)三、", ref4)
            if m2:
                SINGLE_ANS[4] = re.findall(r"[A-D]", m2.group(1))[:6]

    ref2 = pdftotext("试题2-答案")
    sg2 = parse_single_row(ref2)
    if sg2:
        SINGLE_ANS[2] = sg2

    questions = []
    qidx = 0

    for paper in sorted(papers.keys()):
        sec = papers[paper]
        source = f"材料力学试卷{paper}"
        tf_stems = parse_tf_stems(sec)
        tf_ans = TF_ANS.get(paper, [])
        for i, stem in enumerate(tf_stems):
            if i >= len(tf_ans):
                break
            ans = tf_ans[i]
            if ans in ("×", "ⅹ"):
                ans = "错"
            elif ans == "√":
                ans = "对"
            ch = chapter_for_tf(stem)
            qidx += 1
            questions.append(
                {
                    "id": f"mat-p{paper}-tf-{i+1:02d}",
                    "qtype": "truefalse",
                    "stem": stem,
                    "answer": ans,
                    "kp": [f"mat-kp-{ch}"],
                    "source": source,
                    "difficulty": 2,
                }
            )

        singles = parse_single_stems(sec, 10 if paper != 2 else 8)
        s_ans = SINGLE_ANS.get(paper, [])
        for item in singles:
            i = item["n"] - 1
            if i >= len(s_ans):
                continue
            letter = s_ans[i]
            if len(letter) > 1:
                continue
            ch = chapter_for_single(item["stem"])
            questions.append(
                {
                    "id": f"mat-p{paper}-single-{item['n']:02d}",
                    "qtype": "single",
                    "stem": item["stem"],
                    "options": item["options"],
                    "answer": letter,
                    "kp": [f"mat-kp-{ch}"],
                    "source": source,
                    "difficulty": 2,
                }
            )

        if paper == 1:
            fills = parse_fill_stems(sec)
            for i, stem in enumerate(fills[:8]):
                if i >= len(FILL_ANS[1]):
                    break
                ans = FILL_ANS[1][i]
                if len(ans) == 1:
                    answer = ans[0]
                else:
                    answer = "、".join(ans[:3]) if i == 0 else ans[0]
                questions.append(
                    {
                        "id": f"mat-p1-fill-{i+1:02d}",
                        "qtype": "fill",
                        "stem": stem + "______",
                        "answer": answer,
                        "kp": ["mat-kp-01" if i == 0 else "mat-kp-06" if i == 1 else "mat-kp-01"],
                        "source": source,
                        "difficulty": 2,
                    }
                )

    out = ROOT / "scripts" / "material_questions.json"
    out.write_text(json.dumps(questions, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"wrote {len(questions)} questions -> {out}")


if __name__ == "__main__":
    main()