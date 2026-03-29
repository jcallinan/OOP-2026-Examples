#!/usr/bin/env python3
import html
import re
import zipfile
from pathlib import Path

DOCX = Path('../../Chapters 8,9 and 10 - Trees, Graphs, and Sorting and Searching Algorithms.docx')
OUTPUT = Path('raw-docx-code-snippets.md')

code_markers = (
    'function ', 'var ', 'this.', 'return ', 'if (', 'else', 'while (',
    'for (', 'console.log', 'class ', '=>', 'push(', 'insert', 'search',
    'rotation', 'Graph', 'BinarySearchTree', 'sort', 'binarySearch'
)

xml = zipfile.ZipFile(DOCX).read('word/document.xml').decode('utf-8')
paragraphs = re.findall(r'<w:p[\s\S]*?</w:p>', xml)

lines = []
for para in paragraphs:
    text_nodes = re.findall(r'<w:t[^>]*>([\s\S]*?)</w:t>', para)
    if not text_nodes:
        continue
    text = ''.join(html.unescape(node) for node in text_nodes).strip()
    if not text:
        continue
    if any(marker in text for marker in code_markers):
        lines.append(text)

OUTPUT.write_text(
    '# Raw .docx code-like snippets\n\n' + '\n'.join(f'- `{line}`' for line in lines),
    encoding='utf-8'
)

print(f'Wrote {len(lines)} lines to {OUTPUT}')
