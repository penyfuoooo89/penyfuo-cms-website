// Password for edit mode
const EDIT_PASSWORD = 'issocute8943';
let isEditMode = false;
let currentEditItem = null;
let currentEditType = null;

// Default Data
const defaultCustomPortfolio = [
    {
        id: 1,
        category: 'baby',
        title: '寶寶主題',
        description: '溫暖可愛的寶寶主題設計,採用柔和的色彩搭配和卡通風格圖案,為您的 LINE 帶來溫馨的氛圍。',
        icon: '👶',
        image: '',
        hidden: false
    },
    {
        id: 2,
        category: 'couple',
        title: '情侶主題',
        description: '浪漫甜蜜的情侶主題,融合兩人的愛情故事元素,打造獨特的 LINE 主題體驗。',
        icon: '💑',
        image: '',
        hidden: false
    },
    {
        id: 3,
        category: 'pet',
        title: '寵物主題',
        description: '為寵物愛好者設計的主題,展現毛孩們的可愛模樣,讓您每次打開 LINE 都能看到最親愛的寵物。',
        icon: '🐾',
        image: '',
        hidden: false
    },
    {
        id: 4,
        category: 'family',
        title: '家庭主題',
        description: '溫馨的家庭主題設計,強調家人之間的親密關係和溫暖感受。',
        icon: '👨‍👩‍👧‍👦',
        image: '',
        hidden: false
    },
    {
        id: 5,
        category: 'personal',
        title: '個人主題',
        description: '展現個人風格與品味的獨特主題設計,完全根據個人的喜好、興趣和個性量身打造。',
        icon: '⭐',
        image: '',
        hidden: false
    },
    {
        id: 6,
        category: 'friend',
        title: '朋友主題',
        description: '為友誼設計的主題,強調朋友之間的珍貴情誼與美好回憶。',
        icon: '👫',
        image: '',
        hidden: false
    }
];

const defaultOriginalPortfolio = [
    {
        id: 1,
        category: 'animal',
        title: '海洋之心',
        description: '靈感來自深海的神秘魅力,融合海洋生物元素與現代設計風格,營造寧靜致遠的視覺體驗。',
        icon: '🌊',
        image: '',
        hidden: false
    },
    {
        id: 2,
        category: 'animal',
        title: '森林秘境',
        description: '探索自然森林的神秘與寧靜,融合各種森林動物與植物元素。',
        icon: '🌲',
        image: '',
        hidden: false
    },
    {
        id: 3,
        category: 'animal',
        title: '天空漫步',
        description: '以飛行動物為主題,融合天空、雲朵和飛鳥元素,營造輕盈自在的視覺感受。',
        icon: '🦋',
        image: '',
        hidden: false
    },
    {
        id: 4,
        category: 'character',
        title: '城市脈動',
        description: '都市生活的節奏與活力,結合建築、人物與現代元素,呈現充滿動感的設計美學。',
        icon: '🏙️',
        image: '',
        hidden: false
    },
    {
        id: 5,
        category: 'character',
        title: '極簡主義',
        description: '以極簡設計理念為核心,融合人物輪廓與幾何圖形,呈現現代、清爽的視覺風格。',
        icon: '✨',
        image: '',
        hidden: false
    },
    {
        id: 6,
        category: 'character',
        title: '藝術肖像',
        description: '融合藝術風格的人物肖像設計,採用油畫、水彩等藝術表現手法,呈現獨特的視覺美感。',
        icon: '🎨',
        image: '',
        hidden: false
    }
];

const defaultProcessSteps = [
    {
        number: 1,
        title: '諮詢需求與查看照片',
        description: '透過 LINE 官方帳號進行初步溝通,確認客製化需求和照片素材。'
    },
    {
        number: 2,
        title: '我提供草稿圖',
        description: '根據需求提供主題草稿圖,確認風格。'
    },
    {
        number: 3,
        title: '您確認後下單',
        description: '確認草稿圖和價格方案後,在蝦皮商城下單。'
    },
    {
        number: 4,
        title: '我寄出小物 → 您取貨完成訂單',
        description: '依蝦皮規定寄出實體小物,您取貨完成訂單後,我才能開始正式製作。'
    },
    {
        number: 5,
        title: '開始正式製作',
        description: '根據最終確認的草稿和素材,進行主題的正式設計與製作。'
    },
    {
        number: 6,
        title: '完成後提供預覽',
        description: '主題製作完成後,提供預覽圖給您確認。'
    },
    {
        number: 7,
        title: '送官方審核',
        description: '主題送交 LINE 官方審核(約 3～5 天)。'
    },
    {
        number: 8,
        title: '上架後提供下載連結',
        description: '審核通過上架後,提供下載連結讓您自行購買。'
    }
];

