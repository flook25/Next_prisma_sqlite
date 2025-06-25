"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Cookie, Settings, Shield, Eye, Database, Mail } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

function CookiePolicy() {
  useEffect(() => {
    document.title = 'นโยบายคุกกี้ - Smart Store'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'นโยบายคุกกี้ของ Smart Store - เรียนรู้เกี่ยวกับการใช้คุกกี้และเทคโนโลยีติดตามในเว็บไซต์ของเรา')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-orange-900 dark:to-yellow-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Cookie className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              นโยบายคุกกี้
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              เรียนรู้เกี่ยวกับการใช้คุกกี้และเทคโนโลยีติดตามในเว็บไซต์ของเรา
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
          <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700 rounded-lg">
            <p className="text-orange-800 dark:text-orange-200 font-medium">
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
                <Cookie className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                คุกกี้คืออะไร?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                คุกกี้ (Cookies) คือไฟล์ข้อความขนาดเล็กที่เว็บไซต์ส่งไปยังอุปกรณ์ของคุณ
                เมื่อคุณเยี่ยมชมเว็บไซต์ คุกกี้ช่วยให้เว็บไซต์จดจำข้อมูลเกี่ยวกับการเยี่ยมชมของคุณ
                เช่น ภาษาที่ต้องการและการตั้งค่าอื่นๆ
              </p>
              <p>
                เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ และให้บริการที่ดีขึ้น
              </p>
            </CardContent>
          </Card>

          {/* Cookie Types */}
          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  ประเภทของคุกกี้ที่เราใช้
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      คุกกี้ที่จำเป็น
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                      คุกกี้เหล่านี้จำเป็นสำหรับการทำงานของเว็บไซต์และไม่สามารถปิดได้
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300 text-sm">
                      <li>การเข้าสู่ระบบและรักษาเซสชัน</li>
                      <li>การรักษาความปลอดภัย</li>
                      <li>การจดจำการตั้งค่าพื้นฐาน</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      คุกกี้การวิเคราะห์
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm mb-3">
                      ช่วยให้เราเข้าใจวิธีการใช้งานเว็บไซต์ของผู้เยี่ยมชม
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300 text-sm">
                      <li>การนับจำนวนผู้เยี่ยมชม</li>
                      <li>หน้าที่ได้รับความนิยม</li>
                      <li>เวลาที่ใช้ในเว็บไซต์</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      คุกกี้การทำงาน
                    </h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm mb-3">
                      ช่วยปรับปรุงการทำงานและคุณสมบัติของเว็บไซต์
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-purple-700 dark:text-purple-300 text-sm">
                      <li>การจดจำการตั้งค่าผู้ใช้</li>
                      <li>ภาษาที่เลือก</li>
                      <li>ธีมและการแสดงผล</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      คุกกี้การตลาด
                    </h4>
                    <p className="text-orange-700 dark:text-orange-300 text-sm mb-3">
                      ใช้เพื่อแสดงโฆษณาที่เกี่ยวข้องกับคุณ
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-orange-700 dark:text-orange-300 text-sm">
                      <li>การติดตามพฤติกรรม</li>
                      <li>โฆษณาที่เหมาะสม</li>
                      <li>การวัดประสิทธิภาพโฆษณา</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  การจัดการคุกกี้
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>คุณสามารถควบคุมและจัดการคุกกี้ได้หลายวิธี:</p>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">การตั้งค่าเบราว์เซอร์</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      เบราว์เซอร์ส่วนใหญ่อนุญาตให้คุณควบคุมคุกกี้ผ่านการตั้งค่า 
                      คุณสามารถบล็อก ลบ หรือได้รับการแจ้งเตือนเมื่อมีคุกกี้ใหม่
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">การตั้งค่าในเว็บไซต์</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      เราจะมีแบนเนอร์คุกกี้ที่ให้คุณเลือกประเภทคุกกี้ที่ต้องการยอมรับ
                      คุณสามารถเปลี่ยนแปลงการตั้งค่าได้ตลอดเวลา
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ หมายเหตุสำคัญ</h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    การปิดใช้งานคุกกี้บางประเภทอาจส่งผลต่อการทำงานของเว็บไซต์ 
                    และคุณอาจไม่สามารถใช้งานฟีเจอร์บางอย่างได้
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  เทคโนโลยีอื่นๆ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>นอกจากคุกกี้แล้ว เรายังใช้เทคโนโลยีอื่นๆ เช่น:</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                    <Database className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Local Storage</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      เก็บข้อมูลในเบราว์เซอร์ของคุณ
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                    <Eye className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Web Beacons</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      ติดตามการใช้งานเว็บไซต์
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                    <Settings className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Session Storage</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      เก็บข้อมูลชั่วคราวในเซสชัน
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="mt-12 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 border-orange-200 dark:border-orange-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-orange-800 dark:text-orange-200">
                <Mail className="h-6 w-6" />
                ติดต่อเรา
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                หากคุณมีคำถามเกี่ยวกับนโยบายคุกกี้นี้ กรุณาติดต่อเรา:
              </p>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p><strong>อีเมล:</strong> support@itgenius.co.th</p>
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

export default CookiePolicy