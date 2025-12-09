import { useState } from 'react'

export default function PricingSection({ pricingPlans, isEditMode, onEdit, onDelete }) {
  const defaultPlans = [
    {
      id: 'price_1',
      name: '簡款',
      price: 300,
      currency: '$',
      features: [
        '設計片（基本主題風格）',
        '三種色號',
        '主題風格圖×5張',
        '客製風格圖×4張（二選一）',
      ],
      highlighted: false,
    },
    {
      id: 'price_2',
      name: '進階款',
      price: 450,
      currency: '$',
      features: [
        '設計片（基本主題風格）',
        '進階色◆無天數（二選一）',
        '主題風格圖×5張',
        '客製風格圖×4張（二選一）',
      ],
      highlighted: true,
    },
    {
      id: 'price_3',
      name: '全能款/至尊款',
      price: '700~750',
      currency: '$',
      features: [
        '設計片（基本主題風格）',
        '主題風格圖×4張&5張',
        '客製風格圖×4張&5張',
        '動片呈現',
        '主題橫幅&4&8張',
      ],
      highlighted: false,
    },
  ]

  const displayPlans = pricingPlans && pricingPlans.length > 0 ? pricingPlans : defaultPlans

  return (
    <section id="pricing" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">我要客製化</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {displayPlans.map(plan => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isEditMode={isEditMode}
            onEdit={() => onEdit(plan)}
            onDelete={() => onDelete(plan.id)}
          />
        ))}
      </div>

      {isEditMode && (
        <button
          onClick={() => onEdit({})}
          className="w-full py-4 border-2 border-dashed border-pink-300 rounded-lg text-pink-600 font-bold hover:border-pink-500 hover:bg-pink-50 transition"
        >
          + 新增價格方案
        </button>
      )}
    </section>
  )
}

function PricingCard({ plan, isEditMode, onEdit, onDelete }) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 ${
      plan.highlighted ? 'ring-2 ring-pink-500 relative' : ''
    }`}>
      {plan.highlighted && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-bl-lg font-bold text-sm">
          推薦
        </div>
      )}
      
      <div className={`p-8 ${plan.highlighted ? 'bg-gradient-to-br from-pink-50 to-purple-50' : 'bg-white'}`}>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-pink-600">{plan.price}</span>
          <span className="text-gray-600 ml-2">{plan.currency}</span>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features && plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-pink-500 font-bold mt-1">●</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => window.open('https://lin.ee/0IGPAku', '_blank')}
          className={`w-full py-3 rounded-lg font-bold transition ${
            plan.highlighted
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          想了解
        </button>

        {isEditMode && (
          <div className="flex gap-2 mt-4">
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
    </div>
  )
}
