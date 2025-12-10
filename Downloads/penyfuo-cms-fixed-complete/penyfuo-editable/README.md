# Penyfuo 客製化設計 CMS 網站

一個美麗的、可編輯的 LINE 主題客製化設計網站，採用馬卡龍色系（紫色 + 粉色 + 淡紫色）。

## ✨ 特色功能

### 🎨 視覺設計
- 馬卡龍色系配色（紫色 #9333ea + 粉色 #ec4899 + 淡紫色 #e9d5ff）
- 漸層背景動畫
- 流暢的過渡效果
- 完全響應式設計（支援桌面/平板/手機）

### ✏️ 編輯功能
- 🔐 密碼保護編輯模式（密碼：issocute8943）
- 📝 編輯所有文字內容
- 🖼️ 上傳和更改主題圖片
- ➕ 新增/刪除/隱藏作品
- 💰 編輯價格方案
- ❓ 編輯常見問題
- 💾 LocalStorage 資料持久化

### 📱 功能區塊
- Hero 首頁區塊
- 關於我們
- 客製化作品集（6 個分類：家庭、寶寶、情侶、個人、寵物、朋友）
- 原創作品集（2 個分類：動物系列、人物系列）
- 8 步驟客製化流程
- 3 種價格方案
- 10+ 常見問題
- 社群媒體連結（LINE、Instagram、蝦皮、LINE 商店）

## 📦 檔案結構

```
penyfuo-editable/
├── index.html                          # 主要 HTML 檔案
├── styles.css                          # 主要樣式表
├── edit-styles.css                     # 編輯模式樣式表
├── script.js                           # JavaScript 功能
├── README.md                           # 本檔案
├── COMPLETE_CODE_DOCUMENTATION.md      # 完整程式碼文檔
└── DEPLOYMENT_GUIDE.md                 # 詳細部署指南
```

## 🚀 快速開始

### 1. 下載檔案
解壓縮 `penyfuo-cms-editable-complete.zip`

### 2. 部署網站

**選項 A: 更新現有 GitHub + Vercel**
```bash
# 複製檔案到您的 repository
cd your-repo-folder
# 複製 index.html, styles.css, edit-styles.css, script.js

# 提交並推送
git add .
git commit -m "Add CMS editing functionality"
git push origin main
```

**選項 B: 拖曳到 Netlify**
- 前往 https://netlify.com
- 拖曳整個資料夾
- 完成！

### 3. 使用編輯功能

1. 前往您的網站
2. 點擊右上角「登入」
3. 輸入密碼：`issocute8943`
4. 開始編輯！
5. 完成後點擊「💾 儲存」

## 📖 文檔

- **完整程式碼文檔**: 查看 `COMPLETE_CODE_DOCUMENTATION.md`
  - 包含所有 HTML、CSS、JavaScript 程式碼
  - 可直接複製貼上重建網站

- **部署指南**: 查看 `DEPLOYMENT_GUIDE.md`
  - 詳細的部署步驟
  - 編輯功能使用說明
  - 常見問題解答

## 🔐 預設密碼

編輯模式密碼：`issocute8943`

如需修改，編輯 `script.js` 第 2 行：
```javascript
const EDIT_PASSWORD = '您的新密碼';
```

## ⚠️ 重要提示

### 資料儲存方式
- 所有編輯內容儲存在**瀏覽器 LocalStorage** 中
- 清除瀏覽器資料會導致編輯內容遺失
- 目前版本的編輯只有您自己能看到

### 如何讓所有訪客看到編輯？
請參考 `DEPLOYMENT_GUIDE.md` 中的詳細說明。

## 🎨 自訂顏色

編輯 `styles.css` 的第 7-15 行：

```css
:root {
    --primary-purple: #9333ea;    /* 主要紫色 */
    --primary-pink: #ec4899;      /* 主要粉色 */
    --accent-lavender: #e9d5ff;   /* 淡紫色 */
    /* ... 更多顏色 */
}
```

## 🌐 社群連結

- **官方 LINE**: https://lin.ee/0IGPAku
- **Instagram**: https://www.instagram.com/penyfuo89_theme_design
- **蝦皮商城**: https://tw.shp.ee/emSPQ2o
- **LINE 商店**: https://store.line.me/themeshop/author/4774442

## 📱 瀏覽器支援

- ✅ Chrome（推薦）
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ❌ IE11 及更舊版本

## 📄 版權

© 2024 Penyfuo. All rights reserved.

---

**需要幫助？** 請查看 `DEPLOYMENT_GUIDE.md` 或聯絡官方 LINE！
