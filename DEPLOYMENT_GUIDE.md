# Penyfuo CMS 網站部署指南

## 📦 檔案清單

您的 ZIP 檔案包含以下檔案：

```
penyfuo-editable/
├── index.html                          # 主要 HTML 檔案
├── styles.css                          # 主要樣式表
├── edit-styles.css                     # 編輯模式樣式表
├── script.js                           # JavaScript 功能
├── COMPLETE_CODE_DOCUMENTATION.md      # 完整程式碼文檔
└── DEPLOYMENT_GUIDE.md                 # 本部署指南
```

---

## 🚀 部署方法

### 方法 1: 更新現有的 Vercel 網站 (推薦)

#### 步驟 1: 準備檔案

1. 解壓縮 `penyfuo-cms-editable-complete.zip`
2. 確認資料夾中有 4 個主要檔案：
   - `index.html`
   - `styles.css`
   - `edit-styles.css`
   - `script.js`

#### 步驟 2: 更新 GitHub Repository

**選項 A: 使用 GitHub Desktop (簡單)**

1. 開啟 GitHub Desktop
2. 選擇您的 repository: `penyfuo-cms-website`
3. 將新檔案複製到本地 repository 資料夾
4. GitHub Desktop 會自動偵測變更
5. 在左下角輸入 commit 訊息：「Add CMS editing functionality」
6. 點擊「Commit to main」
7. 點擊「Push origin」

**選項 B: 使用命令列**

```bash
# 進入您的本地 repository 資料夾
cd C:\Users\ZTE09\Downloads\penyfuo-cms-website-clean

# 複製新檔案到這個資料夾（覆蓋舊檔案）

# 添加所有變更
git add .

# 提交變更
git commit -m "Add CMS editing functionality"

# 推送到 GitHub
git push origin main
```

#### 步驟 3: Vercel 自動部署

1. Vercel 會自動偵測 GitHub 的變更
2. 自動開始部署新版本
3. 等待 1-2 分鐘
4. 前往您的網站查看：https://penyfuo-cms-website-pantzuchis-projects.vercel.app/

---

### 方法 2: 全新部署到 Vercel

如果您想重新開始：

#### 步驟 1: 創建新的 GitHub Repository

1. 前往 https://github.com/new
2. Repository 名稱：`penyfuo-cms-website-v2`
3. 設定為 Public
4. 點擊「Create repository」

#### 步驟 2: 上傳檔案到 GitHub

**使用 GitHub 網頁介面：**

1. 在新建的 repository 頁面
2. 點擊「uploading an existing file」
3. 拖曳 4 個主要檔案到上傳區
4. 點擊「Commit changes」

**或使用命令列：**

```bash
# 進入解壓縮的資料夾
cd C:\Users\ZTE09\Downloads\penyfuo-editable

# 初始化 git
git init

# 添加所有檔案
git add .

# 提交
git commit -m "Initial commit with CMS functionality"

# 連接到 GitHub（替換成您的 repository URL）
git remote add origin https://github.com/penyfuoooo89/penyfuo-cms-website-v2.git

# 推送
git branch -M main
git push -u origin main
```

#### 步驟 3: 部署到 Vercel

1. 前往 https://vercel.com
2. 點擊「Add New」→「Project」
3. 選擇您的 GitHub repository
4. 點擊「Import」
5. 保持預設設定
6. 點擊「Deploy」
7. 等待部署完成
8. 獲得您的網站 URL

---

### 方法 3: 使用其他託管服務

#### Netlify

1. 前往 https://netlify.com
2. 拖曳整個資料夾到 Netlify
3. 自動部署完成

#### GitHub Pages

1. 將檔案推送到 GitHub repository
2. 前往 Settings → Pages
3. 選擇 main branch
4. 點擊 Save
5. 獲得您的網站 URL

---

## 🔐 編輯模式使用說明

### 登入編輯模式

1. 前往您的網站
2. 點擊右上角導航欄的「登入」按鈕
3. 輸入密碼：`issocute8943`
4. 點擊「登入」

### 編輯功能

#### 1. 編輯文字內容

- 標題、副標題、關於我們等文字
- 在編輯模式下，點擊帶有虛線框的元素
- 在彈出的提示框中輸入新內容

#### 2. 編輯作品集

每個作品卡片右上角有三個按鈕：

- **✏️ 編輯**：修改標題、描述、分類、圖片
- **🙈 隱藏/👁️ 顯示**：控制作品是否在訪客模式顯示
- **🗑️ 刪除**：永久刪除作品

#### 3. 新增作品

- 點擊「+ 新增客製化主題」或「+ 新增原創主題」
- 填寫表單：
  - 標題
  - 描述
  - 分類
  - 圖示 Emoji
  - 圖片（可上傳檔案或輸入網址）

#### 4. 編輯價格方案

- 點擊價格卡片右上角的 ✏️ 按鈕
- 修改方案名稱、價格、特色
- 特色每行一項

#### 5. 編輯常見問題

- 點擊問題右上角的 ✏️ 按鈕編輯
- 點擊 🗑️ 按鈕刪除
- 點擊「+ 新增問題」新增

#### 6. 上傳圖片

兩種方式：