const defaultPricingPlans = [
    {
        id: 1,
        name: '簡款',
        price: '$300',
        features: [
            '封面圖+5張',
            '主題名稱',
            '主選單圖案+4張(二選一)',
            '密碼圖案+4張(二選一)'
        ]
    },
    {
        id: 2,
        name: '進階款',
        price: '$450',
        features: [
            '封面圖+5張',
            '主題名稱',
            '主選單圖案+5張(二選一)',
            '密碼圖案+4張(二選一)'
        ],
        featured: true
    },
    {
        id: 3,
        name: '全能款/至尊款',
        price: '$700~$750',
        features: [
            '封面圖+5張',
            '主題名稱',
            '頭像',
            '主選單圖案+5張(二選一)',
            '密碼圖案+4張(二選一)'
        ]
    }
];

const defaultFAQData = [
    {
        id: 1,
        question: '製作時間多久？可以急件嗎？',
        answer: '這項服務製作時間約 7～20 天,依排單狀況而定。官方審核約 3～5 個工作天。本商品不接受急件。'
    },
    {
        id: 2,
        question: '什麼時候會開始製作？',
        answer: '您取貨並按下完成訂單後,才會開始排單製作。'
    },
    {
        id: 3,
        question: '為什麼需要寄小物？不是虛擬商品嗎？',
        answer: '因為蝦皮不允許直接販售虛擬商品,所以會寄出小物讓您取貨。您完成取貨後,我才能開始製作主題。'
    },
    {
        id: 4,
        question: '製作前會先看到草稿圖嗎？',
        answer: '會,會先提供草稿圖。您確認喜歡後再下單。'
    },
    {
        id: 5,
        question: '主題需要提供哪些照片？需要幾張？',
        answer: '基本需 13 張照片：封面 1、主題名稱、頭像 2、主選單圖案 5(或 10)、聊天背景 1、密碼圖案 4(或 8)。如果主選單與密碼圖案使用同一張照片,最少 9 張即可完成。'
    },
    {
        id: 6,
        question: '照片可以用明星或動漫嗎？',
        answer: '不行。不可使用任何有版權的內容。需是本人或已獲得同意的照片,且需清晰、不模糊、人物完整。'
    },
    {
        id: 7,
        question: '完成後可以修改嗎？',
        answer: '可以免費修改一次。第二次起每次加收 $100。'
    },
    {
        id: 8,
        question: '草稿不喜歡可以不下單嗎？',
        answer: '可以。草稿僅供確認風格,不滿意可選擇不下單。'
    },
    {
        id: 9,
        question: '主題為什麼需要你代為上架？',
        answer: 'LINE 主題必須由製作者上架。上架後會提供連結讓您自行購買。'
    },
    {
        id: 10,
        question: '下單後可以取消或退款嗎？',
        answer: '此為客製化商品,不適用七日鑑賞期。下單後無法取消或退款。'
    }
];

// Load data from localStorage or use defaults (with error handling)
function loadFromStorage(key, defaultValue) {
    try {
        const stored = localStorage.getItem(key);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.error(`載入 ${key} 時發生錯誤:`, e);
    }
    return defaultValue;
}

let customPortfolio = loadFromStorage('customPortfolio', defaultCustomPortfolio);
let originalPortfolio = loadFromStorage('originalPortfolio', defaultOriginalPortfolio);
let processSteps = loadFromStorage('processSteps', defaultProcessSteps);
let pricingPlans = loadFromStorage('pricingPlans', defaultPricingPlans);
let faqData = loadFromStorage('faqData', defaultFAQData);
let siteContent = loadFromStorage('siteContent', {
    heroTitle: 'Penyfuo 客製化主題專區',
    heroSubtitle: '為您打造獨一無二的 LINE 主題設計',
    aboutP1: 'Penyfuo 是一個專注於 LINE 主題客製化設計的創意工作室。我們深入理解每位客戶的獨特需求,透過精心的設計與細緻的執行,將您的想法轉化為視覺藝術。',
    aboutP2: '從溫暖的家庭主題到浪漫的情侶設計,從可愛的寶寶主題到個性十足的原創作品,我們致力於為每位客戶創造一個專屬的 LINE 主題體驗。'
});

