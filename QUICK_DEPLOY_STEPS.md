# 快速部署步骤

## 🚀 5分钟快速部署

### 1️⃣ 创建GitHub仓库
- 访问 [github.com](https://github.com)
- 点击 "New repository"
- 仓库名: `精品出版` (或英文名)
- 选择 Public
- 点击 "Create repository"

### 2️⃣ 上传文件到GitHub
**方法A: 网页上传（推荐新手）**
1. 在新建的仓库页面点击 "uploading an existing file"
2. 将所有文件拖拽到上传区域
3. 填写提交信息: "Initial commit"
4. 点击 "Commit changes"

**方法B: Git命令行**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/您的用户名/精品出版.git
git push -u origin main
```

### 3️⃣ 启用GitHub Pages
1. 进入仓库的 "Settings" 页面
2. 左侧菜单找到 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main", folder 选择 "/ (root)"
5. 点击 "Save"

### 4️⃣ 获取网址
等待2-3分钟，网站地址将显示在Pages页面：
```
https://您的用户名.github.io/精品出版/
```

## ✅ 需要上传的文件
- ✅ index.html
- ✅ styles.css  
- ✅ script.js
- ✅ README.md
- ✅ .gitignore (可选)

## 🎯 完成！
您的"精品出版"网站现在可以在线访问了！