export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Penyfuo</h3>
            <p className="text-gray-400">打造您專屬的可愛主題</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">官方連結</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://lin.ee/0IGPAku" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">LINE 官方帳號</a></li>
              <li><a href="https://www.instagram.com/penyfuo89_theme_design" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">Instagram</a></li>
              <li><a href="https://tw.shp.ee/emSPQ2o" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">蝦皮商城</a></li>
              <li><a href="https://store.line.me/themeshop/author/4774442" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">LINE 商店</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">服務</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#portfolio" className="hover:text-pink-400 transition">客製化主題</a></li>
              <li><a href="#qa" className="hover:text-pink-400 transition">常見問題</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">聯絡方式</h4>
            <p className="text-gray-400">透過 LINE 官方帳號聯絡我們</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Penyfuo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
