import Link from 'next/link'
import { Button } from '../ui/button'
import { Package2, Mail, Phone, MapPin, Sparkles, Heart, Send } from 'lucide-react'

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-background dark:via-muted dark:to-background border-t border-transparent dark:border-border text-white dark:text-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-primary dark:to-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-purple-400 to-pink-400 dark:from-secondary dark:to-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-primary/50 dark:to-secondary/50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <Package2 className="h-12 w-12 text-blue-400 group-hover:text-purple-400 dark:text-blue-400 dark:group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110" />
                <Sparkles className="h-5 w-5 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <Link 
                href="/" 
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 hover:from-purple-400 hover:via-blue-400 hover:to-purple-300 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 dark:hover:from-purple-400 dark:hover:via-blue-400 dark:hover:to-purple-300 bg-clip-text text-transparent transition-all duration-300"
              >
                Smart Store
              </Link>
            </div>
            <p className="text-gray-300 dark:text-muted-foreground leading-relaxed">
              ระบบจัดการสินค้าคลังสมัยใหม่ที่ช่วยให้ธุรกิจของคุณเติบโตอย่างมั่นคง พร้อมเทคโนโลยีล้ำสมัย
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+66 2-123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-sm">info@smartstore.co.th</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors">
                <MapPin className="h-4 w-4 text-pink-400" />
                <span className="text-sm">Bangkok, Thailand</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400 hover:text-white hover:bg-blue-600/20 dark:text-gray-400 dark:hover:text-white dark:hover:bg-blue-600/20 rounded-xl transition-all duration-300 hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400 hover:text-white hover:bg-purple-600/20 dark:text-gray-400 dark:hover:text-white dark:hover:bg-purple-600/20 rounded-xl transition-all duration-300 hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400 hover:text-white hover:bg-indigo-600/20 dark:text-gray-400 dark:hover:text-white dark:hover:bg-indigo-600/20 rounded-xl transition-all duration-300 hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.219 1.404-5.219s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400 hover:text-white hover:bg-pink-600/20 dark:text-gray-400 dark:hover:text-white dark:hover:bg-pink-600/20 rounded-xl transition-all duration-300 hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white dark:text-white mb-4 relative">
              ลิงก์ด่วน
              <div className="absolute bottom-[-5px] left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-400 group-hover:bg-purple-400 rounded-full transition-colors"></span>
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-400 group-hover:bg-purple-400 rounded-full transition-colors"></span>
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link 
                  href="/service" 
                  className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-400 group-hover:bg-purple-400 rounded-full transition-colors"></span>
                  บริการ
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-blue-400 group-hover:bg-purple-400 rounded-full transition-colors"></span>
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white dark:text-white mb-4 relative">
              บริการของเรา
              <div className="absolute bottom-[-5px] left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-purple-400 group-hover:bg-pink-400 rounded-full transition-colors"></span>
                  จัดการสินค้าคลัง
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-purple-400 group-hover:bg-pink-400 rounded-full transition-colors"></span>
                  ระบบรายงาน
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-purple-400 group-hover:bg-pink-400 rounded-full transition-colors"></span>
                  การวิเคราะห์ข้อมูล
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-purple-400 group-hover:bg-pink-400 rounded-full transition-colors"></span>
                  การปรึกษา
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white dark:text-white mb-4 relative">
              รับข่าวสาร
              <div className="absolute bottom-[-5px] left-0 w-12 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"></div>
            </h3>
            <p className="text-gray-300 dark:text-gray-300">
              สมัครรับข่าวสารและอัปเดตล่าสุดจากเรา เพื่อไม่พลาดความก้าวหน้าใหม่ๆ
            </p>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="กรอกอีเมลของคุณ"
                  className="w-full px-4 py-3 pr-12 text-gray-900 bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 dark:bg-background dark:border dark:border-border dark:focus:ring-primary dark:placeholder:text-muted-foreground dark:text-foreground transition-all duration-300"
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-muted-foreground" />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-primary dark:to-secondary dark:hover:from-primary/90 dark:hover:to-secondary/90 text-white dark:text-primary-foreground font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                สมัครรับข่าวสาร
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 dark:border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-400 flex items-center gap-2">
              © {new Date().getFullYear()} Smart Store. สงวนลิขสิทธิ์ทุกส่วน
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            </div>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-105">
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-105">
                ข้อกำหนดการใช้งาน
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-105">
                นโยบายคุกกี้
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer