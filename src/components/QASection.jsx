import { useState } from 'react'

export default function QASection({ qaItems, isEditMode, onAdd, onEdit, onDelete }) {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section id="qa" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">常見問題</h2>

      <div className="space-y-4">
        {qaItems.map(item => (
          <QAItem
            key={item.id}
            item={item}
            isExpanded={expandedId === item.id}
            onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
            isEditMode={isEditMode}
            onEdit={() => onEdit(item)}
            onDelete={() => onDelete(item.id)}
          />
        ))}

        {isEditMode && (
          <button
            onClick={onAdd}
            className="w-full py-4 border-2 border-dashed border-pink-300 rounded-lg text-pink-600 font-bold hover:border-pink-500 hover:bg-pink-50 transition"
          >
            + 新增問題
          </button>
        )}
      </div>
    </section>
  )
}

function QAItem({ item, isExpanded, onToggle, isEditMode, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        onClick={onToggle}
        className="p-4 cursor-pointer hover:bg-pink-50 transition flex items-center justify-between"
      >
        <h3 className="font-bold text-gray-800">{item.question}</h3>
        <span className={`text-pink-600 transition ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-200">
          <p className="text-gray-600 mb-4">{item.answer}</p>
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
