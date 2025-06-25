"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Globe, 
  Code, 
  Smartphone, 
  Zap, 
  Shield, 
  Search, 
  Palette, 
  Database,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react'

function WebDev() {
  const features = [
    {
      icon: Code,
      title: "เทคโนโลยีทันสมัย",
      description: "ใช้เทคโนโลยีล่าสุด React, Next.js, TypeScript เพื่อประสิทธิภาพสูงสุด",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "ออกแบบให้ใช้งานได้ดีทุกอุปกรณ์ มือถือ แท็บเล็ต และคอมพิวเตอร์",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      icon: Zap,
      title: "โหลดเร็ว",
      description: "เว็บไซต์โหลดเร็วด้วยเทคนิค optimization และ CDN",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
    },
    {
      icon: Shield,
      title: "ความปลอดภัย",
      description: "ระบบรักษาความปลอดภัยระดับสูง SSL, HTTPS, และการป้องกัน Cyber Attack",
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900/30"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "เพิ่มโอกาสติดอันดับ Google ด้วยเทคนิค SEO ที่มีประสิทธิภาพ",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      icon: Database,
      title: "ฐานข้อมูลที่เสถียร",
      description: "ระบบจัดการฐานข้อมูลที่มีประสิทธิภาพและปลอดภัย",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30"
    }
  ]

  const packages = [
    {
      name: "Basic",
      price: "15,000",
      description: "เหมาะสำหรับธุรกิจเริ่มต้น",
      features: [
        "หน้าเว็บ 5 หน้า",
        "Responsive Design",
        "ฟอร์มติดต่อ",
        "Google Maps",
        "SSL Certificate",
        "รองรับ 1 ปี"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional",
      price: "35,000",
      description: "เหมาะสำหรับธุรกิจขนาดกลาง",
      features: [
        "หน้าเว็บ 10 หน้า",
        "ระบบจัดการเนื้อหา (CMS)",
        "ระบบสมาชิก",
        "ระบบค้นหา",
        "SEO Optimization",
        "Analytics Dashboard",
        "รองรับ 2 ปี"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "75,000",
      description: "เหมาะสำหรับธุรกิจขนาดใหญ่",
      features: [
        "หน้าเว็บไม่จำกัด",
        "ระบบ E-commerce",
        "ระบบชำระเงิน",
        "Multi-language",
        "API Integration",
        "Advanced Security",
        "24/7 Support",
        "รองรับ 3 ปี"
      ],
      popular: false,
      color: "from-emerald-500 to-teal-500"
    }
  ]

  const testimonials = [
    {
      name: "คุณสมชาย ใจดี",
      company: "ABC Company",
      text: "เว็บไซต์ที่ได้รับมีคุณภาพเยี่ยม โหลดเร็ว และใช้งานง่าย ลูกค้าเพิ่มขึ้น 200%",
      rating: 5
    },
    {
      name: "คุณสมหญิง รักงาน",
      company: "XYZ Store",
      text: "ทีมงานมืออาชีพ ให้คำปรึกษาดี และส่งงานตรงเวลา แนะนำเลยครับ",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium">
                  💻 Web Development Service
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  ออกแบบ
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    เว็บไซต์
                  </span>
                </h1>

                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  สร้างเว็บไซต์ที่ทันสมัย รวดเร็ว และใช้งานง่าย 
                  ด้วยเทคโนโลยีล่าสุดและทีมงานมืออาชีพ
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
                    asChild
                  >
                    <Link href="#packages">ดูแพ็คเกจ</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
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
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                  <Globe className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-bold">Modern Web</h3>
                <p className="text-white/90 text-xl max-w-md leading-relaxed">
                  เทคโนโลยีล่าสุดสำหรับธุรกิจของคุณ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              ทำไมต้องเลือกเรา?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              เราให้บริการออกแบบเว็บไซต์ด้วยมาตรฐานสากลและเทคโนโลยีที่ทันสมัย
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {feature.description}
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

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white dark:bg-gray-800">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              ความคิดเห็นลูกค้า
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ฟังเสียงจากลูกค้าที่ไว้วางใจให้เราดูแลเว็บไซต์ของพวกเขา
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-4xl font-bold">200+</div>
              <div className="text-blue-100">โปรเจ็คสำเร็จ</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">150+</div>
              <div className="text-blue-100">ลูกค้าพึงพอใจ</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-blue-100">ปีประสบการณ์</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-blue-100">ซัพพอร์ต</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              พร้อมเริ่มต้นแล้วหรือยัง?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              ปรึกษาฟรี! ทีมงานของเราพร้อมให้คำแนะนำและวางแผนเว็บไซต์ที่เหมาะสมกับธุรกิจของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-semibold px-8 py-4 text-lg"
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

export default WebDev
