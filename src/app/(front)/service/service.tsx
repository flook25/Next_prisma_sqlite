"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Monitor, 
  Smartphone, 
  Palette, 
  Server, 
  BarChart, 
  Megaphone,
  Users,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Zap
} from 'lucide-react'

function Service() {
  useEffect(() => {
    document.title = "บริการของเรา | Smart Store";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "บริการพัฒนาเว็บไซต์ แอปพลิเคชัน และโซลูชันดิจิทัลครบวงจร");
    }
  }, []);

  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      subtitle: "Modern websites that perform",
      description: "Custom websites built with the latest technologies. From simple landing pages to complex web applications.",
      features: ["React, Next.js, Vue.js", "Responsive Design", "SEO Optimized", "Performance First"],
      color: "emerald",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      hoverBg: "group-hover:bg-emerald-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-emerald-200",
      price: "Starting from $2,999"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      subtitle: "iOS & Android applications",
      description: "Native and cross-platform mobile applications that provide exceptional user experiences.",
      features: ["React Native, Flutter", "Native Performance", "App Store Ready", "Cross-Platform"],
      color: "blue",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-blue-200",
      price: "Starting from $4,999"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "Beautiful, functional interfaces",
      description: "User-centered design that combines aesthetics with functionality for optimal user experience.",
      features: ["User Research & Testing", "Wireframes & Prototypes", "Brand Identity", "Design Systems"],
      color: "purple",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      hoverBg: "group-hover:bg-purple-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-purple-200",
      price: "Starting from $1,999"
    },
    {
      icon: Server,
      title: "Backend Development",
      subtitle: "Robust server solutions",
      description: "Scalable backend systems and APIs that power your applications with reliability and performance.",
      features: ["Node.js, Python, PHP", "Database Design", "API Development", "Cloud Integration"],
      color: "orange",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      hoverBg: "group-hover:bg-orange-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-orange-200",
      price: "Starting from $3,499"
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      subtitle: "Insights that drive decisions",
      description: "Transform your data into actionable insights with comprehensive analytics and visualization solutions.",
      features: ["Data Visualization", "Business Intelligence", "Custom Dashboards", "Real-time Analytics"],
      color: "red",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      hoverBg: "group-hover:bg-red-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-red-200",
      price: "Starting from $2,499"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      subtitle: "Grow your online presence",
      description: "Strategic digital marketing campaigns that increase visibility and drive conversions.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Performance Tracking"],
      color: "indigo",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      hoverBg: "group-hover:bg-indigo-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-indigo-200",
      price: "Starting from $1,499"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We deep-dive into your business needs, goals, and target audience to create a comprehensive project strategy.",
      icon: Users,
      color: "emerald"
    },
    {
      number: "02", 
      title: "Design & Planning",
      description: "Our team creates detailed wireframes, prototypes, and technical specifications aligned with your vision.",
      icon: Palette,
      color: "blue"
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We build your solution using cutting-edge technologies with rigorous testing at every stage.",
      icon: Monitor,
      color: "purple"
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing maintenance to ensure optimal performance.",
      icon: Zap,
      color: "orange"
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Expert Team",
      description: "Seasoned professionals with years of experience in cutting-edge technologies."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on schedule without compromising quality."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure bug-free solutions."
    },
    {
      icon: CheckCircle,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for your peace of mind."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-900/80 to-slate-900/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-400/20 rounded-full animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium">
                  🚀 Professional Services
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Our
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                    Services
                  </span>
                </h1>
                
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  From innovative web development to cutting-edge mobile apps, we deliver 
                  comprehensive digital solutions that transform your business vision into reality.
                </p>
              </div>

            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative flex items-center justify-center">
              <div className="text-white text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                  <Star className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-bold">Premium Quality</h3>
                <p className="text-white/90 text-xl max-w-md leading-relaxed">
                  Excellence delivered in every project we undertake
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth and maximize your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className={`group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 ${service.borderColor} dark:hover:border-opacity-50 hover:-translate-y-2 border-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm dark:border-gray-700 hover:bg-gradient-to-br hover:from-${service.color}-50 hover:to-${service.color}-100 dark:hover:from-${service.color}-900/20 dark:hover:to-${service.color}-800/20`}>
                  <CardHeader className="text-center space-y-4">
                    <div className={`w-20 h-20 ${service.iconBg} dark:bg-gray-700 rounded-full mx-auto flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-${service.color}-400 group-hover:to-${service.color}-600 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-${service.color}-500/50`}>
                      <Icon className={`w-10 h-10 ${service.iconColor} dark:text-gray-300 group-hover:text-${service.color}-800 dark:group-hover:text-${service.color}-100 transition-all duration-300 group-hover:scale-110`} />
                    </div>
                    <div>
                      <CardTitle className={`text-2xl dark:text-white group-hover:text-${service.color}-700 dark:group-hover:text-${service.color}-300 transition-colors duration-300`}>{service.title}</CardTitle>
                      <CardDescription className={`text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-${service.color}-600 dark:group-hover:text-${service.color}-200 transition-colors duration-300`}>
                        {service.subtitle}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className={`text-gray-600 dark:text-gray-300 text-center leading-relaxed group-hover:text-${service.color}-700 dark:group-hover:text-${service.color}-200 transition-colors duration-300`}>
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-center text-sm text-gray-600 dark:text-gray-300 group-hover:text-${service.color}-700 dark:group-hover:text-${service.color}-200 transition-colors duration-300`}>
                          <CheckCircle className={`w-4 h-4 ${service.iconColor} dark:text-emerald-400 group-hover:text-${service.color}-600 dark:group-hover:text-${service.color}-400 mr-3 flex-shrink-0 transition-colors duration-300`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className={`text-lg font-bold ${service.iconColor} dark:text-emerald-400 group-hover:text-${service.color}-600 dark:group-hover:text-${service.color}-400 text-center transition-colors duration-300`}>
                        {service.price}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with creative innovation to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="group hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center dark:bg-gray-700 dark:border-gray-600">
                  <CardHeader className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl dark:text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${step.color}-400 to-${step.color}-600`}></div>
                  <CardHeader className="text-center space-y-4">
                    <div className="relative">
                      <div className={`w-20 h-20 bg-${step.color}-100 dark:bg-${step.color}-900/30 rounded-full mx-auto flex items-center justify-center group-hover:bg-${step.color}-500 transition-colors duration-300`}>
                        <Icon className={`w-10 h-10 text-${step.color}-600 dark:text-${step.color}-400 group-hover:text-white transition-colors`} />
                      </div>
                      <div className={`absolute -top-2 -right-2 w-8 h-8 bg-${step.color}-500 text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                        {step.number}
                      </div>
                    </div>
                    <CardTitle className="text-xl dark:text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Let's discuss your project and create a customized solution that drives real results. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-white text-emerald-600 hover:bg-emerald-50 border-0 font-semibold transition-all duration-300 shadow-xl" 
                asChild
              >
                <Link href="/contact">Request Free Quote</Link>
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-white text-emerald-600 hover:bg-emerald-50 border-0 font-semibold transition-all duration-300 shadow-xl" 
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service