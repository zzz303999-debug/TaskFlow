# TaskFlow - 智能待办事项小程序

一款设计精美的微信小程序，让任务管理更高效、更有趣。

## ✨ 功能特性

- 📝 **智能收件箱** - 快速添加任务，支持自然语言解析
- 📅 **日历视图** - 日/周/月视图，清晰掌握日程
- 📊 **效率统计** - 数据图表展示，了解你的效率趋势
- 🎮 **游戏化系统** - 经验值、等级、成就徽章
- 🌙 **深色模式** - 护眼模式，夜间使用更舒适
- 🎯 **四象限法则** - 重要紧急矩阵，优先级管理

## 📁 项目结构

```
TaskFlow/
├── app.js                 # 小程序入口
├── app.json               # 全局配置
├── app.wxss               # 全局样式
├── project.config.json    # 项目配置
├── sitemap.json           # 搜索索引配置
├── pages/
│   ├── index/             # 首页（今日任务）
│   ├── detail/            # 任务详情页
│   ├── calendar/          # 日历页
│   ├── stats/             # 统计页
│   └── profile/           # 个人中心
└── images/                # 图标资源（需自行添加）
```

## 🚀 快速开始

### 1. 安装微信开发者工具

下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

### 2. 导入项目

1. 打开微信开发者工具
2. 选择"导入项目"
3. 选择本项目文件夹
4. 填入你的 AppID（测试可用"测试号"）

### 3. 添加 TabBar 图标

由于微信小程序不支持 CDN 图标，需要添加本地图标文件到 `images/` 目录：

| 文件名 | 尺寸 | 说明 |
|--------|------|------|
| home.png | 81x81 | 首页图标 |
| home-active.png | 81x81 | 首页选中图标 |
| calendar.png | 81x81 | 日历图标 |
| calendar-active.png | 81x81 | 日历选中图标 |
| stats.png | 81x81 | 统计图标 |
| stats-active.png | 81x81 | 统计选中图标 |
| profile.png | 81x81 | 我的图标 |
| profile-active.png | 81x81 | 我的选中图标 |

**图标下载**：
- 从 [iconfont.cn](https://www.iconfont.cn) 下载 SVG 后转换为 PNG
- 或使用 [FontAwesome](https://fontawesome.com/icons) 图标
- 或使用在线工具生成：https://www.aigei.com/sicon/

### 4. 编译运行

点击"编译"按钮，即可在模拟器中查看效果。

## 🎨 设计系统

### 色彩

```css
--primary: #2563EB      /* 智慧蓝 */
--orange: #FF754C       /* 活力橙 */
--green: #3FD1A5        /* 清新绿 */
--bg: #F5F5F7           /* 云朵白 */
--text: #1B1B1F         /* 深空黑 */
```

### 圆角

- 卡片：16px
- 按钮：24px
- 小元素：8-12px

### 字体

- 标题：28px bold
- 正文：15px
- 辅助文字：13-14px

## 📱 页面说明

### 首页（index）
- 今日任务列表
- 快速添加输入框
- AI 智能排序

### 任务详情（detail）
- 任务完整信息
- 子任务管理
- 优先级/截止时间/备注

### 日历（calendar）
- 月历视图
- 日期事件展示
- 本周概览统计

### 统计（stats）
- 完成任务柱状图
- 时间分配饼图
- 成就徽章墙
- 连续打卡天数

### 个人中心（profile）
- 用户信息/等级
- 深色模式切换
- 设置/反馈/关于

## 🔧 后续开发建议

1. **接入后端 API** - 替换模拟数据
2. **云开发集成** - 使用微信云开发存储数据
3. **语音识别** - 接入讯飞/百度语音 API
4. **AI 智能解析** - 自然语言处理任务时间
5. **推送通知** - 任务到期提醒
6. **数据同步** - 多设备数据同步

## 📄 License

MIT License

## 👨‍💻 开发者

Created with ❤️ by TaskFlow Team

---

**微信小程序 | 待办事项 | 效率工具**
