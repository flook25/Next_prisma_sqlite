"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Settings, Mail } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'นโยบายความเป็นส่วนตัว - Smart Store'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'นโยบายความเป็นส่วนตัวของ Smart Store - เราให้ความสำคัญกับความเป็นส่วนตัวและการปกป้องข้อมูลของคุณ')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900 dark:to-blue-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Shield className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              นโยบายความเป็นส่วนตัว
            </h1>
            <p className="text-xl text-green-100 mb-8">
              เราให้ความสำคัญกับความเป็นส่วนตัวและการปกป้องข้อมูลของคุณ
            </p>
            <div className="flex justify-center">
              <Link href="/">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  กลับหน้าแรก
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg">
            <p className="text-green-800 dark:text-green-200 font-medium">
              อัปเดตล่าสุด: {new Date().toLocaleDateString('th-TH', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 dark:text-white">
                <Eye className="h-6 w-6 text-green-600 dark:text-green-400" />
                บทนำ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                บริษัท IT Genius จำกัด ("เรา", "บริษัท") ให้ความสำคัญกับความเป็นส่วนตัวของคุณ
                นโยบายความเป็นส่วนตัวนี้อธิบายวิธีการที่เราเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณ
                เมื่อคุณใช้บริการ Smart Store
              </p>
              <p>
                การใช้บริการของเราถือว่าคุณได้อ่าน เข้าใจ และยอมรับนโยบายความเป็นส่วนตัวนี้แล้ว
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  1. ข้อมูลที่เราเก็บรวบรวม
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>เราเก็บรวบรวมข้อมูลประเภทต่างๆ เพื่อให้บริการที่ดีที่สุดแก่คุณ:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">ข้อมูลส่วนบุคคล</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                      <li>ชื่อ-นามสกุล</li>
                      <li>อีเมล</li>
                      <li>หมายเลขโทรศัพท์</li>
                      <li>ที่อยู่</li>
                      <li>ข้อมูลบัญชีผู้ใช้</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">ข้อมูลการใช้งาน</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300 text-sm">
                      <li>ข้อมูลการเข้าสู่ระบบ</li>
                      <li>การใช้งานฟีเจอร์ต่างๆ</li>
                      <li>ข้อมูลอุปกรณ์และเบราว์เซอร์</li>
                      <li>IP Address</li>
                      <li>Cookies และ Local Storage</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">ข้อมูลธุรกิจ</h4>
                  <ul className="list-disc list-inside space-y-1 text-purple-700 dark:text-purple-300 text-sm">
                    <li>ข้อมูลสินค้าและสต็อก</li>
                    <li>ข้อมูลการขายและรายงาน</li>
                    <li>ข้อมูลลูกค้าและซัพพลายเออร์</li>
                    <li>การตั้งค่าระบบ</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <Settings className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  2. วิธีการใช้ข้อมูล
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>เราใช้ข้อมูลของคุณเพื่อวัตถุประสงค์ต่อไปนี้:</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                    <UserCheck className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">การให้บริการ</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        ให้บริการระบบจัดการสินค้าคลัง สร้างรายงาน และฟีเจอร์ต่างๆ ตามที่คุณร้องขอ
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                    <Lock className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">การรักษาความปลอดภัย</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        ตรวจสอบตัวตน ป้องกันการใช้งานที่ไม่ได้รับอนุญาต และรักษาความปลอดภัยของระบบ
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                    <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">การปรับปรุงบริการ</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        วิเคราะห์การใช้งานเพื่อปรับปรุงและพัฒนาบริการให้ดีขึ้น
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  3. การปกป้องข้อมูล
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>เราใช้มาตรการรักษาความปลอดภัยที่เข้มงวดเพื่อปกป้องข้อมูลของคุณ:</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                    <Lock className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">การเข้ารหัส</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      ข้อมูลทั้งหมดถูกเข้ารหัสด้วย SSL/TLS
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                    <Database className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">การจัดเก็บ</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      เซิร์ฟเวอร์ที่ปลอดภัยและมีการสำรองข้อมูล
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                    <UserCheck className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">การเข้าถึง</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      จำกัดการเข้าถึงเฉพาะบุคคลที่ได้รับอนุญาต
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <UserCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  4. สิทธิ์ของคุณ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>คุณมีสิทธิ์ต่อไปนี้เกี่ยวกับข้อมูลส่วนบุคคลของคุณ:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                      <Eye className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span className="text-green-800 dark:text-green-200 font-medium">เข้าถึงข้อมูล</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                      <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-blue-800 dark:text-blue-200 font-medium">แก้ไขข้อมูล</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-700">
                      <Database className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <span className="text-red-800 dark:text-red-200 font-medium">ลบข้อมูล</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                      <Lock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <span className="text-purple-800 dark:text-purple-200 font-medium">จำกัดการประมวลผล</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
                      <UserCheck className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                      <span className="text-yellow-800 dark:text-yellow-200 font-medium">ถอนความยินยอม</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                      <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-indigo-800 dark:text-indigo-200 font-medium">ส่งออกข้อมูล</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border-green-200 dark:border-green-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-800 dark:text-green-200">
                <Mail className="h-6 w-6" />
                ติดต่อเรา
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ หรือต้องการใช้สิทธิ์ของคุณ กรุณาติดต่อเรา:
              </p>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p><strong>เจ้าหน้าที่คุมครองข้อมูลส่วนบุคคล (DPO):</strong> privacy@itgenius.co.th</p>
                <p><strong>อีเมลทั่วไป:</strong> support@itgenius.co.th</p>
                <p><strong>โทรศัพท์:</strong> +66 2-123-4567</p>
                <p><strong>ที่อยู่:</strong> Bangkok, Thailand</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy