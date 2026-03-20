#!/usr/bin/env python3
import cairosvg
import os

ICONS = {
    'mic': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect x="16" y="10" width="16" height="24" rx="8" fill="none" stroke="#8E8E93" stroke-width="3"/><path d="M24 34 L24 40" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/><path d="M14 22 Q14 32 24 32 Q34 32 34 22" fill="none" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/></svg>''',
    'ai-sparkle': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 6 L27 18 L39 21 L27 24 L24 36 L21 24 L9 21 L21 18 Z" fill="#007AFF"/><circle cx="38" cy="10" r="3" fill="#007AFF"/><circle cx="10" cy="38" r="2" fill="#007AFF"/><circle cx="40" cy="38" r="2" fill="#007AFF"/></svg>''',
    'empty': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="30" width="60" height="50" rx="8" fill="none" stroke="#C6C6C8" stroke-width="3"/><line x1="30" y1="45" x2="70" y2="45" stroke="#C6C6C8" stroke-width="3" stroke-linecap="round"/><line x1="30" y1="55" x2="60" y2="55" stroke="#C6C6C8" stroke-width="3" stroke-linecap="round"/><line x1="30" y1="65" x2="65" y2="65" stroke="#C6C6C8" stroke-width="3" stroke-linecap="round"/><circle cx="70" cy="70" r="12" fill="#34C759"/><path d="M65 70 L69 74 L75 66" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>''',
}

base_dir = "/root/.openclaw/workspace/TaskFlow/images"
cairosvg.svg2png(bytestring=ICONS['mic'], write_to=f"{base_dir}/mic.png", output_width=48, output_height=48)
cairosvg.svg2png(bytestring=ICONS['ai-sparkle'], write_to=f"{base_dir}/ai-sparkle.png", output_width=48, output_height=48)
cairosvg.svg2png(bytestring=ICONS['empty'], write_to=f"{base_dir}/empty.png", output_width=100, output_height=100)
print("✅ 图标已生成")