// Save all data to localStorage
function saveData() {
    try {
        // 確保 localStorage 可用
        if (typeof(Storage) === "undefined") {
            alert('❌ 您的瀏覽器不支援 LocalStorage，無法儲存資料！');
            return;
        }
        
        // 嘗試儲存每個項目，並捕捉個別錯誤
        const saveItems = [
            { key: 'customPortfolio', data: customPortfolio },
            { key: 'originalPortfolio', data: originalPortfolio },
            { key: 'processSteps', data: processSteps },
            { key: 'pricingPlans', data: pricingPlans },
            { key: 'faqData', data: faqData },
            { key: 'siteContent', data: siteContent }
        ];
        
        let savedCount = 0;
        let failedItems = [];
        
        for (let item of saveItems) {
            try {
                const jsonString = JSON.stringify(item.data);
                localStorage.setItem(item.key, jsonString);
                savedCount++;
            } catch (e) {
                console.error(`儲存 ${item.key} 時發生錯誤:`, e);
                failedItems.push(item.key);
                
                // 如果是容量問題，嘗試清理並重試
                if (e.name === 'QuotaExceededError') {
                    try {
                        // 清理舊資料
                        localStorage.clear();
                        // 重新儲存所有項目
                        for (let retryItem of saveItems) {
                            const jsonString = JSON.stringify(retryItem.data);
                            localStorage.setItem(retryItem.key, jsonString);
                        }
                        alert('✅ 資料已儲存！（已清理舊資料）');
                        return;
                    } catch (retryError) {
                        alert('❌ 儲存失敗：容量不足。請嘗試刪除一些圖片或內容。');
                        return;
                    }
                }
            }
        }
        
        if (failedItems.length === 0) {
            alert('✅ 資料已儲存！');
            console.log('成功儲存所有資料');
        } else {
            alert(`⚠️ 部分資料儲存失敗：${failedItems.join(', ')}`);
        }
        
    } catch (error) {
        console.error('儲存資料時發生錯誤:', error);
        alert('❌ 儲存失敗：' + error.message);
    }
}

