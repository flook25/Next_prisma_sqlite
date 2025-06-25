"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, Shield, AlertTriangle, Users, Gavel, Mail } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

function TermsOfService() {
  useEffect(() => {
    document.title = 'ข้อกำหนดการใช้งาน - Smart Store'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ข้อกำหนดและเงื่อนไขการใช้งานบริการ Smart Store - กรุณาอ่านข้อกำหนดอย่างละเอียดก่อนใช้งาน')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <FileText className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ข้อกำหนดการใช้งาน
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              กรุณาอ่านข้อกำหนดและเงื่อนไขการใช้งานบริการของเราอย่างละเอียด
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
          <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
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
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                บทนำ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                ยินดีต้อนรับสู่ Smart Store ระบบจัดการสินค้าคลังสมัยใหม่ ข้อกำหนดการใช้งานนี้
                กำหนดเงื่อนไขและข้อตกลงระหว่างคุณ ("ผู้ใช้") และบริษัท IT Genius จำกัด ("เรา", "บริษัท")
                ในการใช้บริการและเว็บไซต์ของเรา
              </p>
              <p>
                การใช้บริการของเราถือว่าคุณได้อ่าน เข้าใจ และยอมรับข้อกำหนดทั้งหมดนี้แล้ว
                หากคุณไม่เห็นด้วยกับข้อกำหนดใดๆ กรุณาหยุดการใช้บริการทันที
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  1. การยอมรับข้อกำหนด
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  การเข้าถึงและใช้งานเว็บไซต์ Smart Store หรือบริการใดๆ ของเรา 
                  ถือว่าคุณได้ยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดการใช้งานนี้
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>คุณต้องมีอายุไม่ต่ำกว่า 18 ปี หรือได้รับความยินยอมจากผู้ปกครอง</li>
                  <li>คุณต้องให้ข้อมูลที่ถูกต้องและเป็นจริงในการสมัครสมาชิก</li>
                  <li>คุณรับผิดชอบในการรักษาความปลอดภัยของบัญชีผู้ใช้</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  2. การใช้งานบริการ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Smart Store เป็นระบบจัดการสินค้าคลังที่ออกแบบมาเพื่อช่วยธุรกิจในการจัดการสต็อกสินค้า
                  การติดตามการขาย และการวิเคราะห์ข้อมูล
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">สิทธิ์ในการใช้งาน:</h4>
                  <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
                    <li>เข้าถึงและใช้งานฟีเจอร์ต่างๆ ตามแพ็กเกจที่สมัคร</li>
                    <li>จัดเก็บและจัดการข้อมูลสินค้าของคุณ</li>
                    <li>สร้างรายงานและวิเคราะห์ข้อมูล</li>
                    <li>ได้รับการสนับสนุนทางเทคนิค</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  3. ข้อห้ามในการใช้งาน
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>คุณตกลงที่จะไม่ใช้บริการของเราในการ:</p>
                <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-200 dark:border-red-700">
                  <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
                    <li>ละเมิดกฎหมายหรือสิทธิ์ของบุคคลอื่น</li>
                    <li>แพร่กระจายมัลแวร์ ไวรัส หรือโค้ดที่เป็นอันตราย</li>
                    <li>พยายามเข้าถึงระบบโดยไม่ได้รับอนุญาต</li>
                    <li>ใช้งานในลักษณะที่อาจทำให้ระบบเสียหาย</li>
                    <li>คัดลอกหรือทำซ้ำซอฟต์แวร์โดยไม่ได้รับอนุญาต</li>
                    <li>ขายต่อหรือให้เช่าบริการแก่บุคคลอื่น</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  4. ความเป็นเจ้าของทรัพย์สินทางปัญญา
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  เนื้อหา ซอฟต์แวร์ การออกแบบ และทรัพย์สินทางปัญญาอื่นๆ ในเว็บไซต์และบริการของเรา
                  เป็นสิทธิ์ของบริษัท IT Genius จำกัด
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ข้อมูลที่คุณป้อนเข้าระบบยังคงเป็นของคุณ</li>
                  <li>เราไม่อ้างสิทธิ์ในข้อมูลธุรกิจของคุณ</li>
                  <li>คุณให้สิทธิ์เราในการประมวลผลข้อมูลเพื่อให้บริการ</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <Gavel className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  5. การยกเลิกบริการ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  เราขอสงวนสิทธิ์ในการระงับหรือยกเลิกบัญชีของคุณหากมีการละเมิดข้อกำหนดนี้
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">การยกเลิกโดยผู้ใช้:</h4>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300 text-sm">
                      <li>สามารถยกเลิกได้ตลอดเวลา</li>
                      <li>ข้อมูลจะถูกลบภายใน 30 วัน</li>
                      <li>ไม่มีการคืนเงินสำหรับค่าบริการที่จ่ายแล้ว</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-200 dark:border-red-700">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">การยกเลิกโดยบริษัท:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300 text-sm">
                      <li>กรณีละเมิดข้อกำหนด</li>
                      <li>การใช้งานที่ผิดปกติ</li>
                      <li>ไม่ชำระค่าบริการ</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 dark:text-white">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  6. ข้อจำกัดความรับผิดชอบ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  บริษัทจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการใช้งานบริการ 
                  ยกเว้นกรณีที่เกิดจากความประมาทเลินเล่ออย่างร้ายแรงของบริษัท
                </p>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>หมายเหตุ:</strong> เราพยายามให้บริการที่มีคุณภาพและเสถียรภาพสูงสุด 
                    แต่ไม่สามารถรับประกันได้ว่าบริการจะไม่มีข้อผิดพลาดหรือหยุดชะงักเลย
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-blue-200 dark:border-blue-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-800 dark:text-blue-200">
                <Mail className="h-6 w-6" />
                ติดต่อเรา
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                หากคุณมีคำถามเกี่ยวกับข้อกำหนดการใช้งานนี้ กรุณาติดต่อเรา:
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

export default TermsOfService