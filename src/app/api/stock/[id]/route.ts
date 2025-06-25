import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { StockStatus } from '@prisma/client'

// GET - ดึงสินค้าตาม ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const item = await prisma.stockItem.findUnique({
      where: { sku: id }
    })

    if (!item) {
      return NextResponse.json(
        { success: false, error: 'Stock item not found' },
        { status: 404 }
      )
    }

    // แปลงข้อมูลให้ตรงกับ frontend
    const formattedItem = {
      id: item.sku,
      sku: item.sku,
      name: item.name,
      category: item.category,
      currentStock: item.currentStock,
      minStock: item.minStock,
      maxStock: item.maxStock,
      price: item.price,
      status: item.status.toLowerCase().replace('_', '_'),
      lastUpdated: item.lastUpdated.toISOString().split('T')[0],
      supplier: item.supplier,
      createdAt: item.createdAt.toISOString()
    }

    return NextResponse.json({
      success: true,
      data: formattedItem
    })

  } catch (error) {
    console.error('Error fetching stock item:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stock item' },
      { status: 500 }
    )
  }
}

// PUT - อัปเดตสินค้า
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { name, category, currentStock, minStock, maxStock, price, supplier } = body

    // ตรวจสอบว่าสินค้ามีอยู่หรือไม่
    const existingItem = await prisma.stockItem.findUnique({
      where: { sku: id }
    })

    if (!existingItem) {
      return NextResponse.json(
        { success: false, error: 'Stock item not found' },
        { status: 404 }
      )
    }

    // ตรวจสอบข้อมูลที่จำเป็น
    if (!name || !category || currentStock === undefined || !minStock || !maxStock || !price || !supplier) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // ตรวจสอบสถานะสต็อกใหม่
    let status: StockStatus = 'IN_STOCK'
    const newCurrentStock = parseInt(currentStock)
    const newMinStock = parseInt(minStock)

    if (newCurrentStock === 0) {
      status = 'OUT_OF_STOCK'
    } else if (newCurrentStock <= newMinStock) {
      status = 'LOW_STOCK'
    }

    const updatedItem = await prisma.stockItem.update({
      where: { sku: id },
      data: {
        name,
        category,
        currentStock: newCurrentStock,
        minStock: newMinStock,
        maxStock: parseInt(maxStock),
        price: parseFloat(price),
        supplier,
        status
      }
    })

    // แปลงข้อมูลให้ตรงกับ frontend
    const formattedItem = {
      id: updatedItem.sku,
      sku: updatedItem.sku,
      name: updatedItem.name,
      category: updatedItem.category,
      currentStock: updatedItem.currentStock,
      minStock: updatedItem.minStock,
      maxStock: updatedItem.maxStock,
      price: updatedItem.price,
      status: updatedItem.status.toLowerCase().replace('_', '_'),
      lastUpdated: updatedItem.lastUpdated.toISOString().split('T')[0],
      supplier: updatedItem.supplier
    }

    return NextResponse.json({
      success: true,
      data: formattedItem,
      message: 'Stock item updated successfully'
    })

  } catch (error) {
    console.error('Error updating stock item:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update stock item' },
      { status: 500 }
    )
  }
}

// DELETE - ลบสินค้า
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    // ตรวจสอบว่าสินค้ามีอยู่หรือไม่
    const existingItem = await prisma.stockItem.findUnique({
      where: { sku: id }
    })

    if (!existingItem) {
      return NextResponse.json(
        { success: false, error: 'Stock item not found' },
        { status: 404 }
      )
    }

    // ลบสินค้า
    await prisma.stockItem.delete({
      where: { sku: id }
    })

    return NextResponse.json({
      success: true,
      message: 'Stock item deleted successfully',
      data: {
        deletedSku: id,
        deletedName: existingItem.name
      }
    })

  } catch (error) {
    console.error('Error deleting stock item:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete stock item' },
      { status: 500 }
    )
  }
}

// PATCH - อัปเดตสต็อกเฉพาะ (สำหรับการเพิ่ม/ลดสต็อกอย่างรวดเร็ว)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { action, quantity, reason } = body

    // ตรวจสอบข้อมูลที่จำเป็น
    if (!action || !quantity) {
      return NextResponse.json(
        { success: false, error: 'Missing action or quantity' },
        { status: 400 }
      )
    }

    if (!['add', 'subtract', 'set'].includes(action)) {
      return NextResponse.json(
        { success: false, error: 'Invalid action. Use: add, subtract, or set' },
        { status: 400 }
      )
    }

    // ตรวจสอบว่าสินค้ามีอยู่หรือไม่
    const existingItem = await prisma.stockItem.findUnique({
      where: { sku: id }
    })

    if (!existingItem) {
      return NextResponse.json(
        { success: false, error: 'Stock item not found' },
        { status: 404 }
      )
    }

    // คำนวณสต็อกใหม่
    let newStock = existingItem.currentStock
    const qty = parseInt(quantity)

    switch (action) {
      case 'add':
        newStock += qty
        break
      case 'subtract':
        newStock = Math.max(0, newStock - qty) // ไม่ให้ติดลบ
        break
      case 'set':
        newStock = Math.max(0, qty) // ไม่ให้ติดลบ
        break
    }

    // ตรวจสอบสถานะสต็อกใหม่
    let status: StockStatus = 'IN_STOCK'
    if (newStock === 0) {
      status = 'OUT_OF_STOCK'
    } else if (newStock <= existingItem.minStock) {
      status = 'LOW_STOCK'
    }

    const updatedItem = await prisma.stockItem.update({
      where: { sku: id },
      data: {
        currentStock: newStock,
        status
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        sku: updatedItem.sku,
        name: updatedItem.name,
        previousStock: existingItem.currentStock,
        newStock: updatedItem.currentStock,
        action,
        quantity: qty,
        reason: reason || 'No reason provided',
        status: updatedItem.status.toLowerCase().replace('_', '_'),
        lastUpdated: updatedItem.lastUpdated.toISOString().split('T')[0]
      },
      message: `Stock ${action} operation completed successfully`
    })

  } catch (error) {
    console.error('Error adjusting stock:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to adjust stock' },
      { status: 500 }
    )
  }
} 