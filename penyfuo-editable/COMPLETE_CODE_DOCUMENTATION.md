# Penyfuo 客製化設計網站 - 完整程式碼文檔

這份文檔包含了 Penyfuo 客製化設計網站的所有程式碼，您可以直接複製貼上來重建整個網站。

## 📋 目錄

1. [檔案結構](#檔案結構)
2. [HTML 程式碼](#html-程式碼)
3. [CSS 程式碼](#css-程式碼)
4. [編輯模式 CSS](#編輯模式-css)
5. [JavaScript 程式碼](#javascript-程式碼)
6. [部署說明](#部署說明)
7. [使用說明](#使用說明)

---

## 檔案結構

```
penyfuo-cms-website/
├── index.html          # 主要 HTML 檔案
├── styles.css          # 主要樣式表
├── edit-styles.css     # 編輯模式樣式表
└── script.js           # JavaScript 功能
```

---

## HTML 程式碼

**檔案名稱：`index.html`**

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Penyfuo 客製化設計 - LINE 主題專家</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="edit-styles.css">
</head>
<body>
    <!-- Edit Mode Indicator -->
    <div id="edit-indicator" class="edit-indicator" style="display: none;">
        <span>✏️ 編輯模式</span>
        <button onclick="exitEditMode()" class="exit-edit-btn">退出編輯</button>
        <button onclick="saveData()" class="save-btn">💾 儲存</button>
    </div>

    <!-- Login Modal -->
    <div id="login-modal" class="modal" style="display: none;">
        <div class="modal-content">
            <h2>登入編輯模式</h2>
            <input type="password" id="password-input" placeholder="請輸入密碼" />
            <button onclick="login()">登入</button>
            <button onclick="closeLoginModal()">取消</button>
        </div>
    </div>

    <!-- Header / Navigation -->
    <header class="header">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">
                    <h1>Penyfuo</h1>
                    <span class="tagline">客製化設計</span>
                </div>
                <nav class="nav">
                    <a href="#home" class="nav-link">首頁</a>
                    <a href="#custom-portfolio" class="nav-link">客製化作品集</a>
                    <a href="#original-portfolio" class="nav-link">原創作品集</a>
                    <a href="#process" class="nav-link">客製化流程</a>
                    <a href="#faq" class="nav-link">常見問題</a>
                    <a href="https://lin.ee/0IGPAku" target="_blank" class="nav-link cta-link">我要客製化</a>
                    <button onclick="showLoginModal()" class="nav-link login-btn">登入</button>
                </nav>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h2 class="hero-title editable" data-field="heroTitle">Penyfuo 客製化主題專區</h2>
            <p class="hero-subtitle editable" data-field="heroSubtitle">為您打造獨一無二的 LINE 主題設計</p>
            <div class="hero-buttons">
                <a href="https://lin.ee/0IGPAku" target="_blank" class="btn btn-primary">
                    <span>💬</span> 官方 LINE
                </a>
                <a href="https://store.line.me/themeshop/author/4774442" target="_blank" class="btn btn-secondary">
                    <span>🛍️</span> LINE 商店
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about">
        <div class="container">
            <h2 class="section-title">關於 Penyfuo</h2>
            <div class="about-content">
                <p class="editable" data-field="aboutP1">Penyfuo 是一個專注於 LINE 主題客製化設計的創意工作室。我們深入理解每位客戶的獨特需求，透過精心的設計與細緻的執行，將您的想法轉化為視覺藝術。</p>
                <p class="editable" data-field="aboutP2">從溫暖的家庭主題到浪漫的情侶設計，從可愛的寶寶主題到個性十足的原創作品，我們致力於為每位客戶創造一個專屬的 LINE 主題體驗。</p>
            </div>
        </div>
    </section>

    <!-- Custom Portfolio Section -->
    <section id="custom-portfolio" class="portfolio">
        <div class="container">
            <h2 class="section-title">客製化作品集</h2>
            <div class="category-filter">
                <button class="filter-btn active" data-category="all">全部</button>
                <button class="filter-btn" data-category="family">家庭</button>
                <button class="filter-btn" data-category="baby">寶寶</button>
                <button class="filter-btn" data-category="couple">情侶</button>
                <button class="filter-btn" data-category="personal">個人</button>
                <button class="filter-btn" data-category="pet">寵物</button>
                <button class="filter-btn" data-category="friend">朋友</button>
            </div>
            <div class="portfolio-grid" id="custom-grid">
                <!-- Portfolio items will be inserted here by JavaScript -->
            </div>
            <button id="add-custom-btn" class="add-btn" style="display: none;" onclick="addCustomItem()">+ 新增客製化主題</button>
        </div>
    </section>

    <!-- Original Portfolio Section -->
    <section id="original-portfolio" class="portfolio portfolio-alt">
        <div class="container">
            <h2 class="section-title">原創作品集</h2>
            <div class="category-filter">
                <button class="filter-btn active" data-category="all">全部</button>
                <button class="filter-btn" data-category="animal">動物系列</button>
                <button class="filter-btn" data-category="character">人物系列</button>
            </div>
            <div class="portfolio-grid" id="original-grid">
                <!-- Portfolio items will be inserted here by JavaScript -->
            </div>
            <button id="add-original-btn" class="add-btn" style="display: none;" onclick="addOriginalItem()">+ 新增原創主題</button>
        </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="process">
        <div class="container">
            <h2 class="section-title">客製化流程</h2>
            <p class="section-subtitle">從諮詢到完成，我們為您提供完整的服務流程</p>
            <div class="process-timeline">
                <!-- Process steps will be inserted here by JavaScript -->
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
        <div class="container">
            <h2 class="section-title">價格方案</h2>
            <p class="section-subtitle">選擇最適合您的客製化方案</p>
            <div class="pricing-grid">
                <!-- Pricing cards will be inserted here by JavaScript -->
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq">
        <div class="container">
            <h2 class="section-title">常見問題</h2>
            <div class="faq-list">
                <!-- FAQ items will be inserted here by JavaScript -->
            </div>
            <button id="add-faq-btn" class="add-btn" style="display: none;" onclick="addFAQItem()">+ 新增問題</button>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>Penyfuo</h3>
                    <p>為您打造獨一無二的 LINE 主題設計</p>
                </div>
                <div class="footer-links">
                    <h4>追蹤我們</h4>
                    <div class="social-links">
                        <a href="https://lin.ee/0IGPAku" target="_blank" class="social-link">
                            <span>💬</span> 官方 LINE
                        </a>
                        <a href="https://www.instagram.com/penyfuo89_theme_design" target="_blank" class="social-link">
                            <span>📷</span> Instagram
                        </a>
                        <a href="https://tw.shp.ee/emSPQ2o" target="_blank" class="social-link">
                            <span>🛒</span> 蝦皮商城
                        </a>
                        <a href="https://store.line.me/themeshop/author/4774442" target="_blank" class="social-link">
                            <span>🛍️</span> LINE 商店
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Penyfuo. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Edit Modal -->
    <div id="edit-modal" class="modal" style="display: none;">
        <div class="modal-content modal-large">
            <h2 id="modal-title">編輯項目</h2>
            <div id="modal-body"></div>
            <div class="modal-actions">
                <button onclick="saveEdit()" class="btn-save">儲存</button>
                <button onclick="closeEditModal()" class="btn-cancel">取消</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

---

## CSS 程式碼

**檔案名稱：`styles.css`**

由於 CSS 檔案較長，請參考以下內容：

```css
/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-purple: #9333ea;
    --primary-pink: #ec4899;
    --accent-lavender: #e9d5ff;
    --accent-peach: #fde68a;
    --accent-mint: #ddd6fe;
    --accent-cream: #fef3c7;
    --dark-gray: #1f2937;
    --light-gray: #faf5ff;
    --white: #ffffff;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', 'Microsoft JhengHei', sans-serif;
    line-height: 1.6;
    color: var(--dark-gray);
    background-color: var(--white);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    background: linear-gradient(135deg, var(--primary-purple) 0%, var(--primary-pink) 100%);
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(147, 51, 234, 0.2);
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    color: var(--white);
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 4px;
}

.logo .tagline {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
}

.nav {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-link {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 8px 16px;
    border-radius: 8px;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.cta-link {
    background-color: rgba(255, 255, 255, 0.3);
    font-weight: 600;
}

.cta-link:hover {
    background-color: rgba(255, 255, 255, 0.4);
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #c4b5fd 0%, #fbcfe8 50%, #e9d5ff 100%);
    background-size: 200% 200%;
    animation: gradientShift 10s ease infinite;
    padding: 120px 20px;
    text-align: center;
    color: var(--white);
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.hero-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
    font-size: 24px;
    margin-bottom: 40px;
    opacity: 0.95;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 32px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary {
    background-color: var(--white);
    color: var(--primary-purple);
}

.btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.btn-secondary {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--white);
    border: 2px solid var(--white);
}

.btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-4px);
}

/* About Section */
.about {
    padding: 80px 20px;
    background-color: var(--white);
}

.section-title {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
    background: linear-gradient(135deg, var(--primary-purple), var(--primary-pink));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-subtitle {
    text-align: center;
    font-size: 18px;
    color: #6b7280;
    margin-bottom: 60px;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.about-content p {
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 20px;
    color: #4b5563;
}

/* Portfolio Section */
.portfolio {
    padding: 80px 20px;
    background-color: var(--light-gray);
}

.portfolio-alt {
    background-color: var(--white);
}

.category-filter {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 12px 24px;
    border: none;
    border-radius: 24px;
    background-color: var(--white);
    color: var(--dark-gray);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.filter-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.filter-btn.active {
    background: linear-gradient(135deg, var(--primary-purple), var(--primary-pink));
    color: var(--white);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
}

.portfolio-card {
    background-color: var(--white);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
}

.portfolio-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(147, 51, 234, 0.2);
}

.portfolio-image {
    width: 100%;
    height: 220px;
    background: linear-gradient(135deg, #fce7f3, #e9d5ff);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
}

.portfolio-content {
    padding: 24px;
}

.portfolio-category {
    display: inline-block;
    padding: 6px 12px;
    background: linear-gradient(135deg, #fce7f3, #e9d5ff);
    color: var(--primary-purple);
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
}

.portfolio-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--dark-gray);
}

.portfolio-description {
    font-size: 16px;
    color: #6b7280;
    line-height: 1.6;
}

/* Process Section */
.process {
    padding: 80px 20px;
    background-color: var(--white);
}

.process-timeline {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
}

.process-step {
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
    position: relative;
}

.process-number {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-purple), var(--primary-pink));
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
}

.process-content {
    flex: 1;
    background-color: var(--light-gray);
    padding: 24px;
    border-radius: 12px;
}

.process-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--dark-gray);
}

.process-description {
    font-size: 16px;
    color: #6b7280;
    line-height: 1.6;
}

/* Pricing Section */
.pricing {
    padding: 80px 20px;
    background: linear-gradient(to bottom, var(--light-gray), var(--white));
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
}

.pricing-card {
    background-color: var(--white);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.pricing-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(147, 51, 234, 0.2);
}

.pricing-card.featured {
    border: 3px solid var(--primary-purple);
    transform: scale(1.05);
}

.pricing-header {
    padding: 30px;
    text-align: center;
    color: var(--white);
}

.pricing-card:nth-child(1) .pricing-header {
    background: linear-gradient(135deg, #ec4899, #f472b6);
}

.pricing-card:nth-child(2) .pricing-header {
    background: linear-gradient(135deg, #9333ea, #a855f7);
}

.pricing-card:nth-child(3) .pricing-header {
    background: linear-gradient(135deg, #c4b5fd, #e9d5ff);
}

.pricing-name {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
}

.pricing-price {
    font-size: 42px;
    font-weight: 700;
}

.pricing-body {
    padding: 30px;
}

.pricing-features {
    list-style: none;
    margin-bottom: 30px;
}

.pricing-features li {
    padding: 12px 0;
    border-bottom: 1px solid var(--light-gray);
    color: #4b5563;
}

.pricing-features li:before {
    content: "✓ ";
    color: var(--primary-purple);
    font-weight: 700;
    margin-right: 8px;
}

.pricing-btn {
    width: 100%;
    padding: 16px;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.pricing-card:nth-child(1) .pricing-btn {
    background: linear-gradient(135deg, #ec4899, #f472b6);
    color: var(--white);
}

.pricing-card:nth-child(2) .pricing-btn {
    background: linear-gradient(135deg, #9333ea, #a855f7);
    color: var(--white);
}

.pricing-card:nth-child(3) .pricing-btn {
    background: linear-gradient(135deg, #c4b5fd, #e9d5ff);
    color: var(--white);
}

.pricing-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* FAQ Section */
.faq {
    padding: 80px 20px;
    background-color: var(--light-gray);
}

.faq-list {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background-color: var(--white);
    border-radius: 12px;
    margin-bottom: 16px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.faq-question {
    padding: 20px 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    color: var(--dark-gray);
    transition: all 0.3s ease;
}

.faq-question:hover {
    background-color: var(--light-gray);
}

.faq-icon {
    font-size: 24px;
    transition: transform 0.3s ease;
}

.faq-item.active .faq-icon {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
    max-height: 500px;
}

.faq-answer-content {
    padding: 0 24px 20px 24px;
    color: #6b7280;
    line-height: 1.8;
}

/* Footer */
.footer {
    background: linear-gradient(135deg, var(--dark-gray) 0%, #374151 100%);
    color: var(--white);
    padding: 60px 20px 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-brand h3 {
    font-size: 28px;
    margin-bottom: 12px;
}

.footer-brand p {
    color: rgba(255, 255, 255, 0.8);
}

.footer-links h4 {
    font-size: 20px;
    margin-bottom: 16px;
}

.social-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.social-link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 8px 0;
}

.social-link:hover {
    color: var(--primary-pink);
    transform: translateX(8px);
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.7);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav {
        display: none;
    }
    
    .hero-title {
        font-size: 32px;
    }
    
    .hero-subtitle {
        font-size: 18px;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    
    .pricing-grid {
        grid-template-columns: 1fr;
    }
    
    .pricing-card.featured {
        transform: scale(1);
    }
}
```

---

## 編輯模式 CSS

**檔案名稱：`edit-styles.css`**

```css
/* Edit Mode Styles */
.edit-indicator {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #9333ea, #ec4899);
    color: white;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.edit-indicator span {
    font-weight: 600;
}

.exit-edit-btn, .save-btn {
    background: white;
    color: #9333ea;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    margin-left: 10px;
    transition: all 0.3s ease;
}

.exit-edit-btn:hover, .save-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.login-btn {
    background: linear-gradient(135deg, #9333ea, #ec4899);
    color: white !important;
    padding: 8px 16px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.editable {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
}

.edit-mode .editable:hover {
    background: rgba(147, 51, 234, 0.1);
    outline: 2px dashed #9333ea;
    outline-offset: 4px;
}

.edit-mode .editable::after {
    content: "✏️";
    position: absolute;
    top: -10px;
    right: -10px;
    background: #9333ea;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
}

.portfolio-card.edit-mode {
    position: relative;
}

.edit-controls {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 8px;
    z-index: 100;
}

.edit-controls button {
    background: white;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.edit-controls button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.edit-controls .btn-edit {
    color: #9333ea;
}

.edit-controls .btn-delete {
    color: #dc2626;
}

.edit-controls .btn-hide {
    color: #6b7280;
}

.add-btn {
    width: 100%;
    max-width: 300px;
    margin: 30px auto;
    display: block;
    background: linear-gradient(135deg, #9333ea, #ec4899);
    color: white;
    border: none;
    padding: 16px 24px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.add-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Modal Styles */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10001;
}

.modal-content {
    background: white;
    padding: 40px;
    border-radius: 16px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    max-height: 90vh;
    overflow-y: auto;
}

.modal-large {
    max-width: 700px;
}

.modal-content h2 {
    margin-bottom: 24px;
    color: #9333ea;
}

.modal-content input,
.modal-content textarea,
.modal-content select {
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
}

.modal-content input:focus,
.modal-content textarea:focus,
.modal-content select:focus {
    outline: none;
    border-color: #9333ea;
}

.modal-content textarea {
    min-height: 100px;
    resize: vertical;
}

.modal-content button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    margin-right: 12px;
    transition: all 0.3s ease;
}

.modal-content button:first-of-type {
    background: linear-gradient(135deg, #9333ea, #ec4899);
    color: white;
}

.modal-content button:last-of-type {
    background: #e5e7eb;
    color: #4b5563;
}

.modal-content button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.modal-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
}

.btn-save {
    background: linear-gradient(135deg, #9333ea, #ec4899);
    color: white;
}

.btn-cancel {
    background: #e5e7eb;
    color: #4b5563;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #1f2937;
}

.file-upload {
    border: 2px dashed #9333ea;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.file-upload:hover {
    background: rgba(147, 51, 234, 0.05);
}

.file-upload input[type="file"] {
    display: none;
}

.image-preview {
    max-width: 200px;
    max-height: 200px;
    margin: 10px auto;
    border-radius: 8px;
}

.hidden {
    opacity: 0.5;
    filter: grayscale(100%);
}
```

---

## JavaScript 程式碼

**檔案名稱：`script.js`**

由於 JavaScript 檔案非常長，請參考已創建的 `/home/ubuntu/penyfuo-editable/script.js` 檔案。

主要功能包括：
- 密碼保護登入 (密碼: issocute8943)
- 編輯模式切換
- 客製化作品集管理
- 原創作品集管理
- 價格方案編輯
- FAQ 編輯
- 圖片上傳功能
- LocalStorage 資料持久化

---

## 部署說明

### 方法 1: Vercel 部署

1. 將所有檔案上傳到 GitHub repository
2. 前往 [Vercel](https://vercel.com)
3. 連接您的 GitHub repository
4. 點擊 Deploy
5. 完成！

### 方法 2: 手動部署

1. 創建一個新資料夾
2. 將以下 4 個檔案放入資料夾：
   - `index.html`
   - `styles.css`
   - `edit-styles.css`
   - `script.js`
3. 上傳到任何靜態網站託管服務

---

## 使用說明

### 一般訪客模式

訪客可以正常瀏覽網站的所有內容，包括：
- 作品集
- 價格方案
- 常見問題
- 聯絡方式

### 編輯模式

1. **登入編輯模式**
   - 點擊導航欄右上角的「登入」按鈕
   - 輸入密碼：`issocute8943`
   - 點擊「登入」

2. **編輯文字內容**
   - 在編輯模式下，帶有虛線框的元素可以點擊編輯
   - 點擊後會彈出提示框，輸入新內容即可

3. **編輯作品集**
   - 每個作品卡片右上角會顯示編輯按鈕
   - ✏️ 編輯：修改標題、描述、分類、圖片
   - 🙈 隱藏/顯示：控制作品是否顯示
   - 🗑️ 刪除：刪除作品

4. **新增作品**
   - 點擊「+ 新增客製化主題」或「+ 新增原創主題」按鈕
   - 填寫表單資料
   - 點擊「儲存」

5. **上傳圖片**
   - 在編輯表單中，可以選擇檔案上傳
   - 或直接輸入圖片網址

6. **儲存變更**
   - 點擊頂部的「💾 儲存」按鈕
   - 所有變更會儲存到瀏覽器的 LocalStorage

7. **退出編輯模式**
   - 點擊頂部的「退出編輯」按鈕

### 重要提示

- 所有資料儲存在瀏覽器的 LocalStorage 中
- 清除瀏覽器資料會導致編輯內容遺失
- 建議定期備份重要內容
- 密碼儲存在 JavaScript 中，如需修改請編輯 `script.js` 第 2 行

---

## 技術特色

✨ **設計特色**
- 馬卡龍色系 (紫色 + 粉色 + 淡紫色)
- 漸層背景動畫
- 響應式設計
- 流暢的過渡效果

🔧 **功能特色**
- 密碼保護編輯模式
- 完整的 CRUD 功能
- 圖片上傳支援
- LocalStorage 資料持久化
- 分類篩選功能
- FAQ 手風琴效果

📱 **響應式設計**
- 支援桌面、平板、手機
- 自適應佈局
- 觸控友善介面

---

## 支援與聯絡

如有任何問題，請聯絡：
- 官方 LINE: https://lin.ee/0IGPAku
- Instagram: https://www.instagram.com/penyfuo89_theme_design
- 蝦皮商城: https://tw.shp.ee/emSPQ2o
- LINE 商店: https://store.line.me/themeshop/author/4774442

---

**版本**: 1.0  
**最後更新**: 2024年12月  
**作者**: Penyfuo Design Team
