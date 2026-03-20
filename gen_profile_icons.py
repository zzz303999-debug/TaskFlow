#!/usr/bin/env python3
import cairosvg

ICONS = {
    'dark': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 6 C14 6 6 14 6 24 C6 34 14 42 24 42 C24 42 24 42 24 42" fill="none" stroke="#8E8E93" stroke-width="3"/><path d="M24 6 C34 6 42 14 42 24 C42 34 34 42 24 42" fill="#8E8E93" opacity="0.3"/></svg>''',
    'settings': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="10" fill="none" stroke="#8E8E93" stroke-width="3"/><path d="M24 10 L24 6 M24 42 L24 38 M10 24 L6 24 M42 24 L38 24 M15 15 L12 12 M36 36 L33 33 M15 33 L12 36 M36 12 L33 15" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/></svg>''',
    'reminder': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 8 C16 8 10 14 10 22 L10 34 L8 38 L40 38 L38 34 L38 22 C38 14 32 8 24 8" fill="none" stroke="#8E8E93" stroke-width="3"/><path d="M18 38 L30 38" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/></svg>''',
    'vip': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 6 L30 18 L42 18 L32 26 L36 38 L24 30 L12 38 L16 26 L6 18 L18 18 Z" fill="none" stroke="#8E8E93" stroke-width="3"/></svg>''',
    'share': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="none" stroke="#8E8E93" stroke-width="3"/><path d="M24 14 L24 24 L32 28" fill="none" stroke="#8E8E93" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>''',
    'feedback': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M10 10 L38 10 L38 30 L24 30 L24 38 L10 30 Z" fill="none" stroke="#8E8E93" stroke-width="3" stroke-linejoin="round"/><circle cx="20" cy="20" r="2" fill="#8E8E93"/><circle cx="28" cy="20" r="2" fill="#8E8E93"/></svg>''',
    'update': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 10 L24 24 L32 28" fill="none" stroke="#8E8E93" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 24 C38 33.941 29.941 42 20 42 C10.059 42 2 33.941 2 24" fill="none" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/></svg>''',
    'about': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="none" stroke="#8E8E93" stroke-width="3"/><path d="M24 20 L24 32 M24 16 L24 14" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/></svg>''',
}

base_dir = "/root/.openclaw/workspace/TaskFlow/images"
for name, svg in ICONS.items():
    cairosvg.svg2png(bytestring=svg, write_to=f"{base_dir}/icon-{name}.png", output_width=48, output_height=48)
print("✅ profile 页面图标已生成")