**方式 1: 上傳檔案**
- 在編輯表單中點擊「選擇檔案」
- 選擇圖片檔案
- 圖片會自動轉換為 Base64 格式儲存

**方式 2: 使用網址**
- 直接在「圖片網址」欄位輸入圖片 URL
- 例如：`https://example.com/image.jpg`

#### 7. 儲存變更

- 完成所有編輯後
- 點擊頂部紫色橫條的「💾 儲存」按鈕
- 會彈出「✅ 資料已儲存！」提示

#### 8. 退出編輯模式

- 點擊頂部的「退出編輯」按鈕
- 返回訪客瀏覽模式

---

## ⚠️ 重要注意事項

### 資料儲存

- **所有編輯的資料儲存在瀏覽器的 LocalStorage 中**
- 這意味著：
  - ✅ 資料會保留在您的瀏覽器中
  - ❌ 清除瀏覽器資料會導致編輯內容遺失
  - ❌ 在不同瀏覽器或裝置上看到的內容可能不同
  - ❌ 訪客看到的是預設內容，除非他們也在同一台電腦的同一個瀏覽器

### 如何讓所有訪客看到您的編輯？

目前的版本使用 LocalStorage，只有您自己能看到編輯。如果您想讓所有訪客都看到您的編輯，有兩個選擇：

**選項 1: 手動更新程式碼（簡單但需要每次更新）**

1. 編輯完成後，開啟瀏覽器的開發者工具（F12）
2. 前往 Console 標籤
3. 輸入：`localStorage`
4. 複製所有資料
5. 將資料更新到 `script.js` 的預設值中
6. 重新部署網站

**選項 2: 升級到後端系統（需要技術支援）**

- 使用資料庫儲存資料（如 Firebase、Supabase）
- 需要修改程式碼以連接資料庫
- 所有訪客都能看到最新內容

### 密碼安全

- 預設密碼：`issocute8943`
- 密碼儲存在 `script.js` 第 2 行
- 如需修改，編輯該行：
  ```javascript
  const EDIT_PASSWORD = '您的新密碼';
  ```

### 瀏覽器相容性

- 建議使用現代瀏覽器：
  - Chrome（推薦）
  - Firefox
  - Safari
  - Edge
- 不支援 IE11 及更舊版本

---

## 🎨 自訂顏色

如果您想修改網站的顏色配置，編輯 `styles.css` 的第 7-15 行：

```css
:root {
    --primary-purple: #9333ea;    /* 主要紫色 */
    --primary-pink: #ec4899;      /* 主要粉色 */
    --accent-lavender: #e9d5ff;   /* 淡紫色 */
    --accent-peach: #fde68a;      /* 桃色 */
    --accent-mint: #ddd6fe;       /* 薄荷色 */
    --accent-cream: #fef3c7;      /* 奶油色 */
    --dark-gray: #1f2937;         /* 深灰色 */
    --light-gray: #faf5ff;        /* 淺灰色 */
    --white: #ffffff;             /* 白色 */
}
```

---

## 📱 測試檢查清單

部署後，請測試以下功能：

### 訪客模式
- [ ] 首頁載入正常
- [ ] 所有區塊顯示正確
- [ ] 作品集篩選功能正常
- [ ] FAQ 手風琴效果正常
- [ ] 所有連結可以點擊
- [ ] 手機版顯示正常

### 編輯模式
- [ ] 登入功能正常
- [ ] 可以編輯文字內容
- [ ] 可以編輯作品集
- [ ] 可以新增作品
- [ ] 可以上傳圖片
- [ ] 可以編輯價格方案
- [ ] 可以編輯 FAQ
- [ ] 儲存功能正常
- [ ] 重新整理後資料保留

---

## 🆘 常見問題

### Q: 為什麼我編輯的內容別人看不到？

A: 因為資料儲存在您的瀏覽器 LocalStorage 中。請參考「如何讓所有訪客看到您的編輯？」章節。

### Q: 清除瀏覽器資料後內容不見了怎麼辦？

A: LocalStorage 資料會隨著瀏覽器資料清除而消失。建議定期備份重要內容。

### Q: 可以修改密碼嗎？

A: 可以。編輯 `script.js` 第 2 行的 `EDIT_PASSWORD` 值。

### Q: 上傳的圖片太大怎麼辦？

A: 建議使用圖片壓縮工具（如 TinyPNG）先壓縮圖片，或使用圖片託管服務的網址。

### Q: 手機上可以編輯嗎？

A: 可以，但建議使用電腦編輯以獲得更好的體驗。

### Q: 如何備份我的編輯內容？

A: 
1. 開啟瀏覽器開發者工具（F12）
2. 前往 Console 標籤
3. 輸入並執行：
   ```javascript
   console.log(JSON.stringify(localStorage));
   ```
4. 複製輸出的內容儲存到文字檔

---

## 📞 技術支援

如有任何技術問題或需要協助，請聯絡：

- **官方 LINE**: https://lin.ee/0IGPAku
- **Instagram**: https://www.instagram.com/penyfuo89_theme_design
- **Email**: （如有的話請填寫）

---

## 📄 授權與版權

© 2024 Penyfuo. All rights reserved.

此網站由 Penyfuo 設計團隊開發，僅供 Penyfuo 使用。

---

**祝您使用愉快！** 🎉
