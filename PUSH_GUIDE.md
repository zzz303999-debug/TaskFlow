# 📤 推送代码到 GitHub 指南

由于 Git 需要认证，请按照以下步骤手动推送代码：

---

## 方式一：使用 Personal Access Token（推荐）

### 1. 创建 Token

1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 勾选权限：`repo`（完整控制私有仓库）
4. 生成后复制 Token（只显示一次！）

### 2. 推送代码

在终端执行：

```bash
cd /path/to/TaskFlow

# 配置 Git 用户信息（首次使用）
git config --global user.name "zzz303999-debug"
git config --global user.email "your-email@example.com"

# 使用 Token 推送
git push https://<你的GitHub用户名>:<你的Token>@github.com/zzz303999-debug/TaskFlow.git main
```

例如：
```bash
git push https://zzz303999-debug:ghp_xxxxxxxxxxxxxxxxxxxx@github.com/zzz303999-debug/TaskFlow.git main
```

---

## 方式二：使用 SSH（如果你配置过）

### 1. 检查 SSH 密钥

```bash
ls -la ~/.ssh/id_rsa.pub
```

如果没有，生成一个：
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

### 2. 添加公钥到 GitHub

1. 复制公钥：`cat ~/.ssh/id_rsa.pub`
2. 访问 https://github.com/settings/keys
3. 点击 "New SSH key"，粘贴公钥

### 3. 修改远程仓库为 SSH

```bash
cd /path/to/TaskFlow
git remote set-url origin git@github.com:zzz303999-debug/TaskFlow.git
git push origin main
```

---

## 方式三：使用 GitHub Desktop（最简单）

1. 下载 https://desktop.github.com
2. 登录 GitHub 账号
3. File → Add Local Repository → 选择 TaskFlow 文件夹
4. 点击 Push origin 按钮

---

## 方式四：直接在 GitHub 上传（不推荐）

如果以上都不可用，可以：

1. 将所有文件打包成 ZIP
2. 访问 https://github.com/zzz303999-debug/TaskFlow
3. Add file → Upload files
4. 拖入 ZIP 或所有文件
5. Commit changes

---

## ✅ 验证推送

推送成功后，访问 https://github.com/zzz303999-debug/TaskFlow 应该能看到所有文件。

---

## 📱 下一步：导入微信开发者工具

1. 下载微信开发者工具
2. 导入项目（选择 TaskFlow 文件夹）
3. 填入你的 AppID
4. 编译运行

---

**提示**：代码已提交到本地 Git，只需推送即可！
