import { useState } from 'react'

export default function Portfolio({ portfolios, isEditMode, onAdd, onEdit, onDelete, type = 'custom' }) {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentColorIdx, setCurrentColorIdx] = useState(0)

  const categories = type === 'custom' 
    ? ['全部', '家庭', '寶寶', '情侶', '個人', '寵物', '朋友']
    : ['全部', '動物系列', '人物系列']

  const filtered = selectedCategory === '全部' 
    ? portfolios 
    : portfolios.filter(p => p.category === selectedCategory)

  return (
    <>
      <section id={type === 'custom' ? 'custom-portfolio' : 'original-portfolio'} className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {type === 'custom' ? '客製化作品集' : '原創作品集'}
        </h2>

        {/* 分類篩選 */}
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full transition font-medium ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 作品網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filtered.map(item => (
            <PortfolioCard
              key={item.id}
              item={item}
              isEditMode={isEditMode}
              onView={() => setSelectedItem(item)}
              onEdit={() => onEdit(item)}
              onDelete={() => onDelete(item.id)}
              type={type}
            />
          ))}
          
          {isEditMode && (
            <div
              onClick={onAdd}
              className="border-2 border-dashed border-pink-300 rounded-lg p-6 flex items-center justify-center cursor-pointer hover:border-pink-500 hover:bg-pink-50 transition"
            >
              <div className="text-center">
                <div className="text-4xl text-pink-400 mb-2">+</div>
                <p className="text-pink-600 font-bold">新增作品</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 詳細資訊彈窗 */}
      {selectedItem && (
        <DetailModal
          item={selectedItem}
          onClose={() => {
            setSelectedItem(null)
            setCurrentColorIdx(0)
          }}
          isEditMode={isEditMode}
          onEdit={() => onEdit(selectedItem)}
          onDelete={() => {
            onDelete(selectedItem.id)
            setSelectedItem(null)
          }}
          currentColorIdx={currentColorIdx}
          setCurrentColorIdx={setCurrentColorIdx}
          type={type}
        />
      )}
    </>
  )
}

function PortfolioCard({ item, isEditMode, onView, onEdit, onDelete, type }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer group">
      <div 
        onClick={onView}
        className="bg-gradient-to-br from-pink-200 to-purple-200 h-48 flex items-center justify-center relative overflow-hidden"
      >
        {item.images && item.images.length > 0 ? (
          <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition" />
        ) : (
          <div className="text-center">
            <div className="text-4xl mb-2">🎨</div>
            <p className="text-gray-500">暫無圖片</p>
          </div>
        )}
        
        {/* 顏色變體指示 */}
        {type === 'original' && item.colorVariants && item.colorVariants.length > 0 && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs font-bold">
            {item.colorVariants.length} 種顏色
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-sm text-pink-600 mb-2">{item.category}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        
        <div className="flex gap-2">
          <button
            onClick={onView}
            className="flex-1 px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded hover:shadow-lg transition text-sm font-bold"
          >
            查看詳情
          </button>
          {isEditMode && (
            <>
              <button
                onClick={onEdit}
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
              >
                編輯
              </button>
              <button
                onClick={onDelete}
                className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
              >
                刪除
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function DetailModal({ item, onClose, isEditMode, onEdit, onDelete, currentColorIdx, setCurrentColorIdx, type }) {
  const hasColorVariants = type === 'original' && item.colorVariants && item.colorVariants.length > 0

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-2xl max-h-96 overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-bold text-pink-600">{item.title}</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-pink-600 mb-4 font-bold">{item.category}</p>
        <p className="text-gray-700 mb-6">{item.description}</p>

        {/* 圖片展示 */}
        {item.images && item.images.length > 0 && (
          <div className="mb-6">
            <img src={item.images[0]} alt={item.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            {item.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {item.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${item.title}-${idx}`}
                    className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-75"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* 顏色變體滑動 */}
        {hasColorVariants && (
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">顏色變體</h4>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentColorIdx(Math.max(0, currentColorIdx - 1))}
                disabled={currentColorIdx === 0}
                className="px-3 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
              >
                ◀
              </button>
              
              <div className="flex-1 text-center">
                <p className="font-bold text-gray-800 mb-2">
                  {item.colorVariants[currentColorIdx].name}
                </p>
                <div className="flex gap-2 justify-center">
                  {item.colorVariants[currentColorIdx].colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 rounded-lg shadow-md"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setCurrentColorIdx(Math.min(item.colorVariants.length - 1, currentColorIdx + 1))}
                disabled={currentColorIdx === item.colorVariants.length - 1}
                className="px-3 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
              >
                ▶
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              {currentColorIdx + 1} / {item.colorVariants.length}
            </p>
          </div>
        )}

        {/* 編輯按鈕 */}
        {isEditMode && (
          <div className="flex gap-2 pt-4 border-t">
            <button
              onClick={onEdit}
              className="flex-1 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              編輯
            </button>
            <button
              onClick={onDelete}
              className="flex-1 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              刪除
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-3 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
            >
              關閉
            </button>
          </div>
        )}
        {!isEditMode && (
          <button
            onClick={onClose}
            className="w-full px-3 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
          >
            關閉
          </button>
        )}
      </div>
    </div>
  )
}
