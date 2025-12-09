// Custom Portfolio Data
const customPortfolio = [
    {
        category: 'baby',
        title: '寶寶主題',
        description: '溫暖可愛的寶寶主題設計，採用柔和的色彩搭配和卡通風格圖案，為您的 LINE 帶來溫馨的氛圍。',
        icon: '👶'
    },
    {
        category: 'couple',
        title: '情侶主題',
        description: '浪漫甜蜜的情侶主題，融合兩人的愛情故事元素，打造獨特的 LINE 主題體驗。',
        icon: '💑'
    },
    {
        category: 'pet',
        title: '寵物主題',
        description: '為寵物愛好者設計的主題，展現毛孩們的可愛模樣，讓您每次打開 LINE 都能看到最親愛的寵物。',
        icon: '🐾'
    },
    {
        category: 'family',
        title: '家庭主題',
        description: '溫馨的家庭主題設計，強調家人之間的親密關係和溫暖感受。',
        icon: '👨‍👩‍👧‍👦'
    },
    {
        category: 'personal',
        title: '個人主題',
        description: '展現個人風格與品味的獨特主題設計，完全根據個人的喜好、興趣和個性量身打造。',
        icon: '⭐'
    },
    {
        category: 'friend',
        title: '朋友主題',
        description: '為友誼設計的主題，強調朋友之間的珍貴情誼與美好回憶。',
        icon: '👫'
    }
];

// Original Portfolio Data
const originalPortfolio = [
    {
        category: 'animal',
        title: '海洋之心',
        description: '靈感來自深海的神秘魅力，融合海洋生物元素與現代設計風格，營造寧靜致遠的視覺體驗。',
        icon: '🌊'
    },
    {
        category: 'animal',
        title: '森林秘境',
        description: '探索自然森林的神秘與寧靜，融合各種森林動物與植物元素。',
        icon: '🌲'
    },
    {
        category: 'animal',
        title: '天空漫步',
        description: '以飛行動物為主題，融合天空、雲朵和飛鳥元素，營造輕盈自在的視覺感受。',
        icon: '🦋'
    },
    {
        category: 'character',
        title: '城市脈動',
        description: '都市生活的節奏與活力，結合建築、人物與現代元素，呈現充滿動感的設計美學。',
        icon: '🏙️'
    },
    {
        category: 'character',
        title: '極簡主義',
        description: '以極簡設計理念為核心，融合人物輪廓與幾何圖形，呈現現代、清爽的視覺風格。',
        icon: '✨'
    },
    {
        category: 'character',
        title: '藝術肖像',
        description: '融合藝術風格的人物肖像設計，採用油畫、水彩等藝術表現手法，呈現獨特的視覺美感。',
        icon: '🎨'
    }
];

// Process Steps Data
const processSteps = [
    {
        number: 1,
        title: '諮詢需求與查看照片',
        description: '透過 LINE 官方帳號進行初步溝通，確認客製化需求和照片素材。'
    },
    {
        number: 2,
        title: '我提供草稿圖',
        description: '根據需求提供主題草稿圖，確認風格。'
    },
    {
        number: 3,
        title: '您確認後下單',
        description: '確認草稿圖和價格方案後，在蝦皮商城下單。'
    },
    {
        number: 4,
        title: '我寄出小物 → 您取貨完成訂單',
        description: '依蝦皮規定寄出實體小物，您取貨完成訂單後，我才能開始正式製作。'
    },
    {
        number: 5,
        title: '開始正式製作',
        description: '根據最終確認的草稿和素材，進行主題的正式設計與製作。'
    },
    {
        number: 6,
        title: '完成後提供預覽',
        description: '主題製作完成後，提供預覽圖給您確認。'
    },
    {
        number: 7,
        title: '送官方審核',
        description: '主題送交 LINE 官方審核（約 3～5 天）。'
    },
    {
        number: 8,
        title: '上架後提供下載連結',
        description: '審核通過上架後，提供下載連結讓您自行購買。'
    }
];

// Pricing Plans Data
const pricingPlans = [
    {
        name: '簡款',
        price: '$300',
        features: [
            '封面圖+5張',
            '主題名稱',
            '主選單圖案+4張（二選一）',
            '密碼圖案+4張（二選一）'
        ]
    },
    {
        name: '進階款',
        price: '$450',
        features: [
            '封面圖+5張',
            '主題名稱',
            '主選單圖案+5張（二選一）',
            '密碼圖案+4張（二選一）'
        ],
        featured: true
    },
    {
        name: '全能款/至尊款',
        price: '$700~$750',
        features: [
            '封面圖+5張',
            '主題名稱',
            '頭像',
            '主選單圖案+5張（二選一）',
            '密碼圖案+4張（二選一）'
        ]
    }
];

