# TaskFlow 微信登录功能部署指南

## ✅ 已修改/新增的文件

### 云函数（需要上传部署）
```
cloudfunctions/
├── login/
│   ├── index.js          ✅ 已创建
│   └── config.json       ✅ 已创建
└── saveUser/
    ├── index.js          ✅ 已创建
    └── config.json       ✅ 已创建
```

### 工具函数
```
utils/
└── auth.js               ✅ 已创建
```

### 修改的文件
```
app.js                    ✅ 已修改（云开发初始化）
pages/profile/profile.js      ✅ 已修改（添加登录逻辑）
pages/profile/profile.wxml    ✅ 已修改（添加登录按钮）
pages/profile/profile.wxss    ✅ 已修改（添加登录样式）
```

---

## 📦 部署步骤

### 1. 复制文件到你的项目

将 `/root/.openclaw/workspace/taskflow-temp/` 目录下的所有文件复制到你的 TaskFlow 项目根目录。

### 2. 添加图片资源

在 `images/` 目录添加以下图片（从阿里矢量图库 iconfont 下载）：

**wechat.png** - 微信图标
- 尺寸：建议 200x200
- 格式：PNG
- 搜索关键词：微信、WeChat、绿色微信
- 推荐链接：https://www.iconfont.cn/search/index?searchType=icon&q=微信

**default-avatar.png** - 默认头像（可选）
- 尺寸：建议 200x200
- 格式：PNG
- 搜索关键词：默认头像、用户头像

### 3. 上传云函数

在微信开发者工具中：
1. 右键 `cloudfunctions/login` → "上传并部署：云端安装依赖"
2. 同样步骤上传 `cloudfunctions/saveUser`

### 4. 创建数据库集合

云开发控制台 → 数据库 → 创建集合 `users`
- 权限：所有用户可读写自己的数据

### 5. 真机测试

编译 → 真机预览 → 进入"我的"页面 → 点击登录

---

## 🔧 云环境信息

- **云环境 ID**: `cloud1-8ggxf81qe6a7d866`
- **小程序 AppID**: `wx102b466fe541df34`

---

## ❓ 常见问题

**Q: 点击登录没反应？**
A: 检查云函数是否上传成功，云环境 ID 是否正确

**Q: 提示"auth deny"？**
A: 用户拒绝了授权，需要重新点击并允许

**Q: 看不到真实头像？**
A: 检查 `images/wechat.png` 是否存在

---

**创建时间**: 2026-03-20  
**GitHub**: https://github.com/zzz303999-debug/TaskFlow
