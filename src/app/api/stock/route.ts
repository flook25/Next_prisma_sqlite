import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { StockStatus } from '@prisma/client'

// GET - ดึงรายการสินค้า
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || 'all'
    const status = searchParams.get('status') || 'all'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    // สร้าง where condition
    const where: any = {}

    if (search) {
      // SQLite: ใช้ LIKE pattern สำหรับ case-insensitive search
      const searchPattern = `%${search.toLowerCase()}%`
      where.OR = [
        { name: { contains: search } },
        { sku: { contains: search } },
        { category: { contains: search } },
        { supplier: { contains: search } }
      ]
    }

    if (category !== 'all') {
      where.category = decodeURIComponent(category)
    }

    if (status !== 'all') {
      where.status = status.toUpperCase() as StockStatus
    }

    // ดึงข้อมูลพร้อม pagination
    const [items, totalCount] = await Promise.all([
      prisma.stockItem.findMany({
        where,
        orderBy: { lastUpdated: 'desc' },
        skip: (page - 1) * limit,
        take: limit
      }),
      prisma.stockItem.count({ where })
    ])

    // แปลงข้อมูลให้ตรงกับ frontend
    const formattedItems = items.map(item => ({
      id: item.sku,
      name: item.name,
      category: item.category,
      currentStock: item.currentStock,
      minStock: item.minStock,
      maxStock: item.maxStock,
      price: item.price,
      status: item.status.toLowerCase(),
      lastUpdated: item.lastUpdated.toISOString().split('T')[0],
      supplier: item.supplier
    }))

    return NextResponse.json({
      success: true,
      data: formattedItems,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching stock items:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stock items' },
      { status: 500 }
    )
  }
}

// POST - เพิ่มสินค้าใหม่
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sku, name, category, currentStock, minStock, maxStock, price, supplier } = body

    // ตรวจสอบข้อมูลที่จำเป็น
    if (!sku || !name || !category || currentStock === undefined || !minStock || !maxStock || !price || !supplier) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // ตรวจสอบว่า SKU ซ้ำหรือไม่
    const existingItem = await prisma.stockItem.findUnique({
      where: { sku }
    })

    if (existingItem) {
      return NextResponse.json(
        { success: false, error: 'SKU already exists' },
        { status: 409 }
      )
    }

    // ตรวจสอบสถานะสต็อก
    let status: StockStatus = 'IN_STOCK'
    if (currentStock === 0) {
      status = 'OUT_OF_STOCK'
    } else if (currentStock <= minStock) {
      status = 'LOW_STOCK'
    }

    const newItem = await prisma.stockItem.create({
      data: {
        sku,
        name,
        category,
        currentStock: parseInt(currentStock),
        minStock: parseInt(minStock),
        maxStock: parseInt(maxStock),
        price: parseFloat(price),
        supplier,
        status
      }
    })

    return NextResponse.json({
      success: true,
      data: newItem,
      message: 'Stock item created successfully'
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating stock item:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create stock item' },
      { status: 500 }
    )
  }
}