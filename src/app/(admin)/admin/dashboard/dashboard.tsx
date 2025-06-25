import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, ShoppingCart, TrendingUp, AlertTriangle} from "lucide-react"

function Dashboard() {
  const stats = [
    {
      title: "สินค้าทั้งหมด",
      value: "1,234",
      change: "+12%",
      changeType: "positive",
      icon: Package,
      description: "จากเดือนที่แล้ว"
    },
    {
      title: "สินค้าสต็อกต่ำ",
      value: "23",
      change: "-5%",
      changeType: "negative",
      icon: AlertTriangle,
      description: "ต้องการความสนใจ"
    },
    {
      title: "หมวดหมู่",
      value: "15",
      change: "+2",
      changeType: "positive",
      icon: ShoppingCart,
      description: "หมวดหมู่ที่ใช้งาน"
    },
    {
      title: "มูลค่ารวม",
      value: "฿2,450,000",
      change: "+8.5%",
      changeType: "positive",
      icon: TrendingUp,
      description: "มูลค่าสินค้าคงคลัง"
    }
  ]

  const recentActivity = [
    { action: "เพิ่ม", item: "iPhone 15 Pro", quantity: 50, time: "2 ชั่วโมงที่แล้ว" },
    { action: "อัปเดต", item: "Samsung Galaxy S24", quantity: 25, time: "4 ชั่วโมงที่แล้ว" },
    { action: "ลบ", item: "โน้ตบุ๊กรุ่นเก่า", quantity: 10, time: "6 ชั่วโมงที่แล้ว" },
    { action: "เพิ่ม", item: "หูฟังไร้สาย", quantity: 100, time: "1 วันที่แล้ว" },
  ]

  const lowStockItems = [
    { name: "MacBook Air M2", current: 5, minimum: 10, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop" },
    { name: "Gaming Mouse", current: 3, minimum: 15, image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=100&h=100&fit=crop" },
    { name: "USB-C Cable", current: 8, minimum: 20, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </CardTitle>
                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              กิจกรรมล่าสุด
            </CardTitle>
            <CardDescription>
              การอัปเดตและการเปลี่ยนแปลงสินค้าคงคลังล่าสุด
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.action === 'เพิ่ม' ? 'bg-green-500' :
                      activity.action === 'อัปเดต' ? 'bg-blue-500' : 'bg-red-500'
                    }`}></div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {activity.action} {activity.item}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        จำนวน: {activity.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              แจ้งเตือนสต็อกต่ำ
            </CardTitle>
            <CardDescription>
              สินค้าที่ต้องการความสนใจเร่งด่วน
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      ปัจจุบัน: <span className="font-medium text-orange-600 dark:text-orange-400">{item.current}</span> | 
                      ขั้นต่ำ: <span className="font-medium">{item.minimum}</span>
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/30">
                    เติมสต็อก
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>การดำเนินการด่วน</CardTitle>
          <CardDescription>
            การดำเนินการที่ใช้บ่อยสำหรับการจัดการสินค้าคงคลัง
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Package className="h-6 w-6" />
              เพิ่มสินค้า
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <ShoppingCart className="h-6 w-6" />
              หมวดหมู่ใหม่
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <TrendingUp className="h-6 w-6" />
              รายงานสต็อก
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <AlertTriangle className="h-6 w-6" />
              ตรวจสอบแจ้งเตือน
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard 