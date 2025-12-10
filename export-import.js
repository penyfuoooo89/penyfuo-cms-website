// Export and Import functionality
// 資料匯出和匯入功能

// 匯出所有資料為 JSON 檔案
function exportData() {
    try {
        const allData = {
            customPortfolio: customPortfolio,
            originalPortfolio: originalPortfolio,
            processSteps: processSteps,
            pricingPlans: pricingPlans,
            faqData: faqData,
            siteContent: siteContent,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        const jsonString = JSON.stringify(allData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `penyfuo-data-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('✅ 資料已匯出！\n\n請將此檔案保存好，可用於：\n1. 備份資料\n2. 轉移到其他電腦\n3. 分享給網站管理員更新內容');
        
    } catch (error) {
        console.error('匯出資料時發生錯誤:', error);
        alert('❌ 匯出失敗：' + error.message);
    }
}

// 匯入資料從 JSON 檔案
function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const importedData = JSON.parse(event.target.result);
                
                // 驗證資料格式
                if (!importedData.customPortfolio || !importedData.siteContent) {
                    throw new Error('檔案格式不正確');
                }
                
                // 確認匯入
                const confirm = window.confirm(
                    '⚠️ 匯入資料將覆蓋目前的所有內容！\n\n' +
                    `匯出日期: ${importedData.exportDate ? new Date(importedData.exportDate).toLocaleString('zh-TW') : '未知'}\n` +
                    `版本: ${importedData.version || '未知'}\n\n` +
                    '是否繼續？'
                );
                
                if (!confirm) return;
                
                // 匯入資料
                customPortfolio = importedData.customPortfolio;
                originalPortfolio = importedData.originalPortfolio;
                processSteps = importedData.processSteps;
                pricingPlans = importedData.pricingPlans;
                faqData = importedData.faqData;
                siteContent = importedData.siteContent;
                
                // 儲存到 LocalStorage
                saveData();
                
                // 重新渲染所有內容
                renderAll();
                
                alert('✅ 資料已成功匯入！\n\n頁面將重新載入以套用變更。');
                location.reload();
                
            } catch (error) {
                console.error('匯入資料時發生錯誤:', error);
                alert('❌ 匯入失敗：' + error.message + '\n\n請確認檔案格式正確。');
            }
        };
        reader.readAsText(file);
    };
    
    input.click();
}

// 複製資料到剪貼簿（用於分享）
function copyDataToClipboard() {
    try {
        const allData = {
            customPortfolio: customPortfolio,
            originalPortfolio: originalPortfolio,
            processSteps: processSteps,
            pricingPlans: pricingPlans,
            faqData: faqData,
            siteContent: siteContent,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        const jsonString = JSON.stringify(allData);
        
        // 使用 Clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(jsonString).then(() => {
                alert(
                    '✅ 資料已複製到剪貼簿！\n\n' +
                    '您可以：\n' +
                    '1. 貼到記事本保存\n' +
                    '2. 傳送給網站管理員\n' +
                    '3. 在其他電腦上匯入'
                );
            }).catch(err => {
                fallbackCopy(jsonString);
            });
        } else {
            fallbackCopy(jsonString);
        }
        
    } catch (error) {
        console.error('複製資料時發生錯誤:', error);
        alert('❌ 複製失敗：' + error.message);
    }
}

// 備用複製方法
function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        alert(
            '✅ 資料已複製到剪貼簿！\n\n' +
            '您可以：\n' +
            '1. 貼到記事本保存\n' +
            '2. 傳送給網站管理員\n' +
            '3. 在其他電腦上匯入'
        );
    } catch (err) {
        alert('❌ 複製失敗，請手動選擇並複製資料');
    }
    
    document.body.removeChild(textarea);
}

// 從剪貼簿匯入資料
function importFromClipboard() {
    if (navigator.clipboard && navigator.clipboard.readText) {
        navigator.clipboard.readText().then(text => {
            processImportText(text);
        }).catch(err => {
            // 如果無法讀取剪貼簿，顯示輸入框
            showImportTextDialog();
        });
    } else {
        showImportTextDialog();
    }
}

// 顯示匯入文字對話框
function showImportTextDialog() {
    const text = prompt(
        '請貼上匯出的資料：\n\n' +
        '（從剪貼簿貼上 Ctrl+V）'
    );
    
    if (text) {
        processImportText(text);
    }
}

// 處理匯入的文字
function processImportText(text) {
    try {
        const importedData = JSON.parse(text);
        
        // 驗證資料格式
        if (!importedData.customPortfolio || !importedData.siteContent) {
            throw new Error('資料格式不正確');
        }
        
        // 確認匯入
        const confirmImport = window.confirm(
            '⚠️ 匯入資料將覆蓋目前的所有內容！\n\n' +
            `匯出日期: ${importedData.exportDate ? new Date(importedData.exportDate).toLocaleString('zh-TW') : '未知'}\n` +
            `版本: ${importedData.version || '未知'}\n\n` +
            '是否繼續？'
        );
        
        if (!confirmImport) return;
        
        // 匯入資料
        customPortfolio = importedData.customPortfolio;
        originalPortfolio = importedData.originalPortfolio;
        processSteps = importedData.processSteps;
        pricingPlans = importedData.pricingPlans;
        faqData = importedData.faqData;
        siteContent = importedData.siteContent;
        
        // 儲存到 LocalStorage
        saveData();
        
        // 重新渲染所有內容
        renderAll();
        
        alert('✅ 資料已成功匯入！\n\n頁面將重新載入以套用變更。');
        location.reload();
        
    } catch (error) {
        console.error('匯入資料時發生錯誤:', error);
        alert('❌ 匯入失敗：' + error.message + '\n\n請確認資料格式正確。');
    }
}

// 渲染所有內容
function renderAll() {
    if (typeof renderCustomPortfolio === 'function') renderCustomPortfolio();
    if (typeof renderOriginalPortfolio === 'function') renderOriginalPortfolio();
    if (typeof renderProcessSteps === 'function') renderProcessSteps();
    if (typeof renderPricingPlans === 'function') renderPricingPlans();
    if (typeof renderFAQ === 'function') renderFAQ();
    if (typeof updateSiteContent === 'function') updateSiteContent();
}

console.log('資料匯出匯入功能已載入');
