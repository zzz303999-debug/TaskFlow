#!/usr/bin/env python3
import cairosvg
import os

ICONS = {
    'priority': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 6 L30 18 L42 18 L32 26 L36 38 L24 30 L12 38 L16 26 L6 18 L18 18 Z" fill="none" stroke="#8E8E93" stroke-width="3"/></svg>''',
    'deadline': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="none" stroke="#8E8E93" stroke-width="3"/><line x1="24" y1="24" x2="24" y2="14" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/><line x1="24" y1="24" x2="32" y2="20" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/></svg>''',
    'note': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="4" fill="none" stroke="#8E8E93" stroke-width="3"/><line x1="16" y1="18" x2="32" y2="18" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/><line x1="16" y1="26" x2="32" y2="26" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/><line x1="16" y1="34" x2="28" y2="34" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/></svg>''',
    'tag': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M10 24 L24 10 L38 24 L24 38 Z" fill="none" stroke="#8E8E93" stroke-width="3"/><circle cx="24" cy="24" r="4" fill="#8E8E93"/></svg>''',
}

base_dir = "/root/.openclaw/workspace/TaskFlow/images"
for name, svg in ICONS.items():
    cairosvg.svg2png(bytestring=svg, write_to=f"{base_dir}/{name}.png", output_width=48, output_height=48)
print("✅ detail 页面图标已生成")
