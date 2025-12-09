import { useState, useEffect } from 'react'

export default function EditModal({ type, item, onSave, onCancel, onDelete }) {
  const [formData, setFormData] = useState({
    title: '',
    category: '家庭',
    description: '',
    question: '',
    answer: '',
    images: [],
    colorVariants: [],
    step: 1,
    details: '',
    name: '',
    price: '',
    currency: '$',
    features: [],
    highlighted: false,
  })

  const [deleteMode, setDeleteMode] = useState(false)
  const [hideMode, setHideMode] = useState(false)

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      setFormData(item)
    }
  }, [item])

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: inputType === 'checkbox' ? checked : value
    }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          images: [...(prev.images || []), event.target.result]
        }))
      }
      reader.readAsDataURL(file)
    })
  }

  const handleRemoveImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const handleAddFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...(prev.features || []), '']
    }))
  }

  const handleRemoveFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }))
  }

  const handleFeatureChange = (index, value) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.map((f, i) => i === index ? value : f)
    }))
  }

  const handleAddColorVariant = () => {
    setFormData(prev => ({
      ...prev,
      colorVariants: [...(prev.colorVariants || []), { name: '', colors: [] }]
    }))
  }

  const handleRemoveColorVariant = (index) => {
    setFormData(prev => ({
      ...prev,
      colorVariants: prev.colorVariants.filter((_, i) => i !== index)
    }))
  }

  const handleColorVariantChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      colorVariants: prev.colorVariants.map((cv, i) => 
        i === index ? { ...cv, [field]: value } : cv
      )
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleDelete = () => {
    if (deleteMode && onDelete) {
      onDelete(formData.id)
    }
  }

  const handleHide = () => {
    if (hideMode) {
      onSave({ ...formData, hidden: true })
    }
  }

  const customCategories = ['家庭', '寶寶', '情侶', '個人', '寵物', '朋友']
  const originalCategories = ['動物系列', '人物系列']
  const categories = type === 'portfolio_custom' ? customCategories : 
                     type === 'portfolio_original' ? originalCategories : []

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-96 overflow-y-auto">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">
          {type.includes('portfolio') ? (item?.id ? '編輯作品' : '新增作品') :
           type === 'process' ? (item?.id ? '編輯流程' : '新增流程') :
           type === 'pricing' ? (item?.id ? '編輯價格方案' : '新增價格方案') :
           (item?.id ? '編輯問題' : '新增問題')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 作品集編輯 */}
          {type.includes('portfolio') && (
            <>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">作品名稱</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">分類</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  {categories.map(cat => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">描述</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows="3"
                />
              </div>

              {/* 圖片上傳 */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">上傳圖片</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full"
                />
                {formData.images && formData.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {formData.images.map((img, idx) => (
                      <div key={idx} className="relative">
                        <img src={img} alt={`preview-${idx}`} className="w-full h-20 object-cover rounded" />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(idx)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 原創主題的顏色變體 */}
              {type === 'portfolio_original' && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">顏色變體</label>
                  {formData.colorVariants && formData.colorVariants.map((variant, idx) => (
                    <div key={idx} className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-gray-700">變體 {idx + 1}</h4>
                        <button
                          type="button"
                          onClick={() => handleRemoveColorVariant(idx)}
                          className="text-red-500 hover:text-red-700 font-bold"
                        >
                          刪除
                        </button>
                      </div>
                      <input
                        type="text"
                        placeholder="顏色名稱"
                        value={variant.name}
                        onChange={(e) => handleColorVariantChange(idx, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
                      />
                      <input
                        type="text"
                        placeholder="顏色代碼 (逗號分隔，如 #FF1493,#FFB6C1)"
                        value={variant.colors.join(',')}
                        onChange={(e) => handleColorVariantChange(idx, 'colors', e.target.value.split(',').map(c => c.trim()))}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddColorVariant}
                    className="w-full py-2 border-2 border-dashed border-pink-300 rounded text-pink-600 font-bold hover:bg-pink-50"
                  >
                    + 新增顏色變體
                  </button>
                </div>
              )}
            </>
          )}

          {/* 流程編輯 */}
          {type === 'process' && (
            <>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">步驟編號</label>
                <input
                  type="number"
                  name="step"
                  value={formData.step}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">標題</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">簡短描述</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">詳細說明</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows="4"
                />
              </div>
            </>
          )}

          {/* 價格方案編輯 */}
          {type === 'pricing' && (
            <>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">方案名稱</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">價格</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">貨幣符號</label>
                  <input
                    type="text"
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <input
                    type="checkbox"
                    name="highlighted"
                    checked={formData.highlighted}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  推薦方案
                </label>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">功能特性</label>
                {formData.features && formData.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(idx, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded"
                      placeholder="功能說明"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(idx)}
                      className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      刪除
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddFeature}
                  className="w-full py-2 border-2 border-dashed border-pink-300 rounded text-pink-600 font-bold hover:bg-pink-50"
                >
                  + 新增功能
                </button>
              </div>
            </>
          )}

          {/* Q&A 編輯 */}
          {type === 'qa' && (
            <>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">問題</label>
                <input
                  type="text"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">答案</label>
                <textarea
                  name="answer"
                  value={formData.answer}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows="4"
                  required
                />
              </div>
            </>
          )}

          {/* 操作按鈕 */}
          <div className="flex gap-2 pt-4 border-t">
            <button
              type="submit"
              className="flex-1 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition font-bold"
            >
              保存
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition font-bold"
            >
              取消
            </button>
            {item?.id && onDelete && (
              <>
                <button
                  type="button"
                  onClick={() => setDeleteMode(!deleteMode)}
                  className={`flex-1 py-2 rounded-lg transition font-bold ${
                    deleteMode ? 'bg-red-600 text-white' : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                >
                  {deleteMode ? '確認刪除' : '刪除'}
                </button>
                <button
                  type="button"
                  onClick={() => setHideMode(!hideMode)}
                  className={`flex-1 py-2 rounded-lg transition font-bold ${
                    hideMode ? 'bg-yellow-600 text-white' : 'bg-yellow-500 text-white hover:bg-yellow-600'
                  }`}
                >
                  {hideMode ? '確認隱藏' : '隱藏'}
                </button>
              </>
            )}
          </div>

          {deleteMode && (
            <div className="p-4 bg-red-50 border border-red-300 rounded-lg">
              <p className="text-red-700 font-bold mb-2">⚠️ 確定要刪除嗎？此操作無法撤銷。</p>
              <button
                type="button"
                onClick={handleDelete}
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 font-bold"
              >
                確認永久刪除
              </button>
            </div>
          )}

          {hideMode && (
            <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
              <p className="text-yellow-700 font-bold mb-2">⚠️ 隱藏後，此項目將不會顯示在網站上，但資料會保留。</p>
              <button
                type="button"
                onClick={handleHide}
                className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 font-bold"
              >
                確認隱藏
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
