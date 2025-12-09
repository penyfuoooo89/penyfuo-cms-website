export default function HomePage() {
  const socialLinks = [
    { icon: '💬', label: '官方 LINE', url: 'https://lin.ee/0IGPAku' },
    { icon: '📷', label: 'Instagram', url: 'https://www.instagram.com/penyfuo89_theme_design?igsh=MWEweDJneDI0cGhrNA==' },
    { icon: '🛍️', label: '蝦皮商城', url: 'https://tw.shp.ee/emSPQ2o' },
    { icon: '🏪', label: 'LINE 商店', url: 'https://store.line.me/themeshop/author/4774442' },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* 關於 Penyfuo */}
      <div className="mb-20">
        <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Penyfuo 客製化主題專區
        </h2>
        
        <p className="text-center text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          歡迎來到 Penyfuo 的創意設計世界。我們專注於為您打造獨特的 LINE 主題設計，無論是溫暖的家庭主題、甜蜜的情侶主題，還是充滿創意的原創設計，都能滿足您對個性化的追求。
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">關於 Penyfuo</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Penyfuo 是一個專注於 LINE 主題客製化設計的創意工作室。我們深入理解每位客戶的獨特需求，透過精心的設計與細緻的執行，將您的想法轉化為視覺藝術。從溫暖的家庭主題到浪漫的情侶設計，從可愛的寶寶主題到個性十足的原創作品，我們致力於為每位客戶創造一個專屬的 LINE 主題體驗。
          </p>
          <p className="text-gray-700 leading-relaxed">
            我們的設計團隊擁有豐富的創意經驗，不僅關注視覺美感，更重視用戶體驗。每一個設計細節都經過精心考慮，確保您的 LINE 主題既美觀又易用。無論您是想要一個溫馨的家庭主題，還是一個獨特的個人設計，Penyfuo 都能為您提供專業的解決方案。
          </p>
        </div>
      </div>

      {/* 社群連結 */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">追蹤我們</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{link.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{link.label}</h4>
              <p className="text-gray-600 text-sm">
                {link.label === '官方 LINE' && '直接聯繫我們'}
                {link.label === 'Instagram' && '最新作品分享'}
                {link.label === '蝦皮商城' && '購買我們的作品'}
                {link.label === 'LINE 商店' && '官方主題商店'}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
