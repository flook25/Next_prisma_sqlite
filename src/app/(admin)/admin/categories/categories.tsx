"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tags, Plus, Search, Edit, Trash2, Package } from "lucide-react"

function Categories() {
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    {
      id: 1,
      name: "อิเล็กทรอนิกส์",
      description: "อุปกรณ์อิเล็กทรอนิกส์และแกดเจ็ต",
      productCount: 45,
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "อุปกรณ์เสริม",
      description: "อุปกรณ์เสริมคอมพิวเตอร์และมือถือ",
      productCount: 28,
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "เกมมิ่ง",
      description: "อุปกรณ์เกมและอุปกรณ์เสริมสำหรับเกม",
      productCount: 12,
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "เสียง",
      description: "หูฟัง ลำโพง และอุปกรณ์เสียง",
      productCount: 19,
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      name: "จัดเก็บข้อมูล",
      description: "ฮาร์ดไดรฟ์ SSD และอุปกรณ์จัดเก็บข้อมูล",
      productCount: 8,
      color: "bg-red-500",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      name: "สายเคเบิล",
      description: "สายเคเบิลและตัวเชื่อมต่อประเภทต่างๆ",
      productCount: 34,
      color: "bg-teal-500",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
    }
  ]

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">หมวดหมู่สินค้า</h1>
          <p className="text-gray-600 dark:text-gray-400">จัดการหมวดหมู่สินค้าและการจัดระเบียบ</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          เพิ่มหมวดหมู่
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            ค้นหาหมวดหมู่
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="ค้นหาหมวดหมู่..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <Card key={category.id} className="hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute top-3 left-3 w-3 h-3 ${category.color} rounded-full`}></div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{category.name}</h3>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{category.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Package className="h-4 w-4" />
                  <span>{category.productCount} สินค้า</span>
                </div>
                <div className={`w-2 h-2 ${category.color} rounded-full`}></div>
              </div>

              <Button variant="outline" className="w-full mt-3">
                ดูสินค้า
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Tags className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">ไม่พบหมวดหมู่</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              ไม่มีหมวดหมู่ที่ตรงกับเงื่อนไขการค้นหาของคุณ
            </p>
            <Button onClick={() => setSearchTerm("")}>
              ล้างการค้นหา
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">หมวดหมู่ทั้งหมด</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{categories.length}</div>
            <p className="text-sm text-green-600 dark:text-green-400">+2 จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">สินค้าทั้งหมด</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {categories.reduce((sum, cat) => sum + cat.productCount, 0)}
            </div>
            <p className="text-sm text-green-600 dark:text-green-400">+15 จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">เฉลี่ยสินค้า/หมวดหมู่</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {Math.round(categories.reduce((sum, cat) => sum + cat.productCount, 0) / categories.length)}
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400">กระจายตัวดี</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Categories 