import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Package2, Home, Package, Tags, BarChart3, FileText, Settings, X, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AdminSidebarProps {
  onClose?: () => void
}

function AdminSidebar({ onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'แดชบอร์ด', href: '/admin/dashboard', icon: Home },
    { name: 'สินค้า', href: '/admin/products', icon: Package },
    { name: 'หมวดหมู่', href: '/admin/categories', icon: Tags },
    { name: 'สต็อก', href: '/admin/stock', icon: BarChart3 },
    { name: 'รายงาน', href: '/admin/reports', icon: FileText },
    { name: 'ตั้งค่า', href: '/admin/settings', icon: Settings },
  ]

  // ฟังก์ชันตรวจสอบว่าเมนูนั้นเป็น active หรือไม่
  const isActive = (href: string) => {
    return pathname === href
  }

  // ฟังก์ชันสำหรับออกจากระบบ
  const handleLogout = async () => {
    try {
      window.location.href = '/login'
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div className="flex h-full flex-col bg-background/90 backdrop-blur-sm border-r border-border/30">
      {/* Header */}
              <div className="flex h-16 items-center justify-between px-6 border-b border-border/30">
        <div className="flex items-center gap-2">
          <Package2 className="h-8 w-8 text-blue-600" />
          <span className="text-lg font-bold text-foreground">จัดการคลังสินค้า</span>
        </div>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
              onClick={onClose}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
              <div className="p-4 border-t border-border/30">
                  <Button onClick={handleLogout} variant="ghost" className="w-full justify-start gap-3 text-destructive hover:bg-destructive/10 hover:text-destructive">
          <LogOut className="h-5 w-5" />
          ออกจากระบบ
        </Button>
      </div>
    </div>
  )
}

export default AdminSidebar