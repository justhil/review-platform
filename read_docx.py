# -*- coding: utf-8 -*-
from docx import Document
import sys
sys.stdout.reconfigure(encoding='utf-8')

doc = Document(r"D:\AAai\review-platform\资料\大学物理\大物A_上课内容建议.docx")
for p in doc.paragraphs:
    if p.text.strip():
        print(p.text)