// FAQ Data
const faqData = [
    {
        question: '製作時間多久？可以急件嗎？',
        answer: '這項服務製作時間約 7～20 天，依排單狀況而定。官方審核約 3～5 個工作天。本商品不接受急件。'
    },
    {
        question: '什麼時候會開始製作？',
        answer: '您取貨並按下完成訂單後，才會開始排單製作。'
    },
    {
        question: '為什麼需要寄小物？不是虛擬商品嗎？',
        answer: '因為蝦皮不允許直接販售虛擬商品，所以會寄出小物讓您取貨。您完成取貨後，我才能開始製作主題。'
    },
    {
        question: '製作前會先看到草稿圖嗎？',
        answer: '會，會先提供草稿圖。您確認喜歡後再下單。'
    },
    {
        question: '主題需要提供哪些照片？需要幾張？',
        answer: '基本需 13 張照片：封面 1、主題名稱、頭像 2、主選單圖案 5（或 10）、聊天背景 1、密碼圖案 4（或 8）。如果主選單與密碼圖案使用同一張照片，最少 9 張即可完成。'
    },
    {
        question: '照片可以用明星或動漫嗎？',
        answer: '不行。不可使用任何有版權的內容。需是本人或已獲得同意的照片，且需清晰、不模糊、人物完整。'
    },
    {
        question: '完成後可以修改嗎？',
        answer: '可以免費修改一次。第二次起每次加收 $100。'
    },
    {
        question: '草稿不喜歡可以不下單嗎？',
        answer: '可以。草稿僅供確認風格，不滿意可選擇不下單。'
    },
    {
        question: '主題為什麼需要你代為上架？',
        answer: 'LINE 主題必須由製作者上架。上架後會提供連結讓您自行購買。'
    },
    {
        question: '下單後可以取消或退款嗎？',
        answer: '此為客製化商品，不適用七日鑑賞期。下單後無法取消或退款。'
    }
];

// Render Custom Portfolio
function renderCustomPortfolio() {
    const grid = document.getElementById('custom-grid');
    customPortfolio.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.setAttribute('data-category', item.category);
        card.innerHTML = `
            <div class="portfolio-image">${item.icon}</div>
            <div class="portfolio-content">
                <span class="portfolio-category">${getCategoryName(item.category)}</span>
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render Original Portfolio
function renderOriginalPortfolio() {
    const grid = document.getElementById('original-grid');
    originalPortfolio.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.setAttribute('data-category', item.category);
        card.innerHTML = `
            <div class="portfolio-image">${item.icon}</div>
            <div class="portfolio-content">
                <span class="portfolio-category">${item.category === 'animal' ? '動物系列' : '人物系列'}</span>
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render Process Steps
function renderProcessSteps() {
    const timeline = document.querySelector('.process-timeline');
    processSteps.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'process-step';
        stepDiv.innerHTML = `
            <div class="process-number">${step.number}</div>
            <div class="process-content">
                <h3 class="process-title">${step.title}</h3>
                <p class="process-description">${step.description}</p>
            </div>
        `;
        timeline.appendChild(stepDiv);
    });
}

// Render Pricing Plans
function renderPricingPlans() {
    const grid = document.querySelector('.pricing-grid');
    pricingPlans.forEach(plan => {
        const card = document.createElement('div');
        card.className = 'pricing-card' + (plan.featured ? ' featured' : '');
        card.innerHTML = `
            <div class="pricing-header">
                <h3 class="pricing-name">${plan.name}</h3>
                <div class="pricing-price">${plan.price}</div>
            </div>
            <div class="pricing-body">
                <ul class="pricing-features">
                    ${plan.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <button class="pricing-btn" onclick="window.open('https://lin.ee/0IGPAku', '_blank')">想了解</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render FAQ
function renderFAQ() {
    const list = document.querySelector('.faq-list');
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                <span>${item.question}</span>
                <span class="faq-icon">▼</span>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-content">${item.answer}</div>
            </div>
        `;
        list.appendChild(faqItem);
    });
}

// Category Filter Functionality
function setupFilters() {
    const customFilters = document.querySelectorAll('#custom-portfolio .filter-btn');
    const originalFilters = document.querySelectorAll('#original-portfolio .filter-btn');
    
    customFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            customFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterPortfolio('custom-grid', btn.dataset.category);
        });
    });
    
    originalFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            originalFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterPortfolio('original-grid', btn.dataset.category);
        });
    });
}

function filterPortfolio(gridId, category) {
    const grid = document.getElementById(gridId);
    const cards = grid.querySelectorAll('.portfolio-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// FAQ Accordion Functionality
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        'family': '家庭',
        'baby': '寶寶',
        'couple': '情侶',
        'personal': '個人',
        'pet': '寵物',
        'friend': '朋友'
    };
    return names[category] || category;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCustomPortfolio();
    renderOriginalPortfolio();
    renderProcessSteps();
    renderPricingPlans();
    renderFAQ();
    setupFilters();
    setupFAQ();
});
