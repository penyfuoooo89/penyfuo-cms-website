// Auto-save and keep-alive functionality
// 自動儲存和保持活躍功能

// 自動儲存間隔（毫秒）- 每 30 秒自動儲存一次
const AUTO_SAVE_INTERVAL = 30000;

// 心跳間隔（毫秒）- 每 60 秒發送一次心跳
const HEARTBEAT_INTERVAL = 60000;

// 自動儲存計時器
let autoSaveTimer = null;

// 心跳計時器
let heartbeatTimer = null;

// 是否有未儲存的變更
let hasUnsavedChanges = false;

// 標記有變更
function markAsChanged() {
    hasUnsavedChanges = true;
    updateSaveIndicator();
}

// 更新儲存指示器
function updateSaveIndicator() {
    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn && isEditMode) {
        if (hasUnsavedChanges) {
            saveBtn.textContent = '💾 儲存 *';
            saveBtn.style.animation = 'pulse 2s infinite';
        } else {
            saveBtn.textContent = '💾 儲存';
            saveBtn.style.animation = 'none';
        }
    }
}

// 自動儲存函數
function autoSave() {
    if (isEditMode && hasUnsavedChanges) {
        console.log('執行自動儲存...');
        saveData();
        hasUnsavedChanges = false;
        updateSaveIndicator();
    }
}

// 心跳函數 - 保持 LocalStorage 活躍
function heartbeat() {
    try {
        // 寫入一個時間戳記來保持 LocalStorage 活躍
        localStorage.setItem('lastHeartbeat', new Date().toISOString());
        console.log('心跳:', new Date().toISOString());
    } catch (e) {
        console.error('心跳失敗:', e);
    }
}

// 啟動自動儲存
function startAutoSave() {
    if (autoSaveTimer) {
        clearInterval(autoSaveTimer);
    }
    autoSaveTimer = setInterval(autoSave, AUTO_SAVE_INTERVAL);
    console.log('自動儲存已啟動（每 30 秒）');
}

// 停止自動儲存
function stopAutoSave() {
    if (autoSaveTimer) {
        clearInterval(autoSaveTimer);
        autoSaveTimer = null;
        console.log('自動儲存已停止');
    }
}

// 啟動心跳
function startHeartbeat() {
    if (heartbeatTimer) {
        clearInterval(heartbeatTimer);
    }
    heartbeatTimer = setInterval(heartbeat, HEARTBEAT_INTERVAL);
    heartbeat(); // 立即執行一次
    console.log('心跳已啟動（每 60 秒）');
}

// 停止心跳
function stopHeartbeat() {
    if (heartbeatTimer) {
        clearInterval(heartbeatTimer);
        heartbeatTimer = null;
        console.log('心跳已停止');
    }
}

// 覆寫原有的 saveData 函數，添加變更標記重置
const originalSaveData = window.saveData;
window.saveData = function() {
    originalSaveData();
    hasUnsavedChanges = false;
    updateSaveIndicator();
};

// 覆寫原有的 enterEditMode 函數，啟動自動儲存和心跳
const originalEnterEditMode = window.enterEditMode;
window.enterEditMode = function() {
    originalEnterEditMode();
    startAutoSave();
    startHeartbeat();
    console.log('編輯模式：自動儲存和心跳已啟動');
};

// 覆寫原有的 exitEditMode 函數，停止自動儲存和心跳
const originalExitEditMode = window.exitEditMode;
window.exitEditMode = function() {
    // 退出前先儲存
    if (hasUnsavedChanges) {
        if (confirm('您有未儲存的變更，是否要儲存？')) {
            saveData();
        }
    }
    stopAutoSave();
    stopHeartbeat();
    originalExitEditMode();
    console.log('編輯模式：自動儲存和心跳已停止');
};

// 監聽所有可能的變更事件
document.addEventListener('DOMContentLoaded', function() {
    // 監聽所有輸入變更
    document.addEventListener('input', function(e) {
        if (isEditMode) {
            markAsChanged();
        }
    });
    
    // 監聽所有點擊事件（可能觸發編輯）
    document.addEventListener('click', function(e) {
        if (isEditMode && (
            e.target.classList.contains('editable') ||
            e.target.closest('.edit-controls')
        )) {
            markAsChanged();
        }
    });
});

// 在頁面卸載前儲存
window.addEventListener('beforeunload', function(e) {
    if (isEditMode && hasUnsavedChanges) {
        autoSave();
        e.preventDefault();
        e.returnValue = '您有未儲存的變更，確定要離開嗎？';
        return e.returnValue;
    }
});

// 添加 CSS 動畫
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.6;
        }
    }
`;
document.head.appendChild(style);

console.log('自動儲存和心跳功能已載入');
