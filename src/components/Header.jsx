import { useState } from 'react'

export default function Header({ isEditMode, currentPage, onNavigate, onEditClick, onExitEditMode, onExportData, onImportData }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'custom', label: '客製化作品集' },
    { id: 'original', label: '原創作品集' },
    { id: 'process', label: '客製化流程' },
    { id: 'qa', label: '常見問題' },
  ]

  const socialLinks = [
    { icon: '💬', label: 'LINE', url: 'https://lin.ee/0IGPAku' },
    { icon: '📷', label: 'Instagram', url: 'https://www.instagram.com/penyfuo89_theme_design?igsh=MWEweDJneDI0cGhrNA==' },
    { icon: '🛍️', label: '蝦皮', url: 'https://tw.shp.ee/emSPQ2o' },
    { icon: '🏪', label: 'LINE商店', url: 'https://store.line.me/themeshop/author/4774442' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* 主導航欄 */}
        <div className="flex items-center justify-between mb-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Penyfuo
            </h1>
            {isEditMode && (
              <span className="px-3 py-1 bg-pink-100 text-pink-600 text-sm font-bold rounded-full">
                ✏️ 編輯中
              </span>
            )}
          </div>

          {/* 社群連結 (桌面版) */}
          <div className="hidden md:flex gap-3 items-center">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white flex items-center justify-center hover:shadow-lg transition transform hover:scale-110"
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* 編輯按鈕 */}
          <div className="flex gap-2 items-center">
            {isEditMode && (
              <>
                <button
                  onClick={onExportData}
                  className="px-3 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  title="匯出資料"
                >
                  📥 匯出
                </button>
                <label className="px-3 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition cursor-pointer" title="匯入資料">
                  📤 匯入
                  <input
                    type="file"
                    accept=".json"
                    onChange={onImportData}
                    className="hidden"
                  />
                </label>
                <button
                  onClick={onExitEditMode}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition font-bold"
                >
                  退出編輯
                </button>
              </>
            )}
            {!isEditMode && (
              <button
                onClick={onEditClick}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded hover:shadow-lg transition font-bold"
              >
                🔐 編輯
              </button>
            )}
          </div>
        </div>

        {/* 導航菜單 */}
        <nav className="flex gap-2 justify-center flex-wrap">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id)
                setMobileMenuOpen(false)
              }}
              className={`px-4 py-2 rounded-full transition font-medium ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => window.open('https://lin.ee/0IGPAku', '_blank')}
            className="px-4 py-2 rounded-full transition font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg"
          >
            💬 我要客製化
          </button>
        </nav>
      </div>
    </header>
  )
}
