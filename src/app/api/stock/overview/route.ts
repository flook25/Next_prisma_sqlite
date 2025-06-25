import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // ดึงข้อมูลสถิติ
    const [
      totalItems,
      lowStockItems,
      outOfStockItems,
      inStockItems
    ] = await Promise.all([
      prisma.stockItem.count(),
      prisma.stockItem.count({ where: { status: 'LOW_STOCK' } }),
      prisma.stockItem.count({ where: { status: 'OUT_OF_STOCK' } }),
      prisma.stockItem.count({ where: { status: 'IN_STOCK' } })
    ])

    // คำนวณมูลค่าสต็อกรวม
    const items = await prisma.stockItem.findMany({
      select: {
        price: true,
        currentStock: true
      }
    })

    const totalValue = items.reduce((sum, item) => {
      return sum + (item.price * item.currentStock)
    }, 0)

    // ดึงข้อมูลสินค้าที่อัปเดตล่าสุด
    const recentlyUpdated = await prisma.stockItem.findMany({
      orderBy: { lastUpdated: 'desc' },
      take: 5,
      select: {
        sku: true,
        name: true,
        currentStock: true,
        status: true,
        lastUpdated: true
      }
    })

    // ดึงข้อมูลสินค้าที่ขายดี (สินค้าที่มี stock น้อยที่สุด)
    const lowStockAlert = await prisma.stockItem.findMany({
      where: {
        OR: [
          { status: 'LOW_STOCK' },
          { status: 'OUT_OF_STOCK' }
        ]
      },
      orderBy: { currentStock: 'asc' },
      take: 10,
      select: {
        sku: true,
        name: true,
        currentStock: true,
        minStock: true,
        status: true,
        category: true
      }
    })

    // สถิติตามหมวดหมู่
    const categoryStats = await prisma.stockItem.groupBy({
      by: ['category'],
      _count: {
        category: true
      },
      _sum: {
        currentStock: true
      },
      _avg: {
        price: true
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        overview: {
          totalItems,
          inStockItems,
          lowStockItems,
          outOfStockItems,
          totalValue: Math.round(totalValue * 100) / 100 // ปัดเศษ 2 ตำแหน่ง
        },
        recentlyUpdated: recentlyUpdated.map(item => ({
          sku: item.sku,
          name: item.name,
          currentStock: item.currentStock,
          status: item.status.toLowerCase().replace('_', '_'),
          lastUpdated: item.lastUpdated.toISOString().split('T')[0]
        })),
        lowStockAlert: lowStockAlert.map(item => ({
          sku: item.sku,
          name: item.name,
          currentStock: item.currentStock,
          minStock: item.minStock,
          status: item.status.toLowerCase().replace('_', '_'),
          category: item.category
        })),
        categoryStats: categoryStats.map(stat => ({
          category: stat.category,
          totalItems: stat._count.category,
          totalStock: stat._sum.currentStock || 0,
          averagePrice: Math.round((stat._avg.price || 0) * 100) / 100
        }))
      }
    })

  } catch (error) {
    console.error('Error fetching stock overview:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stock overview' },
      { status: 500 }
    )
  }
} 