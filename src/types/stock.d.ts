export interface StockItem {
  id: string
  sku: string
  name: string
  category: string
  currentStock: number
  minStock: number
  maxStock: number
  price: number
  status: 'in_stock' | 'low_stock' | 'out_of_stock'
  supplier: string
  lastUpdated: string
  createdAt?: string
}

export interface StockOverview {
  totalItems: number
  inStockItems: number
  lowStockItems: number
  outOfStockItems: number
  totalValue: number
}

export interface StockFilters {
  search?: string
  category?: string
  status?: string
  page?: number
  limit?: number
}

export interface StockResponse {
  success: boolean
  data: StockItem[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  error?: string
}

export interface StockOverviewResponse {
  success: boolean
  data: {
    overview: StockOverview
    recentlyUpdated: Array<{
      sku: string
      name: string
      currentStock: number
      status: string
      lastUpdated: string
    }>
    lowStockAlert: Array<{
      sku: string
      name: string
      currentStock: number
      minStock: number
      status: string
      category: string
    }>
    categoryStats: Array<{
      category: string
      totalItems: number
      totalStock: number
      averagePrice: number
    }>
  }
  error?: string
}

export interface CreateStockItem {
  sku: string
  name: string
  category: string
  currentStock: number
  minStock: number
  maxStock: number
  price: number
  supplier: string
}

export interface UpdateStockItem {
  name: string
  category: string
  currentStock: number
  minStock: number
  maxStock: number
  price: number
  supplier: string
}

export interface StockAdjustment {
  action: 'add' | 'subtract' | 'set'
  quantity: number
  reason?: string
} 