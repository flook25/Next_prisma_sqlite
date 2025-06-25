"use client"

import { useState, useEffect } from 'react'
import { useStock } from '@/hooks/useStock'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  RefreshCw,
  Download,
  Upload,
  CheckCircle,
  XCircle,
} from 'lucide-react'

function Stock() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [stockFilter, setStockFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [isSearching, setIsSearching] = useState(false)
  const itemsPerPage = 5

  // ใช้ useStock hook
  const { 
    items: stockItems, 
    overview, 
    loading, 
    error, 
    pagination,
    fetchItems, 
    fetchOverview,
    refresh,
    clearError
  } = useStock()

  // ดึงข้อมูลเมื่อ component mount
  useEffect(() => {
    fetchOverview()
    fetchItems({
      page: currentPage,
      limit: itemsPerPage
    })
  }, [fetchOverview, fetchItems, currentPage, itemsPerPage])

  // Reset pagination เมื่อเปลี่ยน filters
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, stockFilter])

  // ดึงข้อมูลใหม่เมื่อ filters เปลี่ยน (เพิ่ม debounce ให้ search)
  useEffect(() => {
    // แสดง loading เมื่อกำลังค้นหา
    if (searchTerm) {
      setIsSearching(true)
    }

    const delayedSearch = setTimeout(async () => {
      await fetchItems({
        search: searchTerm || undefined,
        category: selectedCategory === 'all' ? undefined : selectedCategory,
        status: stockFilter === 'all' ? undefined : stockFilter,
        page: currentPage,
        limit: itemsPerPage
      })
      setIsSearching(false)
    }, searchTerm ? 800 : 100) // Search ใช้ 800ms, filter อื่นใช้ 100ms

    return () => {
      clearTimeout(delayedSearch)
      setIsSearching(false)
    }
  }, [searchTerm, selectedCategory, stockFilter, currentPage, fetchItems, itemsPerPage])

  // สร้าง stock overview จากข้อมูล API
  const stockOverview = overview ? [
    {
      title: 'สินค้าทั้งหมด',
      value: overview.totalItems.toString(),
      change: '+3',
      trend: 'up' as const,
      icon: Package,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'สินค้าใกล้หมด',
      value: overview.lowStockItems.toString(),
      change: '+1',
      trend: 'up' as const,
      icon: AlertTriangle,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30'
    },
    {
      title: 'สินค้าหมด',
      value: overview.outOfStockItems.toString(),
      change: '-1',
      trend: 'down' as const,
      icon: XCircle,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30'
    },
    {
      title: 'มูลค่าสต็อก',
      value: '฿' + (overview.totalValue / 1000000).toFixed(1) + 'M',
      change: '+12.5%',
      trend: 'up' as const,
      icon: BarChart3,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    }
  ] : []

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in_stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
            <CheckCircle className="h-3 w-3" />
            มีสินค้า
          </span>
        )
      case 'low_stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400">
            <AlertTriangle className="h-3 w-3" />
            ใกล้หมด
          </span>
        )
      case 'out_of_stock':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">
            <XCircle className="h-3 w-3" />
            หมดสต็อก
          </span>
        )
      default:
        return null
    }
  }

  const getStockLevel = (current: number, max: number) => {
    const percentage = (current / max) * 100
    let color = 'bg-green-500'
    if (percentage < 20) color = 'bg-red-500'
    else if (percentage < 40) color = 'bg-orange-500'
    
    return (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${color}`} 
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    )
  }

  // ฟังก์ชันรีเฟรชข้อมูล
  const handleRefresh = () => {
    refresh()
  }

  // ฟังก์ชันเปลี่ยนหน้า
  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < pagination.totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // แสดง loading state
  if (loading && stockItems.length === 0) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600 dark:text-gray-400">กำลังโหลดข้อมูล...</span>
        </div>
      </div>
    )
  }

  // แสดง error state
  if (error) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
            <Button onClick={handleRefresh}>ลองใหม่</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">จัดการสต็อก</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">ติดตามและจัดการสินค้าคงคลัง</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 min-h-[44px]" aria-label="นำเข้าข้อมูลสินค้า">
            <Upload className="h-4 w-4" aria-hidden="true" />
            นำเข้า
          </Button>
          
          <Button variant="outline" className="gap-2 min-h-[44px]" aria-label="ส่งออกข้อมูลสินค้า">
            <Download className="h-4 w-4" aria-hidden="true" />
            ส่งออก
          </Button>
          
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 min-h-[44px]" aria-label="เพิ่มสินค้าใหม่">
            <Plus className="h-4 w-4" aria-hidden="true" />
            เพิ่มสินค้า
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stockOverview.map((item, index) => {
          const IconComponent = item.icon
          return (
            <Card key={index} className="hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{item.title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{item.value}</p>
                    <div className="flex items-center mt-2">
                      {item.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-700 dark:text-green-400 mr-1" aria-hidden="true" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-700 dark:text-red-400 mr-1" aria-hidden="true" />
                      )}
                      <span className={`text-sm font-medium ${item.trend === 'up' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                {isSearching ? (
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" aria-hidden="true"></div>
                ) : (
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                )}
                <input
                  type="text"
                  placeholder="ค้นหาสินค้า... (พิมพ์แล้วรอ 0.8 วินาที)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="ค้นหาสินค้าตามชื่อ รหัส หมวดหมู่ หรือผู้จำหน่าย"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 min-h-[44px]"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label="เคลียร์การค้นหา"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="เลือกหมวดหมู่สินค้า"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white min-h-[44px]"
            >
              <option value="all">ทุกหมวดหมู่</option>
              <option value="อิเล็กทรอนิกส์">อิเล็กทรอนิกส์</option>
              <option value="คอมพิวเตอร์">คอมพิวเตอร์</option>
              <option value="อุปกรณ์เสริม">อุปกรณ์เสริม</option>
            </select>
            
            <select 
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              aria-label="เลือกสถานะสต็อก"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white min-h-[44px]"
            >
              <option value="all">ทุกสถานะ</option>
              <option value="in_stock">มีสินค้า</option>
              <option value="low_stock">ใกล้หมด</option>
              <option value="out_of_stock">หมดสต็อก</option>
            </select>
            
            <Button 
              variant="outline" 
              className="gap-2 min-h-[44px]" 
              aria-label="รีเฟรชข้อมูล"
              onClick={handleRefresh}
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} aria-hidden="true" />
              รีเฟรช
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stock Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">รายการสินค้า</CardTitle>
              <CardDescription>จัดการสินค้าคงคลังทั้งหมด</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2 min-h-[44px]" aria-label="เปิดตัวกรองเพิ่มเติม">
              <Filter className="h-4 w-4" aria-hidden="true" />
              ตัวกรองเพิ่มเติม
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600 dark:text-gray-400">กำลังโหลด...</span>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full" role="table" aria-label="ตารางรายการสินค้าคงคลัง">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">รหัสสินค้า</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">ชื่อสินค้า</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">หมวดหมู่</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">สต็อกปัจจุบัน</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">ระดับสต็อก</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">ราคา</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">สถานะ</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300" scope="col">การจัดการ</th>
                </tr>
              </thead>
              <tbody>
                {stockItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-4 px-4">
                      <span className="font-mono text-sm text-gray-700 dark:text-gray-300">{item.id}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.supplier}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md text-sm">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">{item.currentStock}</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Min: {item.minStock} | Max: {item.maxStock}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-20">
                        {getStockLevel(item.currentStock, item.maxStock)}
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {Math.round((item.currentStock / item.maxStock) * 100)}%
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        ฿{item.price.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 min-w-[44px] min-h-[44px]" aria-label={`ดูรายละเอียดสินค้า ${item.name}`}>
                          <Eye className="h-4 w-4" aria-hidden="true" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 min-w-[44px] min-h-[44px]" aria-label={`แก้ไขสินค้า ${item.name}`}>
                          <Edit className="h-4 w-4" aria-hidden="true" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 min-w-[44px] min-h-[44px]" aria-label={`ลบสินค้า ${item.name}`}>
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* No Results Message */}
          {stockItems.length === 0 && !loading && (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" aria-hidden="true" />
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">ไม่พบสินค้าที่ค้นหา</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">ลองเปลี่ยนคำค้นหาหรือตัวกรองใหม่</p>
            </div>
          )}
          
          {/* Pagination */}
          {stockItems.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                แสดง {((pagination.page - 1) * pagination.limit) + 1}-{Math.min(pagination.page * pagination.limit, pagination.total)} จาก {pagination.total} รายการ
              </p>
              
              {pagination.totalPages > 1 && (
                <nav className="flex items-center gap-2" aria-label="การนำทางหน้า">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={goToPreviousPage}
                    disabled={pagination.page === 1}
                    className="gap-1 min-h-[44px]"
                    aria-label="ไปหน้าก่อนหน้า"
                  >
                    ก่อนหน้า
                  </Button>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => {
                      // แสดงหน้าแรก, หน้าสุดท้าย, หน้าปัจจุบัน และหน้าใกล้เคียง
                      if (
                        page === 1 ||
                        page === pagination.totalPages ||
                        (page >= pagination.page - 1 && page <= pagination.page + 1)
                      ) {
                        return (
                          <Button
                            key={page}
                            variant="outline"
                            size="sm"
                            onClick={() => goToPage(page)}
                            className={`min-h-[44px] ${
                              page === pagination.page
                                ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700"
                                : ""
                            }`}
                            aria-label={`ไปหน้า ${page}`}
                            aria-current={page === pagination.page ? "page" : undefined}
                          >
                            {page}
                          </Button>
                        )
                      } else if (
                        page === pagination.page - 2 ||
                        page === pagination.page + 2
                      ) {
                        return (
                          <span key={page} className="px-2 text-gray-500 dark:text-gray-500" aria-hidden="true">
                            ...
                          </span>
                        )
                      }
                      return null
                    })}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={goToNextPage}
                    disabled={pagination.page === pagination.totalPages}
                    className="gap-1 min-h-[44px]"
                    aria-label="ไปหน้าถัดไป"
                  >
                    ถัดไป
                  </Button>
                </nav>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Stock