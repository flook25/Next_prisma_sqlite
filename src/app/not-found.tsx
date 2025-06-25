"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search, ArrowLeft, AlertTriangle } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <div className="text-[12rem] md:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 leading-none animate-pulse">
            404
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 animate-bounce">
            <div className="w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full opacity-60"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2 animate-bounce delay-300">
            <div className="w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full opacity-60"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 transform animate-bounce delay-500">
            <div className="w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Error Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-full flex items-center justify-center border border-orange-200 dark:border-orange-700">
            <AlertTriangle className="w-10 h-10 text-orange-600 dark:text-orange-400" />
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            หน้าที่คุณค้นหาไม่พบ
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            หน้านี้อาจถูกย้าย ลบ หรือ URL ที่คุณป้อนอาจไม่ถูกต้อง
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link href="/">
            <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white px-6 py-3 text-lg">
              <Home className="w-5 h-5" />
              กลับหน้าหลัก
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            กลับหน้าก่อนหน้า
          </Button>
        </div>

        {/* Search Suggestion */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              ลองค้นหาสิ่งที่คุณต้องการ
            </h3>
          </div>
          
          <div className="space-y-2">
            <Link href="/admin/dashboard" className="block">
              <div className="text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="text-blue-600 dark:text-blue-400 hover:underline">
                  → แดชบอร์ด
                </span>
              </div>
            </Link>
            <Link href="/admin/products" className="block">
              <div className="text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="text-blue-600 dark:text-blue-400 hover:underline">
                  → จัดการสินค้า
                </span>
              </div>
            </Link>
            <Link href="/admin/settings" className="block">
              <div className="text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="text-blue-600 dark:text-blue-400 hover:underline">
                  → ตั้งค่าระบบ
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>หากคุณคิดว่านี่เป็นข้อผิดพลาด กรุณาติดต่อทีมสนับสนุน</p>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 dark:from-pink-600/10 dark:to-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}

export default NotFound