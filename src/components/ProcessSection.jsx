import { useState } from 'react'

export default function ProcessSection({ processes, isEditMode, onAdd, onEdit, onDelete }) {
  const [expandedId, setExpandedId] = useState(null)

  const defaultProcesses = [
    {
      id: 'process_1',
      step: 1,
      title: '選擇方案',
      description: '選擇適合您的客製化方案（簡款、進階款、全能款）',
      details: '根據您的需求和預算，選擇最適合的方案。我們提供三種不同的套餐選項，每個方案都包含不同的功能和服務。',
    },
    {
      id: 'process_2',
      step: 2,
      title: '提供素材',
      description: '提供您想要的圖片、顏色、主題等素材',
      details: '請準備好您想要在主題中使用的所有素材，包括照片、顏色偏好、設計風格等。我們會根據您提供的素材進行設計。',
    },
    {
      id: 'process_3',
      step: 3,
      title: '初稿設計',
      description: '我們進行初步設計並提供給您預覽',
      details: '設計團隊會根據您的需求進行初步設計，並在 3-5 個工作天內提供初稿供您預覽。',
    },
    {
      id: 'process_4',
      step: 4,
      title: '修改調整',
      description: '根據您的反饋進行修改和調整',
      details: '根據您的意見，我們會進行必要的修改和調整。每個方案都包含一定次數的免費修改。',
    },
    {
      id: 'process_5',
      step: 5,
      title: '最終確認',
      description: '確認最終設計並進行最後的調整',
      details: '在您確認滿意後，我們會進行最後的細節調整，確保完美呈現。',
    },
    {
      id: 'process_6',
      step: 6,
      title: '製作完成',
      description: '完成主題製作並提供最終文件',
      details: '主題製作完成後，我們會提供您最終的主題文件和使用說明。',
    },
    {
      id: 'process_7',
      step: 7,
      title: '上架發佈',
      description: '將主題上架到 LINE STORE 或其他平台',
      details: '根據您的需求，我們可以幫您將主題上架到 LINE STORE 或其他銷售平台。',
    },
    {
      id: 'process_8',
      step: 8,
      title: '售後服務',
      description: '提供持續的售後支持和維護服務',
      details: '完成後，我們提供 30 天的免費售後服務，解答您的任何問題。',
    },
  ]

  const displayProcesses = processes && processes.length > 0 ? processes : defaultProcesses

  return (
    <section id="process" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">客製化流程</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayProcesses.map(process => (
          <ProcessCard
            key={process.id}
            process={process}
            isExpanded={expandedId === process.id}
            onToggle={() => setExpandedId(expandedId === process.id ? null : process.id)}
            isEditMode={isEditMode}
            onEdit={() => onEdit(process)}
            onDelete={() => onDelete(process.id)}
          />
        ))}
      </div>

      {isEditMode && (
        <button
          onClick={onAdd}
          className="w-full mt-8 py-4 border-2 border-dashed border-pink-300 rounded-lg text-pink-600 font-bold hover:border-pink-500 hover:bg-pink-50 transition"
        >
          + 新增流程步驟
        </button>
      )}
    </section>
  )
}

function ProcessCard({ process, isExpanded, onToggle, isEditMode, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-gradient-to-b from-pink-500 to-purple-500">
      <div
        onClick={onToggle}
        className="p-6 cursor-pointer hover:bg-pink-50 transition"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              {process.step}
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800">{process.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{process.description}</p>
            </div>
          </div>
          <span className={`text-pink-600 transition text-xl ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
        </div>
      </div>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
          <p className="text-gray-700 mb-4 leading-relaxed">{process.details}</p>
          {isEditMode && (
            <div className="flex gap-2">
              <button
                onClick={onEdit}
                className="flex-1 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
              >
                編輯
              </button>
              <button
                onClick={onDelete}
                className="flex-1 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
              >
                刪除
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
