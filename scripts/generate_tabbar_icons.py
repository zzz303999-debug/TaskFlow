#!/usr/bin/env python3
"""
生成 iOS 风格 TabBar 图标
81x81px PNG 格式 - 简约线条设计
"""

import cairosvg
import os

# iOS 风格 TabBar 图标 - 简约线条
ICONS = {
    # 首页 - 简约房子
    'home': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81">
        <path d="M18 38 L40.5 18 L63 38" fill="none" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="26" y="34" width="29" height="29" fill="none" stroke="#94a3b8" stroke-width="3.5" stroke-linejoin="round"/>
    </svg>''',
    
    'home-active': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81">
        <path d="M18 38 L40.5 18 L63 38" fill="none" stroke="#007AFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="26" y="34" width="29" height="29" fill="none" stroke="#007AFF" stroke-width="3.5" stroke-linejoin="round"/>
    </svg>''',
    
    # 日历 - 简约日历
    'calendar': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81">
        <rect x="20" y="24" width="41" height="38" rx="6" fill="none" stroke="#94a3b8" stroke-width="3.5"/>
        <line x1="20" y1="34" x2="61" y2="34" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="30" y1="18" x2="30" y2="26" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="51" y1="18" x2="51" y2="26" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
    </svg>''',
    
    'calendar-active': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81">
        <rect x="20" y="24" width="41" height="38" rx="6" fill="none" stroke="#007AFF" stroke-width="3.5"/>
        <line x1="20" y1="34" x2="61" y2="34" stroke="#007AFF" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="30" y1="18" x2="30" y2="26" stroke="#007AFF" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="51" y1="18" x2="51" y2="26" stroke="#007AFF" stroke-width="3.5" stroke-linecap="round"/>
    </svg>''',
    
    # 统计 - 简约条形图
    'stats': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81">
        <rect x="20" y="48" width="10" height="18" rx="2" fill="none" stroke="#94a3b8" stroke-width="3.5"/>
        <rect x="35.5" y="36" width="10" height="30" rx="2" fill="none" stroke="#94a3b8" stroke-width="3.5"/>
        <rect x="51" y="42" width="10" height="24" rx="2" fill="none" stroke="#94a3b8" stroke-width="3.5"/>
    </svg>''',
    
    'stats-active': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81">
        <rect x="20" y="48" width="10" height="18" rx="2" fill="none" stroke="#007AFF" stroke-width="3.5"/>
        <rect x="35.5" y="36" width="10" height="30" rx="2" fill="none" stroke="#007AFF" stroke-width="3.5"/>
        <rect x="51" y="42" width="10" height="24" rx="2" fill="none" stroke="#007AFF" stroke-width="3.5"/>
    </svg>''',
    
    # 我的 - 简约用户
    'profile': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81">
        <circle cx="40.5" cy="32" r="10" fill="none" stroke="#94a3b8" stroke-width="3.5"/>
        <path d="M24 62 C24 52 32 48 40.5 48 C49 48 57 52 57 62" fill="none" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
    </svg>''',
    
    'profile-active': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81">
        <circle cx="40.5" cy="32" r="10" fill="none" stroke="#007AFF" stroke-width="3.5"/>
        <path d="M24 62 C24 52 32 48 40.5 48 C49 48 57 52 57 62" fill="none" stroke="#007AFF" stroke-width="3.5" stroke-linecap="round"/>
    </svg>''',
}

def create_icon(svg_content, output_path, size=81):
    """将 SVG 转换为指定大小的 PNG"""
    cairosvg.svg2png(
        bytestring=svg_content,
        write_to=output_path,
        output_width=size,
        output_height=size
    )
    print(f"✓ 创建：{output_path}")

def main():
    base_dir = "/root/.openclaw/workspace/TaskFlow/images"
    os.makedirs(base_dir, exist_ok=True)
    
    icon_names = ['home', 'home-active', 'calendar', 'calendar-active', 
                  'stats', 'stats-active', 'profile', 'profile-active']
    
    for icon_name in icon_names:
        if icon_name in ICONS:
            output_path = os.path.join(base_dir, f"{icon_name}.png")
            create_icon(ICONS[icon_name], output_path, size=81)
    
    print("\n✅ iOS 风格 TabBar 图标已生成！")

if __name__ == "__main__":
    main()
