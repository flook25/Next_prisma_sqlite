"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Palette, 
  Brush, 
  Image, 
  Layout, 
  Printer, 
  Smartphone,
  Monitor,
  FileImage,
  CheckCircle,
  ArrowRight,
  Star,
  Eye,
  Zap,
  Award
} from 'lucide-react'

function Graphic() {
  const services = [
    {
      icon: Layout,
      title: "Logo Design",
      description: "ออกแบบโลโก้ที่โดดเด่น จดจำง่าย และสื่อถึงตัวตนของแบรนด์",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: FileImage,
      title: "Brand Identity",
      description: "สร้างระบบอัตลักษณ์แบรนด์ที่สมบูรณ์ รวมถึงสีสัน ฟอนต์ และแนวทาง",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      icon: Printer,
      title: "Print Design",
      description: "ออกแบบสื่อสิ่งพิมพ์ นามบัตร โบรชัวร์ โปสเตอร์ และบรรจุภัณฑ์",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      icon: Monitor,
      title: "Digital Design",
      description: "ออกแบบกราฟิกสำหรับสื่อดิจิทัล เว็บไซต์ โซเชียลมีเดีย และแอปพลิเคชัน",
      color: "text-pink-600",
      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
      icon: Image,
      title: "Illustration",
      description: "สร้างภาพประกอบและอินโฟกราฟิกที่สวยงามและสื่อความหมายได้ชัดเจน",
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      icon: Smartphone,
      title: "Social Media",
      description: "ออกแบบคอนเทนต์สำหรับโซเชียลมีเดียที่ดึงดูดและเพิ่มการมีส่วนร่วม",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30"
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "8,000",
      description: "เหมาะสำหรับธุรกิจเริ่มต้น",
      features: [
        "ออกแบบโลโก้ 3 แนวคิด",
        "ไฟล์ Vector (AI, EPS)",
        "ไฟล์ PNG ความละเอียดสูง",
        "คู่มือการใช้งานโลโก้",
        "แก้ไข 2 รอบ",
        "ส่งงานภายใน 5 วัน"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional",
      price: "18,000",
      description: "เหมาะสำหรับธุรกิจที่ต้องการครบครัน",
      features: [
        "ออกแบบโลโก้ 5 แนวคิด",
        "Brand Identity Package",
        "นามบัตรและเลเทอร์เฮด",
        "Social Media Template",
        "Brand Guideline",
        "แก้ไข 3 รอบ",
        "ส่งงานภายใน 7 วัน"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "35,000",
      description: "เหมาะสำหรับองค์กรขนาดใหญ่",
      features: [
        "Brand Identity สมบูรณ์",
        "ออกแบบบรรจุภัณฑ์",
        "สื่อสิ่งพิมพ์ครบชุด",
        "Digital Assets",
        "Brand Manual ฉบับสมบูรณ์",
        "แก้ไขไม่จำกัด",
        "ปรึกษา 1 ปี",
        "ส่งงานภายใน 14 วัน"
      ],
      popular: false,
      color: "from-emerald-500 to-teal-500"
    }
  ]

  const portfolio = [
    {
      title: "Modern Tech Logo",
      category: "Logo Design",
      image: "🚀",
      description: "โลโก้สำหรับบริษัทเทคโนโลยี"
    },
    {
      title: "Restaurant Branding",
      category: "Brand Identity",
      image: "🍽️",
      description: "ระบบอัตลักษณ์ร้านอาหาร"
    },
    {
      title: "Fashion Poster",
      category: "Print Design",
      image: "👗",
      description: "โปสเตอร์แฟชั่นสไตล์มินิมอล"
    },
    {
      title: "App Interface",
      category: "Digital Design",
      image: "📱",
      description: "ออกแบบ UI สำหรับแอปมือถือ"
    }
  ]

  const testimonials = [
    {
      name: "คุณนิรันดร์ สร้างสรรค์",
      company: "Creative Studio",
      text: "ผลงานออกแบบสวยงามมาก ตรงใจและสื่อถึงแบรนด์ได้ดีเยี่ยม ทีมงานใส่ใจในรายละเอียด",
      rating: 5
    },
    {
      name: "คุณสุดา ธุรกิจดี",
      company: "Good Business Co.",
      text: "ได้โลโก้ที่สวยและใช้งานได้จริง ลูกค้าจำแบรนด์เราได้ง่ายขึ้น ขอบคุณมากครับ",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-pink-400 to-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium">
                  🎨 Graphic Design Service
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  ออกแบบ
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                    กราฟิก
                  </span>
                </h1>

                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  สร้างสรรค์ผลงานกราฟิกที่โดดเด่น สวยงาม และสื่อถึงตัวตนของแบรนด์ 
                  ด้วยความคิดสร้างสรรค์และประสบการณ์มากกว่า 5 ปี
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 text-lg"
                    asChild
                  >
                    <Link href="#packages">ดูแพ็คเกจ</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 text-lg"
                    asChild
                  >
                    <Link href="/contact">ปรึกษาฟรี</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative flex items-center justify-center">
              <div className="text-white text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                  <Palette className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-bold">Creative Design</h3>
                <p className="text-white/90 text-xl max-w-md leading-relaxed">
                  ความคิดสร้างสรรค์ที่ไม่มีขีดจำกัด
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              บริการของเรา
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              เราให้บริการออกแบบกราฟิกครบวงจร ตั้งแต่โลโก้ไปจนถึงระบบอัตลักษณ์แบรนด์
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-200 dark:hover:border-purple-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              ผลงานของเรา
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ชมผลงานออกแบบที่หลากหลายและสร้างสรรค์จากทีมงานมืออาชีพ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                        {item.category}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              แพ็คเกจบริการ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              เลือกแพ็คเกจที่เหมาะสมกับความต้องการและงบประมาณของคุณ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                    🔥 แนะนำ
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{pkg.name}</h3>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">
                        ฿{pkg.price}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{pkg.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full mt-8 bg-gradient-to-r ${pkg.color} text-white hover:shadow-lg transition-all duration-300`}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">
                      เลือกแพ็คเกจนี้
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              ขั้นตอนการทำงาน
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              กระบวนการทำงานที่เป็นระบบเพื่อให้ได้ผลงานที่ดีที่สุด
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "ปรึกษา", desc: "รับฟังความต้องการและวิเคราะห์โจทย์" },
              { step: "02", title: "ออกแบบ", desc: "สร้างแนวคิดและออกแบบตามความต้องการ" },
              { step: "03", title: "ปรับปรุง", desc: "รับฟีดแบ็คและปรับแก้ให้สมบูรณ์" },
              { step: "04", title: "ส่งมอบ", desc: "ส่งไฟล์งานและคู่มือการใช้งาน" }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              ความคิดเห็นลูกค้า
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ฟังเสียงจากลูกค้าที่ไว้วางใจให้เราออกแบบผลงานให้
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-purple-100">ผลงานออกแบบ</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">300+</div>
              <div className="text-purple-100">ลูกค้าพึงพอใจ</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-purple-100">ปีประสบการณ์</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-purple-100">ความพึงพอใจ</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              พร้อมสร้างแบรนด์ที่โดดเด่นแล้วหรือยัง?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              ปรึกษาฟรี! ทีมงานของเราพร้อมให้คำแนะนำและออกแบบที่เหมาะสมกับแบรนด์ของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link href="/contact">ปรึกษาฟรีวันนี้</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link href="/service">ดูบริการอื่น</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Graphic
