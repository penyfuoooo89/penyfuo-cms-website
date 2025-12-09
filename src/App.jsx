import { useState, useEffect } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Portfolio from './components/Portfolio'
import ProcessSection from './components/ProcessSection'
import PricingSection from './components/PricingSection'
import QASection from './components/QASection'
import Footer from './components/Footer'
import EditModal from './components/EditModal'
import Toast from './components/Toast'
import { PRESET_CUSTOM_THEMES, PRESET_ORIGINAL_THEMES } from './data/presetThemes'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isEditMode, setIsEditMode] = useState(false)
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false)
  const [customPortfolios, setCustomPortfolios] = useState([])
  const [originalPortfolios, setOriginalPortfolios] = useState([])
  const [processes, setProcesses] = useState([])
  const [pricingPlans, setPricingPlans] = useState([])
  const [qaItems, setQaItems] = useState([])
  const [editingItem, setEditingItem] = useState(null)
  const [editType, setEditType] = useState(null)
  const [toast, setToast] = useState(null)

  const EDIT_PASSWORD = 'issocute8943'

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const saved = localStorage.getItem('penyfuo_cms_v2')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        setCustomPortfolios(data.customPortfolios || PRESET_CUSTOM_THEMES)
        setOriginalPortfolios(data.originalPortfolios || PRESET_ORIGINAL_THEMES)
        setProcesses(data.processes || [])
        setPricingPlans(data.pricingPlans || [])
        setQaItems(data.qaItems || [])
      } catch (e) {
        console.error('Failed to load data:', e)
        initializeDefaultData()
      }
    } else {
      initializeDefaultData()
    }
  }

  const initializeDefaultData = () => {
    setCustomPortfolios(PRESET_CUSTOM_THEMES)
    setOriginalPortfolios(PRESET_ORIGINAL_THEMES)
    setProcesses([])
    setPricingPlans([])
    setQaItems([])
    saveData(PRESET_CUSTOM_THEMES, PRESET_ORIGINAL_THEMES, [], [], [])
  }

  const saveData = (custom, original, proc, pricing, qa) => {
    const data = {
      customPortfolios: custom,
      originalPortfolios: original,
      processes: proc,
      pricingPlans: pricing,
      qaItems: qa,
    }
    localStorage.setItem('penyfuo_cms_v2', JSON.stringify(data))
  }

  const handleEditClick = () => {
    setShowPasswordPrompt(true)
  }

  const handlePasswordSubmit = (password) => {
    if (password === EDIT_PASSWORD) {
      setIsEditMode(true)
      setShowPasswordPrompt(false)
      showToast('已進入編輯模式', 'success')
    } else {
      showToast('密碼錯誤', 'error')
    }
  }

  const handleExitEditMode = () => {
    setIsEditMode(false)
    showToast('已退出編輯模式', 'success')
  }

  // 客製化主題操作
  const handleAddCustomPortfolio = () => {
    setEditType('portfolio_custom')
    setEditingItem(null)
  }

  const handleEditCustomPortfolio = (item) => {
    setEditType('portfolio_custom')
    setEditingItem(item)
  }

  const handleDeleteCustomPortfolio = (id) => {
    const updated = customPortfolios.filter(p => p.id !== id)
    setCustomPortfolios(updated)
    saveData(updated, originalPortfolios, processes, pricingPlans, qaItems)
    showToast('作品已刪除', 'success')
  }

  const handleSaveCustomPortfolio = (data) => {
    let updated
    if (editingItem) {
      updated = customPortfolios.map(p => p.id === editingItem.id ? { ...data, id: editingItem.id } : p)
    } else {
      updated = [...customPortfolios, { ...data, id: `custom_${Date.now()}` }]
    }
    setCustomPortfolios(updated)
    saveData(updated, originalPortfolios, processes, pricingPlans, qaItems)
    setEditingItem(null)
    setEditType(null)
    showToast(editingItem ? '作品已更新' : '作品已新增', 'success')
  }

  // 原創主題操作
  const handleAddOriginalPortfolio = () => {
    setEditType('portfolio_original')
    setEditingItem(null)
  }

  const handleEditOriginalPortfolio = (item) => {
    setEditType('portfolio_original')
    setEditingItem(item)
  }

  const handleDeleteOriginalPortfolio = (id) => {
    const updated = originalPortfolios.filter(p => p.id !== id)
    setOriginalPortfolios(updated)
    saveData(customPortfolios, updated, processes, pricingPlans, qaItems)
    showToast('作品已刪除', 'success')
  }

  const handleSaveOriginalPortfolio = (data) => {
    let updated
    if (editingItem) {
      updated = originalPortfolios.map(p => p.id === editingItem.id ? { ...data, id: editingItem.id } : p)
    } else {
      updated = [...originalPortfolios, { ...data, id: `original_${Date.now()}` }]
    }
    setOriginalPortfolios(updated)
    saveData(customPortfolios, updated, processes, pricingPlans, qaItems)
    setEditingItem(null)
    setEditType(null)
    showToast(editingItem ? '作品已更新' : '作品已新增', 'success')
  }

  // 流程操作
  const handleAddProcess = () => {
    setEditType('process')
    setEditingItem(null)
  }

  const handleEditProcess = (item) => {
    setEditType('process')
    setEditingItem(item)
  }

  const handleDeleteProcess = (id) => {
    const updated = processes.filter(p => p.id !== id)
    setProcesses(updated)
    saveData(customPortfolios, originalPortfolios, updated, pricingPlans, qaItems)
    showToast('流程已刪除', 'success')
  }

  const handleSaveProcess = (data) => {
    let updated
    if (editingItem) {
      updated = processes.map(p => p.id === editingItem.id ? { ...data, id: editingItem.id } : p)
    } else {
      updated = [...processes, { ...data, id: `process_${Date.now()}` }]
    }
    setProcesses(updated)
    saveData(customPortfolios, originalPortfolios, updated, pricingPlans, qaItems)
    setEditingItem(null)
    setEditType(null)
    showToast(editingItem ? '流程已更新' : '流程已新增', 'success')
  }

  // 價格方案操作
  const handleEditPricingPlan = (item) => {
    setEditType('pricing')
    setEditingItem(item)
  }

  const handleDeletePricingPlan = (id) => {
    const updated = pricingPlans.filter(p => p.id !== id)
    setPricingPlans(updated)
    saveData(customPortfolios, originalPortfolios, processes, updated, qaItems)
    showToast('方案已刪除', 'success')
  }

  const handleSavePricingPlan = (data) => {
    let updated
    if (editingItem) {
      updated = pricingPlans.map(p => p.id === editingItem.id ? { ...data, id: editingItem.id } : p)
    } else {
      updated = [...pricingPlans, { ...data, id: `price_${Date.now()}` }]
    }
    setPricingPlans(updated)
    saveData(customPortfolios, originalPortfolios, processes, updated, qaItems)
    setEditingItem(null)
    setEditType(null)
    showToast(editingItem ? '方案已更新' : '方案已新增', 'success')
  }

  // Q&A 操作
  const handleAddQA = () => {
    setEditType('qa')
    setEditingItem(null)
  }

  const handleEditQA = (item) => {
    setEditType('qa')
    setEditingItem(item)
  }

  const handleDeleteQA = (id) => {
    const updated = qaItems.filter(q => q.id !== id)
    setQaItems(updated)
    saveData(customPortfolios, originalPortfolios, processes, pricingPlans, updated)
    showToast('問題已刪除', 'success')
  }

  const handleSaveQA = (data) => {
    let updated
    if (editingItem) {
      updated = qaItems.map(q => q.id === editingItem.id ? { ...data, id: editingItem.id } : q)
    } else {
      updated = [...qaItems, { ...data, id: `qa_${Date.now()}` }]
    }
    setQaItems(updated)
    saveData(customPortfolios, originalPortfolios, processes, pricingPlans, updated)
    setEditingItem(null)
    setEditType(null)
    showToast(editingItem ? '問題已更新' : '問題已新增', 'success')
  }

  const handleExportData = () => {
    const data = {
      customPortfolios,
      originalPortfolios,
      processes,
      pricingPlans,
      qaItems,
    }
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `penyfuo-cms-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    showToast('資料已匯出', 'success')
  }

  const handleImportData = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result)
        if (data.customPortfolios && data.originalPortfolios) {
          setCustomPortfolios(data.customPortfolios)
          setOriginalPortfolios(data.originalPortfolios)
          setProcesses(data.processes || [])
          setPricingPlans(data.pricingPlans || [])
          setQaItems(data.qaItems || [])
          saveData(data.customPortfolios, data.originalPortfolios, data.processes || [], data.pricingPlans || [], data.qaItems || [])
          showToast('資料已匯入', 'success')
        } else {
          showToast('檔案格式不正確', 'error')
        }
      } catch (err) {
        showToast('匯入失敗', 'error')
      }
    }
    reader.readAsText(file)
  }

  const showToast = (message, type) => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Header
        isEditMode={isEditMode}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onEditClick={handleEditClick}
        onExitEditMode={handleExitEditMode}
        onExportData={handleExportData}
        onImportData={handleImportData}
      />

      {showPasswordPrompt && (
        <PasswordPrompt
          onSubmit={handlePasswordSubmit}
          onCancel={() => setShowPasswordPrompt(false)}
        />
      )}

      {/* 首頁 */}
      {currentPage === 'home' && <HomePage />}

      {/* 客製化作品集 */}
      {currentPage === 'custom' && (
        <Portfolio
          portfolios={customPortfolios}
          isEditMode={isEditMode}
          onAdd={handleAddCustomPortfolio}
          onEdit={handleEditCustomPortfolio}
          onDelete={handleDeleteCustomPortfolio}
          type="custom"
        />
      )}

      {/* 原創作品集 */}
      {currentPage === 'original' && (
        <Portfolio
          portfolios={originalPortfolios}
          isEditMode={isEditMode}
          onAdd={handleAddOriginalPortfolio}
          onEdit={handleEditOriginalPortfolio}
          onDelete={handleDeleteOriginalPortfolio}
          type="original"
        />
      )}

      {/* 客製化流程 */}
      {currentPage === 'process' && (
        <ProcessSection
          processes={processes}
          isEditMode={isEditMode}
          onAdd={handleAddProcess}
          onEdit={handleEditProcess}
          onDelete={handleDeleteProcess}
        />
      )}

      {/* 常見問題 */}
      {currentPage === 'qa' && (
        <QASection
          qaItems={qaItems}
          isEditMode={isEditMode}
          onAdd={handleAddQA}
          onEdit={handleEditQA}
          onDelete={handleDeleteQA}
        />
      )}

      {/* 價格方案 (在首頁和其他頁面都顯示) */}
      {(currentPage === 'home' || currentPage === 'custom') && (
        <PricingSection
          pricingPlans={pricingPlans}
          isEditMode={isEditMode}
          onEdit={handleEditPricingPlan}
          onDelete={handleDeletePricingPlan}
        />
      )}

      <Footer />

      {editType && (
        <EditModal
          type={editType}
          item={editingItem}
          onSave={
            editType === 'portfolio_custom' ? handleSaveCustomPortfolio :
            editType === 'portfolio_original' ? handleSaveOriginalPortfolio :
            editType === 'process' ? handleSaveProcess :
            editType === 'pricing' ? handleSavePricingPlan :
            handleSaveQA
          }
          onCancel={() => {
            setEditType(null)
            setEditingItem(null)
          }}
          onDelete={
            editType === 'portfolio_custom' ? handleDeleteCustomPortfolio :
            editType === 'portfolio_original' ? handleDeleteOriginalPortfolio :
            editType === 'process' ? handleDeleteProcess :
            editType === 'pricing' ? handleDeletePricingPlan :
            handleDeleteQA
          }
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  )
}

function PasswordPrompt({ onSubmit, onCancel }) {
  const [password, setPassword] = useState('')

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">編輯模式</h2>
        <p className="text-gray-600 mb-4">請輸入編輯密碼</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSubmit(password)}
          placeholder="輸入密碼"
          className="w-full px-4 py-2 border border-pink-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
          autoFocus
        />
        <div className="flex gap-2">
          <button
            onClick={() => onSubmit(password)}
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg hover:shadow-lg transition font-bold"
          >
            確認
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition font-bold"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  )
}