// Login Modal Functions
function showLoginModal() {
    document.getElementById('login-modal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('password-input').value = '';
}

function login() {
    const password = document.getElementById('password-input').value;
    if (password === EDIT_PASSWORD) {
        isEditMode = true;
        enterEditMode();
        closeLoginModal();
    } else {
        alert('❌ 密碼錯誤！');
    }
}

// Enter Edit Mode
function enterEditMode() {
    isEditMode = true;
    document.body.classList.add('edit-mode');
    document.getElementById('edit-indicator').style.display = 'flex';
    document.getElementById('add-custom-btn').style.display = 'block';
    document.getElementById('add-original-btn').style.display = 'block';
    document.getElementById('add-faq-btn').style.display = 'block';
    
    // Add click handlers to editable elements
    setupEditableElements();
    
    // Re-render portfolios with edit controls
    renderCustomPortfolio();
    renderOriginalPortfolio();
    renderPricingPlans();
    renderFAQ();
}

// Exit Edit Mode
function exitEditMode() {
    isEditMode = false;
    document.body.classList.remove('edit-mode');
    document.getElementById('edit-indicator').style.display = 'none';
    document.getElementById('add-custom-btn').style.display = 'none';
    document.getElementById('add-original-btn').style.display = 'none';
    document.getElementById('add-faq-btn').style.display = 'none';
    
    // Re-render without edit controls
    renderCustomPortfolio();
    renderOriginalPortfolio();
    renderPricingPlans();
    renderFAQ();
}

// Setup editable elements
function setupEditableElements() {
    const editables = document.querySelectorAll('.editable');
    editables.forEach(el => {
        el.addEventListener('click', function() {
            if (isEditMode) {
                const field = this.getAttribute('data-field');
                const currentValue = this.textContent;
                const newValue = prompt('編輯內容:', currentValue);
                if (newValue !== null && newValue !== currentValue) {
                    this.textContent = newValue;
                    siteContent[field] = newValue;
                }
            }
        });
    });
}

// Render Custom Portfolio
function renderCustomPortfolio() {
    const grid = document.getElementById('custom-grid');
    grid.innerHTML = '';
    customPortfolio.forEach(item => {
        if (item.hidden && !isEditMode) return;
        
        const card = document.createElement('div');
        card.className = 'portfolio-card' + (item.hidden ? ' hidden' : '');
        card.setAttribute('data-category', item.category);
        
        const imageContent = item.image ? 
            `<img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">` : 
            item.icon;
        
        card.innerHTML = `
            ${isEditMode ? `
                <div class="edit-controls">
                    <button class="btn-edit" onclick="editCustomItem(${item.id})">✏️</button>
                    <button class="btn-hide" onclick="toggleHideCustomItem(${item.id})">${item.hidden ? '👁️' : '🙈'}</button>
                    <button class="btn-delete" onclick="deleteCustomItem(${item.id})">🗑️</button>
                </div>
            ` : ''}
            <div class="portfolio-image">${imageContent}</div>
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
    grid.innerHTML = '';
    originalPortfolio.forEach(item => {
        if (item.hidden && !isEditMode) return;
        
        const card = document.createElement('div');
        card.className = 'portfolio-card' + (item.hidden ? ' hidden' : '');
        card.setAttribute('data-category', item.category);
        
        const imageContent = item.image ? 
            `<img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">` : 
            item.icon;
        
        card.innerHTML = `
            ${isEditMode ? `
                <div class="edit-controls">
                    <button class="btn-edit" onclick="editOriginalItem(${item.id})">✏️</button>
                    <button class="btn-hide" onclick="toggleHideOriginalItem(${item.id})">${item.hidden ? '👁️' : '🙈'}</button>
                    <button class="btn-delete" onclick="deleteOriginalItem(${item.id})">🗑️</button>
                </div>
            ` : ''}
            <div class="portfolio-image">${imageContent}</div>
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
    timeline.innerHTML = '';
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
    grid.innerHTML = '';
    pricingPlans.forEach(plan => {
        const card = document.createElement('div');
        card.className = 'pricing-card' + (plan.featured ? ' featured' : '');
        card.innerHTML = `
            ${isEditMode ? `
                <div class="edit-controls">
                    <button class="btn-edit" onclick="editPricingPlan(${plan.id})">✏️</button>
                </div>
            ` : ''}
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
    list.innerHTML = '';
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            ${isEditMode ? `
                <div class="edit-controls">
                    <button class="btn-edit" onclick="editFAQItem(${item.id})">✏️</button>
                    <button class="btn-delete" onclick="deleteFAQItem(${item.id})">🗑️</button>
                </div>
            ` : ''}
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
    setupFAQ();
}

// Edit Functions
function editCustomItem(id) {
    const item = customPortfolio.find(i => i.id === id);
    if (!item) return;
    
    const modal = document.getElementById('edit-modal');
    document.getElementById('modal-title').textContent = '編輯客製化主題';
    document.getElementById('modal-body').innerHTML = `
        <div class="form-group">
            <label>標題</label>
            <input type="text" id="edit-title" value="${item.title}" />
        </div>
        <div class="form-group">
            <label>描述</label>
            <textarea id="edit-description">${item.description}</textarea>
        </div>
        <div class="form-group">
            <label>分類</label>
            <select id="edit-category">
                <option value="family" ${item.category === 'family' ? 'selected' : ''}>家庭</option>
                <option value="baby" ${item.category === 'baby' ? 'selected' : ''}>寶寶</option>
                <option value="couple" ${item.category === 'couple' ? 'selected' : ''}>情侶</option>
                <option value="personal" ${item.category === 'personal' ? 'selected' : ''}>個人</option>
                <option value="pet" ${item.category === 'pet' ? 'selected' : ''}>寵物</option>
                <option value="friend" ${item.category === 'friend' ? 'selected' : ''}>朋友</option>
            </select>
        </div>
        <div class="form-group">
            <label>圖示 Emoji</label>
            <input type="text" id="edit-icon" value="${item.icon}" />
        </div>
        <div class="form-group">
            <label>圖片 (選擇檔案或輸入網址)</label>
            <input type="file" id="edit-image-file" accept="image/*" onchange="handleImageUpload(this)" />
            <input type="text" id="edit-image-url" value="${item.image || ''}" placeholder="或輸入圖片網址" />
            ${item.image ? `<img src="${item.image}" class="image-preview" />` : ''}
        </div>
    `;
    
    currentEditItem = item;
    currentEditType = 'custom';
    modal.style.display = 'flex';
}

function editOriginalItem(id) {
    const item = originalPortfolio.find(i => i.id === id);
    if (!item) return;
    
    const modal = document.getElementById('edit-modal');
    document.getElementById('modal-title').textContent = '編輯原創主題';
    document.getElementById('modal-body').innerHTML = `
        <div class="form-group">
            <label>標題</label>
            <input type="text" id="edit-title" value="${item.title}" />
        </div>
        <div class="form-group">
            <label>描述</label>
            <textarea id="edit-description">${item.description}</textarea>
        </div>
        <div class="form-group">
            <label>分類</label>
            <select id="edit-category">
                <option value="animal" ${item.category === 'animal' ? 'selected' : ''}>動物系列</option>
                <option value="character" ${item.category === 'character' ? 'selected' : ''}>人物系列</option>
            </select>
        </div>
        <div class="form-group">
            <label>圖示 Emoji</label>
            <input type="text" id="edit-icon" value="${item.icon}" />
        </div>
        <div class="form-group">
            <label>圖片 (選擇檔案或輸入網址)</label>
            <input type="file" id="edit-image-file" accept="image/*" onchange="handleImageUpload(this)" />
            <input type="text" id="edit-image-url" value="${item.image || ''}" placeholder="或輸入圖片網址" />
            ${item.image ? `<img src="${item.image}" class="image-preview" />` : ''}
        </div>
    `;
    
    currentEditItem = item;
    currentEditType = 'original';
    modal.style.display = 'flex';
}

function editPricingPlan(id) {
    const plan = pricingPlans.find(p => p.id === id);
    if (!plan) return;
    
    const modal = document.getElementById('edit-modal');
    document.getElementById('modal-title').textContent = '編輯價格方案';
    document.getElementById('modal-body').innerHTML = `
        <div class="form-group">
            <label>方案名稱</label>
            <input type="text" id="edit-name" value="${plan.name}" />
        </div>
        <div class="form-group">
            <label>價格</label>
            <input type="text" id="edit-price" value="${plan.price}" />
        </div>
        <div class="form-group">
            <label>特色 (每行一項)</label>
            <textarea id="edit-features" rows="6">${plan.features.join('\n')}</textarea>
        </div>
    `;
    
    currentEditItem = plan;
    currentEditType = 'pricing';
    modal.style.display = 'flex';
}

function editFAQItem(id) {
    const item = faqData.find(i => i.id === id);
    if (!item) return;
    
    const modal = document.getElementById('edit-modal');
    document.getElementById('modal-title').textContent = '編輯常見問題';
    document.getElementById('modal-body').innerHTML = `
        <div class="form-group">
            <label>問題</label>
            <input type="text" id="edit-question" value="${item.question}" />
        </div>
        <div class="form-group">
            <label>答案</label>
            <textarea id="edit-answer" rows="5">${item.answer}</textarea>
        </div>
    `;
    
    currentEditItem = item;
    currentEditType = 'faq';
    modal.style.display = 'flex';
}

// Handle image upload
function handleImageUpload(input) {
    const file = input.files[0];
    if (file) {
        // 檢查檔案大小（限制 5MB）
        if (file.size > 5 * 1024 * 1024) {
            alert('⚠️ 圖片檔案太大！請選擇小於 5MB 的圖片。');
            input.value = '';
            return;
        }
        
        // 提示使用者上傳到圖床
        const useImageHost = confirm(
            '💡 建議使用圖床服務以避免容量限制！\n\n' +
            '點擊「確定」查看圖床上傳教學\n' +
            '點擊「取消」繼續使用本地上傳（可能導致容量不足）'
        );
        
        if (useImageHost) {
            // 開啟圖床教學
            alert(
                '📸 推薦免費圖床服務：\n\n' +
                '1. ImgBB (https://imgbb.com)\n' +
                '   - 免費、無需註冊\n' +
                '   - 上傳後複製「直接連結」\n\n' +
                '2. Imgur (https://imgur.com)\n' +
                '   - 免費、支援大量圖片\n' +
                '   - 右鍵圖片 → 複製圖片網址\n\n' +
                '3. Postimages (https://postimages.org)\n' +
                '   - 免費、永久儲存\n\n' +
                '上傳後，將圖片網址貼到下方的「圖片網址」欄位即可！'
            );
            input.value = '';
            return;
        }
        
        // 使用 Base64（警告容量限制）
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64 = e.target.result;
            const sizeKB = Math.round(base64.length / 1024);
            
            // 警告如果圖片太大
            if (sizeKB > 500) {
                const proceed = confirm(
                    `⚠️ 此圖片轉換後約 ${sizeKB}KB\n\n` +
                    '使用本地上傳可能很快達到容量限制！\n' +
                    '建議使用圖床服務。\n\n' +
                    '是否仍要繼續？'
                );
                if (!proceed) {
                    input.value = '';
                    return;
                }
            }
            
            document.getElementById('edit-image-url').value = base64;
            console.log(`圖片已轉換為 Base64，大小: ${sizeKB}KB`);
        };
        reader.readAsDataURL(file);
    }
}

// Save Edit
function saveEdit() {
    if (!currentEditItem || !currentEditType) return;
    
    if (currentEditType === 'custom' || currentEditType === 'original') {
        currentEditItem.title = document.getElementById('edit-title').value;
        currentEditItem.description = document.getElementById('edit-description').value;
        currentEditItem.category = document.getElementById('edit-category').value;
        currentEditItem.icon = document.getElementById('edit-icon').value;
        currentEditItem.image = document.getElementById('edit-image-url').value;
        
        if (currentEditType === 'custom') {
            renderCustomPortfolio();
        } else {
            renderOriginalPortfolio();
        }
    } else if (currentEditType === 'pricing') {
        currentEditItem.name = document.getElementById('edit-name').value;
        currentEditItem.price = document.getElementById('edit-price').value;
        currentEditItem.features = document.getElementById('edit-features').value.split('\n').filter(f => f.trim());
        renderPricingPlans();
    } else if (currentEditType === 'faq') {
        currentEditItem.question = document.getElementById('edit-question').value;
        currentEditItem.answer = document.getElementById('edit-answer').value;
        renderFAQ();
    }
    
    closeEditModal();
}

// Close Edit Modal
function closeEditModal() {
    document.getElementById('edit-modal').style.display = 'none';
    currentEditItem = null;
    currentEditType = null;
}

// Delete Functions
function deleteCustomItem(id) {
    if (confirm('確定要刪除這個主題嗎？')) {
        customPortfolio = customPortfolio.filter(i => i.id !== id);
        renderCustomPortfolio();
    }
}

function deleteOriginalItem(id) {
    if (confirm('確定要刪除這個主題嗎？')) {
        originalPortfolio = originalPortfolio.filter(i => i.id !== id);
        renderOriginalPortfolio();
    }
}

function deleteFAQItem(id) {
    if (confirm('確定要刪除這個問題嗎？')) {
        faqData = faqData.filter(i => i.id !== id);
        renderFAQ();
    }
}

// Toggle Hide Functions
function toggleHideCustomItem(id) {
    const item = customPortfolio.find(i => i.id === id);
    if (item) {
        item.hidden = !item.hidden;
        renderCustomPortfolio();
    }
}

function toggleHideOriginalItem(id) {
    const item = originalPortfolio.find(i => i.id === id);
    if (item) {
        item.hidden = !item.hidden;
        renderOriginalPortfolio();
    }
}

// Add Functions
function addCustomItem() {
    const newId = Math.max(...customPortfolio.map(i => i.id), 0) + 1;
    const newItem = {
        id: newId,
        category: 'family',
        title: '新主題',
        description: '請編輯描述',
        icon: '✨',
        image: '',
        hidden: false
    };
    customPortfolio.push(newItem);
    renderCustomPortfolio();
    editCustomItem(newId);
}

function addOriginalItem() {
    const newId = Math.max(...originalPortfolio.map(i => i.id), 0) + 1;
    const newItem = {
        id: newId,
        category: 'animal',
        title: '新主題',
        description: '請編輯描述',
        icon: '✨',
        image: '',
        hidden: false
    };
    originalPortfolio.push(newItem);
    renderOriginalPortfolio();
    editOriginalItem(newId);
}

function addFAQItem() {
    const newId = Math.max(...faqData.map(i => i.id), 0) + 1;
    const newItem = {
        id: newId,
        question: '新問題',
        answer: '請編輯答案'
    };
    faqData.push(newItem);
    renderFAQ();
    editFAQItem(newId);
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

// Load site content
function loadSiteContent() {
    document.querySelector('[data-field="heroTitle"]').textContent = siteContent.heroTitle;
    document.querySelector('[data-field="heroSubtitle"]').textContent = siteContent.heroSubtitle;
    document.querySelector('[data-field="aboutP1"]').textContent = siteContent.aboutP1;
    document.querySelector('[data-field="aboutP2"]').textContent = siteContent.aboutP2;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSiteContent();
    renderCustomPortfolio();
    renderOriginalPortfolio();
    renderProcessSteps();
    renderPricingPlans();
    renderFAQ();
    setupFilters();
    setupFAQ();
    setupEditableElements();
    
    // Handle Enter key in password input
    document.getElementById('password-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
});
