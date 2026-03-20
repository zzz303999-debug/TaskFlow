#!/usr/bin/env python3
"""
生成 iOS 风格 TaskFlow 头像
144x144px PNG 格式
"""

import cairosvg
import os

# iOS 风格头像 - 蓝色渐变 + 简约对勾
SVG_DESIGN = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144">
  <!-- 背景渐变 -->
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#007AFF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0055D4;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="highlight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:0.25" />
      <stop offset="100%" style="stop-color:#FFFFFF;stop-opacity:0" />
    </linearGradient>
  </defs>
  
  <!-- 圆角背景 -->
  <rect width="144" height="144" rx="36" fill="url(#bg)"/>
  
  <!-- 高光效果 -->
  <rect width="144" height="72" rx="36" fill="url(#highlight)"/>
  
  <!-- 对勾图标 - 简约风格 -->
  <g transform="translate(36, 36)">
    <!-- 对勾 -->
    <path d="M 20 38 L 32 50 L 56 22" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  
  <!-- 底部装饰 -->
  <rect x="56" y="118" width="32" height="6" rx="3" fill="#FFFFFF" opacity="0.3"/>
</svg>'''

def main():
    output_path = "/root/.openclaw/workspace/TaskFlow/images/avatar.png"
    
    # 确保目录存在
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # 转换 SVG 为 PNG
    cairosvg.svg2png(
        bytestring=SVG_DESIGN,
        write_to=output_path,
        output_width=144,
        output_height=144
    )
    
    print(f"✅ iOS 风格头像已生成：{output_path}")
    print(f"   尺寸：144x144px")
    print(f"   格式：PNG")

if __name__ == "__main__":
    main()
