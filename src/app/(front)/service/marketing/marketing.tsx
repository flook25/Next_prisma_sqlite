"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Users, 
  Search, 
  Share2,
  Mail,
  Megaphone,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Zap,
  Award
} from 'lucide-react'

function Marketing() {
  const services = [
    {
      icon: Search,
      title: "SEO & SEM",
      description: "เพิ่มการมองเห็นบน Google ด้วยเทคนิค SEO และ Google Ads ที่มีประสิทธิภาพ",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "สร้างแบรนด์และเพิ่มยอดขายผ่าน Facebook, Instagram, TikTok และ LINE",
      color: "text-pink-600",
      bgColor: "bg-pink-100 dark:bg-pink-900/30"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "สร้างความสัมพันธ์กับลูกค้าและเพิ่มยอดขายด้วย Email Marketing",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "วิเคราะห์ข้อมูลและรายงานผลการตลาดเพื่อปรับปรุงกลยุทธ์",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      icon: Target,
      title: "Content Marketing",
      description: "สร้างเนื้อหาที่น่าสนใจและมีคุณค่าเพื่อดึงดูดกลุ่มเป้าหมาย",
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      icon: Megaphone,
      title: "Influencer Marketing",
      description: "ร่วมมือกับ Influencer เพื่อขยายการเข้าถึงและสร้างความน่าเชื่อถือ",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30"
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "12,000",
      description: "เหมาะสำหรับธุรกิจเริ่มต้น",
      features: [
        "จัดการ 2 แพลตฟอร์ม",
        "โพสต์ 15 ครั้ง/เดือน",
        "ออกแบบกราฟิก 10 ชิ้น",
        "รายงานผลรายเดือน",
        "ตอบกลับข้อความ",
        "รองรับ 3 เดือน"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional",
      price: "25,000",
      description: "เหมาะสำหรับธุรกิจที่ต้องการเติบโต",
      features: [
        "จัดการ 4 แพลตฟอร์ม",
        "โพสต์ 30 ครั้ง/เดือน",
        "ออกแบบกราฟิก 20 ชิ้น",
        "Google Ads จัดการ",
        "Email Marketing",
        "รายงานผลรายสัปดาห์",
        "รองรับ 6 เดือน"
      ],
      popular: true,
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Enterprise",
      price: "50,000",
      description: "เหมาะสำหรับองค์กรขนาดใหญ่",
      features: [
        "จัดการทุกแพลตฟอร์ม",
        "โพสต์ไม่จำกัด",
        "ออกแบบกราฟิกไม่จำกัด",
        "SEO & SEM ครบชุด",
        "Influencer Marketing",
        "Live Chat Support",
        "รายงานผลรายวัน",
        "รองรับ 12 เดือน"
      ],
      popular: false,
      color: "from-emerald-500 to-teal-500"
    }
  ]

  const results = [
    {
      metric: "300%",
      description: "เพิ่มขึ้นของยอดขายออนไลน์",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      metric: "250%",
      description: "เพิ่มขึ้นของการเข้าถึงเว็บไซต์",
      icon: Users,
      color: "text-blue-600"
    },
    {
      metric: "400%",
      description: "เพิ่มขึ้นของ Social Media Engagement",
      icon: Share2,
      color: "text-pink-600"
    },
    {
      metric: "200%",
      description: "เพิ่มขึ้นของ Lead Generation",
      icon: Target,
      color: "text-purple-600"
    }
  ]

  const testimonials = [
    {
      name: "คุณวิชัย ประสบผล",
      company: "Success Business",
      text: "ยอดขายเพิ่มขึ้น 300% ภายใน 6 เดือน ทีมงานมืออาชีพและให้คำปรึกษาดีมาก",
      rating: 5
    },
    {
      name: "คุณสุภาพร เติบโต",
      company: "Growth Company",
      text: "การตลาดออนไลน์ที่มีประสิทธิภาพ ลูกค้าใหม่เพิ่มขึ้นอย่างต่อเนื่อง แนะนำเลยครับ",
      rating: 5
    }
  ]

  const strategies = [
    {
      title: "วิเคราะห์ตลาด",
      description: "ศึกษากลุ่มเป้าหมายและคู่แข่งเพื่อสร้างกลยุทธ์ที่เหมาะสม",
      step: "01"
    },
    {
      title: "วางแผนกลยุทธ์",
      description: "สร้างแผนการตลาดที่ครอบคลุมทุกช่องทางและเป้าหมาย",
      step: "02"
    },
    {
      title: "ดำเนินการ",
      description: "ปฏิบัติตามแผนและติดตามผลอย่างใกล้ชิด",
      step: "03"
    },
    {
      title: "วัดผลและปรับปรุง",
      description: "วิเคราะห์ผลลัพธ์และปรับปรุงกลยุทธ์อย่างต่อเนื่อง",
      step: "04"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-purple-400 to-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium">
                  📈 Digital Marketing Service
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  การตลาด
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                    ดิจิทัล
                  </span>
                </h1>

                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  เพิ่มยอดขายและขยายธุรกิจด้วยกลยุทธ์การตลาดดิจิทัลที่มีประสิทธิภาพ 
                  ครอบคลุมทุกช่องทางออนไลน์
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-4 text-lg"
                    asChild
                  >
                    <Link href="#packages">ดูแพ็คเกจ</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-4 text-lg"
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
                <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                  <TrendingUp className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-bold">Digital Growth</h3>
                <p className="text-white/90 text-xl max-w-md leading-relaxed">
                  เติบโตอย่างยั่งยืนในยุคดิจิทัล
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              ผลลัพธ์ที่ได้รับ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ดูผลลัพธ์จริงจากลูกค้าที่ใช้บริการการตลาดดิจิทัลของเรา
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const IconComponent = result.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className={`w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto`}>
                        <IconComponent className={`w-8 h-8 ${result.color}`} />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">
                        {result.metric}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {result.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
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
              เราให้บริการการตลาดดิจิทัลครบวงจร ครอบคลุมทุกช่องทางออนไลน์
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-pink-200 dark:hover:border-pink-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 transition-colors">
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

      {/* Strategy Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              กลยุทธ์การทำงาน
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              กระบวนการทำงานที่เป็นระบบเพื่อให้ได้ผลลัพธ์ที่ดีที่สุด
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {strategy.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {strategy.description}
                </p>
              </div>
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
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-pink-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                    🔥 แนะนำ
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{pkg.name}</h3>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">
                        ฿{pkg.price}
                        <span className="text-lg font-normal text-gray-600 dark:text-gray-400">/เดือน</span>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              ความคิดเห็นลูกค้า
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ฟังเสียงจากลูกค้าที่ประสบความสำเร็จด้วยบริการการตลาดดิจิทัลของเรา
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-4xl font-bold">100+</div>
              <div className="text-pink-100">แคมเปญสำเร็จ</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">80+</div>
              <div className="text-pink-100">ลูกค้าพึงพอใจ</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">3+</div>
              <div className="text-pink-100">ปีประสบการณ์</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-pink-100">อัตราความสำเร็จ</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              พร้อมเติบโตในยุคดิจิทัลแล้วหรือยัง?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              ปรึกษาฟรี! ทีมงานของเราพร้อมวิเคราะห์และวางแผนการตลาดที่เหมาะสมกับธุรกิจของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700 font-semibold px-8 py-4 text-lg"
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

export default Marketing
