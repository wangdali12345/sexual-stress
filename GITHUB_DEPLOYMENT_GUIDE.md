# GitHub Pages 部署指南

## 📋 所需资料清单

### 📁 项目文件（您已经拥有）
```
精品出版/
├── index.html          # 主页面（已优化）
├── styles.css          # 样式文件（苹果风格）
├── script.js           # 核心JavaScript逻辑
├── README.md           # 项目说明文档
├── .gitignore          # Git忽略文件配置
└── GITHUB_DEPLOYMENT_GUIDE.md  # 本部署指南
```

### 🔧 必需工具
- **Git** - 版本控制工具
- **GitHub账号** - 用于托管代码和Pages服务
- **现代浏览器** - Chrome/Firefox/Safari/Edge

## 🚀 详细部署步骤

### 步骤1: 创建GitHub仓库

1. **登录GitHub**
   - 访问 [github.com](https://github.com)
   - 使用您的账号登录

2. **创建新仓库**
   - 点击右上角的"+" → "New repository"
   - **Repository name**: `精品出版` 或 `psychological-assessment`
   - **Description**: `精品出版 - 心理健康评估平台`
   - **Public**: ✅ 选择公开（免费用户必须选择公开）
   - **Add a README file**: ❌ 不需要（我们已有README）
   - **Add .gitignore**: ❌ 不需要
   - **Choose a license**: 可选

3. **复制仓库URL**
   - 创建完成后，点击绿色的"Code"按钮
   - 复制HTTPS URL（格式：`https://github.com/您的用户名/仓库名.git`）

### 步骤2: 初始化Git并上传代码

```bash
# 1. 进入项目目录
cd "c:/Users/木偶/CodeBuddy/20251122103654"

# 2. 初始化Git仓库
git init

# 3. 添加远程仓库（替换为您的仓库URL）
git remote add origin https://github.com/您的用户名/精品出版.git

# 4. 添加所有文件到Git
git add .

# 5. 提交文件
git commit -m "Initial commit: 精品出版心理健康评估平台"

# 6. 推送到GitHub
git branch -M main
git push -u origin main
```

### 步骤3: 配置GitHub Pages

1. **进入仓库设置**
   - 在GitHub仓库页面，点击顶部的"Settings"标签

2. **找到Pages设置**
   - 在左侧菜单中找到"Pages"（通常在"Code and automation"部分）

3. **配置部署源**
   - **Source**: 选择"Deploy from a branch"
   - **Branch**: 选择"main"
   - **Folder**: 选择"/ (root)"
   - 点击"Save"

4. **等待部署**
   - GitHub会显示"Your site is being built"
   - 通常需要1-3分钟完成部署

5. **获取网站URL**
   - 部署完成后，会显示类似：`https://您的用户名.github.io/精品出版/`
   - 这就是您的在线网址！

## 🌐 预期网址格式

### 主要格式
```
https://您的GitHub用户名.github.io/仓库名/
```

### 示例
如果您的GitHub用户名是`zhangsan`，仓库名是`精品出版`：
```
https://zhangsan.github.io/精品出版/
```

## ✅ 部署验证

### 检查清单
- [ ] 所有文件已成功上传到GitHub
- [ ] GitHub Pages已启用
- [ ] 网站可以正常访问
- [ ] 所有功能正常工作
- [ ] 移动端显示正常

### 测试方法
1. **桌面端测试**
   - 在Chrome/Firefox中打开网站
   - 测试所有功能：开始测试、答题、查看结果
   - 检查响应式设计：调整浏览器窗口大小

2. **移动端测试**
   - 使用手机浏览器访问网站
   - 测试触摸交互和导航菜单
   - 验证所有功能在移动设备上正常工作

## 🛠 常见问题解决

### 问题1: 网站无法访问
**可能原因**: Pages还在部署中
**解决方案**: 等待5-10分钟后重试

### 问题2: 页面显示异常
**可能原因**: 文件路径错误
**解决方案**: 
- 确保`index.html`在仓库根目录
- 检查CSS和JS文件路径是否正确

### 问题3: CSS样式未加载
**可能原因**: 相对路径问题
**解决方案**: 确保使用相对路径引用CSS文件

### 问题4: JavaScript功能不工作
**可能原因**: 文件编码或路径问题
**解决方案**: 
- 确保JS文件使用UTF-8编码
- 检查浏览器控制台错误信息

## 🎯 优化建议

### SEO优化
```html
<!-- 在index.html的<head>中添加 -->
<meta name="description" content="精品出版 - 专业的心理健康评估平台，提供科学的心理状态分析服务">
<meta name="keywords" content="心理健康,心理测试,心理评估,精品出版">
<meta name="author" content="精品出版">
```

### 社交媒体分享
```html
<!-- 在<head>中添加Open Graph标签 -->
<meta property="og:title" content="精品出版 - 心理健康评估平台">
<meta property="og:description" content="专业的心理健康评估平台，提供科学的心理状态分析服务">
<meta property="og:type" content="website">
<meta property="og:url" content="https://您的用户名.github.io/精品出版/">
```

## 📱 域名自定义（可选）

如果您有自己的域名，可以：

1. **在域名提供商处添加CNAME记录**
   ```
   www.您的域名.com → 您的用户名.github.io
   ```

2. **在仓库中添加CNAME文件**
   ```
   echo "www.您的域名.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

3. **在GitHub Pages设置中更新域名**

## 🔄 更新网站

当您需要更新网站时：

```bash
# 1. 修改文件
# 2. 添加更改
git add .

# 3. 提交更改
git commit -m "更新描述"

# 4. 推送到GitHub
git push origin main
```

GitHub会自动检测更改并重新部署网站。

## 📊 性能监控

### 可用工具
- **Google PageSpeed Insights** - 测试网站性能
- **GTmetrix** - 性能和加载速度分析
- **GitHub Analytics** - 访问统计（需额外配置）

## 🎉 部署完成后的宣传

完成部署后，您可以：

1. **分享链接**到社交媒体
2. **提交到搜索引擎**
3. **添加到作品集**
4. **邀请朋友测试**

---

## 📞 技术支持

如果在部署过程中遇到问题：

1. **检查本指南**的详细步骤
2. **查看GitHub文档**: docs.github.com/pages
3. **在GitHub社区**寻求帮助

🎯 **提示**: 整个部署过程通常需要10-15分钟，包括上传和部署时间。

---

祝您部署成功！🚀