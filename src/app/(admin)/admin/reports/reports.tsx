"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Package, 
  DollarSign,
  Download,
  Filter,
  Eye,
  FileText,
  PieChart,
  Activity
} from 'lucide-react'

function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  // Mock data for reports
  const reportStats = [
    {
      title: 'ยอดขายรวม',
      value: '฿2,450,000',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    },
    {
      title: 'สินค้าขายดี',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'สินค้าคงคลัง',
      value: '5,678',
      change: '-3.1%',
      trend: 'down',
      icon: Package,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30'
    },
    {
      title: 'อัตราการหมุนเวียน',
      value: '85%',
      change: '+5.7%',
      trend: 'up',
      icon: Activity,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    }
  ]

  const reportTypes = [
    {
      title: 'รายงานยอดขาย',
      description: 'สรุปยอดขายรายวัน รายเดือน และรายปี',
      icon: BarChart3,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700'
    },
    {
      title: 'รายงานสินค้าคงคลัง',
      description: 'ติดตามสถานะสินค้าคงคลังและการเคลื่อนไหว',
      icon: Package,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-700'
    },
    {
      title: 'รายงานสินค้าขายดี',
      description: 'วิเคราะห์สินค้าที่มียอดขายสูงสุด',
      icon: TrendingUp,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700'
    },
    {
      title: 'รายงานการเงิน',
      description: 'สรุปรายรับ รายจ่าย และกำไรขาดทุน',
      icon: DollarSign,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-700'
    },
    {
      title: 'รายงานการวิเคราะห์',
      description: 'วิเคราะห์แนวโน้มและพยากรณ์ยอดขาย',
      icon: PieChart,
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-700'
    },
    {
      title: 'รายงานกิจกรรม',
      description: 'ติดตามกิจกรรมและการใช้งานระบบ',
      icon: Activity,
      color: 'text-pink-600 dark:text-pink-400',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      borderColor: 'border-pink-200 dark:border-pink-700'
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">รายงาน</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">ติดตามและวิเคราะห์ข้อมูลธุรกิจของคุณ</p>
        </div>
        
        <div className="flex gap-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="week">สัปดาห์นี้</option>
            <option value="month">เดือนนี้</option>
            <option value="quarter">ไตรมาสนี้</option>
            <option value="year">ปีนี้</option>
          </select>
          
          <Button variant="outline" className="gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Filter className="h-4 w-4" />
            ตัวกรอง
          </Button>
          
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600">
            <Download className="h-4 w-4" />
            ส่งออก
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportStats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      {stat.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400 mr-1" />
                      )}
                      <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Report Types */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">ประเภทรายงาน</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportTypes.map((report, index) => {
            const IconComponent = report.icon
            return (
              <Card key={index} className={`hover:shadow-lg dark:hover:shadow-gray-700/50 transition-all duration-300 border-2 ${report.borderColor} ${report.bgColor} hover:scale-105`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700`}>
                      <IconComponent className={`h-5 w-5 ${report.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900 dark:text-white">{report.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                    {report.description}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <Eye className="h-4 w-4" />
                      ดูรายงาน
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <Download className="h-4 w-4" />
                      ดาวน์โหลด
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Recent Reports */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-gray-900 dark:text-white">รายงานล่าสุด</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">รายงานที่สร้างเมื่อเร็วๆ นี้</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              ดูทั้งหมด
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'รายงานยอดขายประจำเดือน', date: '15 ม.ค. 2024', size: '2.4 MB', type: 'PDF' },
              { name: 'รายงานสินค้าคงคลัง', date: '14 ม.ค. 2024', size: '1.8 MB', type: 'Excel' },
              { name: 'รายงานสินค้าขายดี Q4', date: '10 ม.ค. 2024', size: '3.2 MB', type: 'PDF' },
              { name: 'รายงานการเงินรายไตรมาส', date: '8 ม.ค. 2024', size: '4.1 MB', type: 'PDF' }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{report.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{report.date} • {report.size} • {report.type}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Eye className="h-4 w-4" />
                    ดู
                  </Button>
                  <Button size="sm" variant="ghost" className="gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Download className="h-4 w-4" />
                    ดาวน์โหลด
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Reports