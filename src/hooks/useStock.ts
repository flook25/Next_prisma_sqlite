import { useState, useEffect, useCallback } from 'react'
import { 
  StockItem, 
  StockOverview, 
  StockFilters, 
  StockResponse, 
  StockOverviewResponse,
  CreateStockItem,
  UpdateStockItem,
  StockAdjustment
} from '@/types/stock'

interface UseStockReturn {
  // Data
  items: StockItem[]
  overview: StockOverview | null
  
  // States
  loading: boolean
  error: string | null
  
  // Pagination
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  
  // Methods
  fetchItems: (filters?: StockFilters) => Promise<void>
  fetchOverview: () => Promise<void>
  createItem: (item: CreateStockItem) => Promise<boolean>
  updateItem: (sku: string, item: UpdateStockItem) => Promise<boolean>
  deleteItem: (sku: string) => Promise<boolean>
  adjustStock: (sku: string, adjustment: StockAdjustment) => Promise<boolean>
  getItem: (sku: string) => Promise<StockItem | null>
  
  // Utilities
  refresh: () => Promise<void>
  clearError: () => void
}

export function useStock(): UseStockReturn {
  const [items, setItems] = useState<StockItem[]>([])
  const [overview, setOverview] = useState<StockOverview | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  })

  // ฟังก์ชันจัดการ error
  const handleError = (err: any, defaultMessage: string) => {
    console.error(err)
    setError(err.message || defaultMessage)
  }

  // ฟังก์ชันดึงรายการสินค้า
  const fetchItems = useCallback(async (filters: StockFilters = {}) => {
    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams()
      if (filters.search) params.append('search', filters.search)
      if (filters.category && filters.category !== 'all') params.append('category', filters.category)
      if (filters.status && filters.status !== 'all') params.append('status', filters.status)
      if (filters.page) params.append('page', filters.page.toString())
      if (filters.limit) params.append('limit', filters.limit.toString())

      const response = await fetch(`/api/stock?${params.toString()}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: StockResponse = await response.json()

      if (result.success) {
        setItems(result.data)
        setPagination(result.pagination)
      } else {
        throw new Error(result.error || 'Failed to fetch stock items')
      }
    } catch (err) {
      handleError(err, 'Failed to fetch stock items')
      setItems([])
    } finally {
      setLoading(false)
    }
  }, [])

  // ฟังก์ชันดึงข้อมูลภาพรวม
  const fetchOverview = useCallback(async () => {
    try {
      const response = await fetch('/api/stock/overview')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: StockOverviewResponse = await response.json()

      if (result.success) {
        setOverview(result.data.overview)
      } else {
        throw new Error(result.error || 'Failed to fetch stock overview')
      }
    } catch (err) {
      handleError(err, 'Failed to fetch stock overview')
    }
  }, [])

  // ฟังก์ชันสร้างสินค้าใหม่
  const createItem = useCallback(async (item: CreateStockItem): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })

      const result = await response.json()

      if (result.success) {
        return true
      } else {
        throw new Error(result.error || 'Failed to create stock item')
      }
    } catch (err) {
      handleError(err, 'Failed to create stock item')
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  // ฟังก์ชันอัปเดตสินค้า
  const updateItem = useCallback(async (sku: string, item: UpdateStockItem): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/stock/${sku}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })

      const result = await response.json()

      if (result.success) {
        return true
      } else {
        throw new Error(result.error || 'Failed to update stock item')
      }
    } catch (err) {
      handleError(err, 'Failed to update stock item')
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  // ฟังก์ชันลบสินค้า
  const deleteItem = useCallback(async (sku: string): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/stock/${sku}`, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (result.success) {
        return true
      } else {
        throw new Error(result.error || 'Failed to delete stock item')
      }
    } catch (err) {
      handleError(err, 'Failed to delete stock item')
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  // ฟังก์ชันปรับสต็อก
  const adjustStock = useCallback(async (sku: string, adjustment: StockAdjustment): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/stock/${sku}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adjustment),
      })

      const result = await response.json()

      if (result.success) {
        return true
      } else {
        throw new Error(result.error || 'Failed to adjust stock')
      }
    } catch (err) {
      handleError(err, 'Failed to adjust stock')
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  // ฟังก์ชันดึงสินค้าตาม SKU
  const getItem = useCallback(async (sku: string): Promise<StockItem | null> => {
    setError(null)

    try {
      const response = await fetch(`/api/stock/${sku}`)
      
      if (!response.ok) {
        if (response.status === 404) {
          return null
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()

      if (result.success) {
        return result.data
      } else {
        throw new Error(result.error || 'Failed to fetch stock item')
      }
    } catch (err) {
      handleError(err, 'Failed to fetch stock item')
      return null
    }
  }, [])

  // ฟังก์ชันรีเฟรชข้อมูล
  const refresh = useCallback(async () => {
    await Promise.all([
      fetchItems({ page: pagination.page, limit: pagination.limit }),
      fetchOverview()
    ])
  }, [fetchItems, fetchOverview, pagination.page, pagination.limit])

  // ฟังก์ชันล้าง error
  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return {
    // Data
    items,
    overview,
    
    // States
    loading,
    error,
    
    // Pagination
    pagination,
    
    // Methods
    fetchItems,
    fetchOverview,
    createItem,
    updateItem,
    deleteItem,
    adjustStock,
    getItem,
    
    // Utilities
    refresh,
    clearError
  }
}