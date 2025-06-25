"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Plus, Search, Filter, Edit, Trash2, Eye, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function Products() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "อิเล็กทรอนิกส์",
      price: 39900,
      stock: 45,
      minStock: 10,
      status: "มีสินค้า",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop",
      sku: "IPH15PRO001"
    },
    {
      id: 2,
      name: "MacBook Air M2",
      category: "อิเล็กทรอนิกส์",
      price: 34900,
      stock: 5,
      minStock: 10,
      status: "สต็อกต่ำ",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
      sku: "MBA-M2-001"
    },
    {
      id: 3,
      name: "Gaming Mouse",
      category: "อุปกรณ์เสริม",
      price: 2500,
      stock: 3,
      minStock: 15,
      status: "สต็อกต่ำ",
      image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=300&h=300&fit=crop",
      sku: "GMOUSE001"
    },
    {
      id: 4,
      name: "Wireless Headphones",
      category: "อุปกรณ์เสริม",
      price: 4500,
      stock: 120,
      minStock: 20,
      status: "มีสินค้า",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      sku: "WHEADP001"
    },
    {
      id: 5,
      name: "USB-C Cable",
      category: "อุปกรณ์เสริม",
      price: 890,
      stock: 8,
      minStock: 20,
      status: "สต็อกต่ำ",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      sku: "USBCABLE01"
    },
    {
      id: 6,
      name: "Samsung Galaxy S24",
      category: "อิเล็กทรอนิกส์",
      price: 28900,
      stock: 75,
      minStock: 15,
      status: "มีสินค้า",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
      sku: "SGS24001"
    }
  ]

  const categories = ["all", "อิเล็กทรอนิกส์", "อุปกรณ์เสริม"]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "มีสินค้า":
        return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border-green-200 dark:border-green-700"
      case "สต็อกต่ำ":
        return "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 border-orange-200 dark:border-orange-700"
      case "หมดสต็อก":
        return "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border-red-200 dark:border-red-700"
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-600"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">จัดการสินค้า</h1>
          <p className="text-gray-600 dark:text-gray-400">จัดการสินค้าในคลัง ติดตามระดับสต็อก และอัปเดตข้อมูลสินค้าอย่างมีประสิทธิภาพ</p>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            เพิ่มสินค้า
          </Button>
          <Button variant="outline" className="gap-2">
            <Package className="h-4 w-4" />
            นำเข้า
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-green-600 dark:text-green-400" />
            กรองและค้นหาสินค้า
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="ค้นหาสินค้าตามชื่อหรือรหัส SKU..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "all" ? "ทุกหมวดหมู่" : category}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow overflow-hidden">
            <div className="aspect-square relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="h-8 w-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      ดูรายละเอียด
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      แก้ไขสินค้า
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600 dark:text-red-400">
                      <Trash2 className="mr-2 h-4 w-4" />
                      ลบสินค้า
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-2">
                  {product.name}
                </h3>
                <span className={`px-2 py-1 text-xs font-medium border rounded-full ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">รหัส: {product.sku}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{product.category}</p>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  ฿{product.price.toLocaleString()}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">สต็อก:</span>
                  <span className={`font-medium ${product.stock <= product.minStock ? 'text-orange-600 dark:text-orange-400' : 'text-green-600 dark:text-green-400'}`}>
                    {product.stock} ชิ้น
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">สต็อกขั้นต่ำ:</span>
                  <span className="text-gray-900 dark:text-white">{product.minStock} ชิ้น</span>
                </div>
                
                {/* Stock Level Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      product.stock <= product.minStock ? 'bg-orange-500' : 'bg-green-500'
                    }`}
                    style={{ 
                      width: `${Math.min((product.stock / (product.minStock * 2)) * 100, 100)}%` 
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="mr-1 h-3 w-3" />
                  แก้ไข
                </Button>
                <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                  <Eye className="mr-1 h-3 w-3" />
                  ดู
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Package className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">ไม่พบสินค้า</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              ไม่มีสินค้าที่ตรงกับเงื่อนไขการค้นหาของคุณ
            </p>
            <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all") }}>
              ล้างตัวกรอง
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Products