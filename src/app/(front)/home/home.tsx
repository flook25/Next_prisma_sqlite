"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  BarChart3,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Clock,
  Star,
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: Package,
      title: "Smart Inventory Management",
      description:
        "Track your products in real-time with automated stock alerts and comprehensive analytics.",
      color: "blue",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Get insights into your business with detailed reports and performance metrics.",
      color: "green",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security ensures your data is always protected and accessible.",
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description:
        "Access your inventory from anywhere with our fully responsive design.",
      color: "orange",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description:
        "Scale your business efficiently with our powerful inventory optimization tools.",
      color: "red",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with role-based access and team management features.",
      color: "indigo",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Products Managed" },
    { number: "500+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Store Manager",
      company: "TechMart",
      content:
        "This inventory system transformed our business operations. We reduced stock-outs by 80% and increased efficiency dramatically.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Mike Chen",
      role: "Operations Director",
      company: "ElectroPlus",
      content:
        "The real-time analytics and automated alerts have saved us thousands in inventory costs. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Lisa Wang",
      role: "Business Owner",
      company: "GadgetWorld",
      content:
        "Easy to use, powerful features, and excellent support. This is exactly what we needed for our growing business.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&crop=center"
            alt="Modern warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-purple-900/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-green-400/20 rounded-full animate-pulse delay-500"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-2">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              #1 Inventory Management System
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-32">
              Smart
              <span className="inline-block ml-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Inventory
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Transform your business with our powerful inventory management
              system. Track products and optimize your operations in real-time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 border-0 font-semibold transition-all duration-300 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                asChild
              >
                <Link href="/register">Start Free Trial</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 border-0 font-semibold transition-all duration-300 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                asChild
              >
                <Link href="#features">Watch Demo</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Powerful Features for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {" "}
                Modern Business
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your inventory efficiently and grow
              your business faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-500 border-blue-200",
                green:
                  "bg-green-100 text-green-600 group-hover:bg-green-500 border-green-200",
                purple:
                  "bg-purple-100 text-purple-600 group-hover:bg-purple-500 border-purple-200",
                orange:
                  "bg-orange-100 text-orange-600 group-hover:bg-orange-500 border-orange-200",
                red: "bg-red-100 text-red-600 group-hover:bg-red-500 border-red-200",
                indigo:
                  "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-500 border-indigo-200",
              };

              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-2 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center transition-all duration-300 ${
                        colorClasses[feature.color as keyof typeof colorClasses]
                      }`}
                    >
                      <Icon className="w-8 h-8 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold mt-4 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  See It in Action
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Watch how our inventory management system streamlines your
                  operations and provides real-time insights into your business
                  performance.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Real-time inventory tracking
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Automated low stock alerts
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Comprehensive analytics dashboard
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Multi-location inventory management
                  </span>
                </div>
              </div>

              <Button size="lg" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white border-0 dark:bg-blue-500 dark:hover:bg-blue-600 font-semibold transition-all duration-300" asChild>
                <Link href="/auth/register">Try It Free</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                  alt="Dashboard Preview"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold">Live Dashboard</h4>
                  <p className="text-gray-300">Real-time inventory insights</p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 transform rotate-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium dark:text-white">Sales +25%</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 transform -rotate-3">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium dark:text-white">1,234 Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              What Our Customers Say
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of businesses that trust our inventory management
              system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-10"></div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join thousands of businesses that have revolutionized their
              inventory management. Start your free trial today and see the
              difference in just 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 border-0 font-semibold transition-all duration-300 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                asChild
              >
                <Link href="/register">Start Free Trial</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                  className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 border-0 font-semibold transition-all duration-300 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                  asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-blue-200">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
