"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Package2, Menu, LogIn, Sparkles, X, ChevronDown, Globe, Palette, TrendingUp, Monitor, Grid3X3 } from 'lucide-react'
import { ThemeToggleSimple } from '../ui/theme-toggle'

function FrontNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const pathname = usePathname()

  // Helper function to check if link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  // Service menu items
  const serviceItems = [
    {
      title: "บริการหลัก",
      href: "/service",
      description: "ดูบริการทั้งหมดของเรา",
      icon: Grid3X3,
      color: "text-emerald-600"
    },
    {
      title: "ออกแบบเว็บไซต์",
      href: "/service/webdev",
      description: "สร้างเว็บไซต์ที่ทันสมัยและใช้งานง่าย",
      icon: Monitor,
      color: "text-blue-600"
    },
    {
      title: "ออกแบบกราฟฟิก",
      href: "/service/graphic",
      description: "ออกแบบกราฟิกที่สวยงามและโดดเด่น",
      icon: Palette,
      color: "text-purple-600"
    },
    {
      title: "การตลาด",
      href: "/service/marketing",
      description: "กลยุทธ์การตลาดดิจิทัลที่มีประสิทธิภาพ",
      icon: TrendingUp,
      color: "text-pink-600"
    }
  ]

  return (
    <>
      <nav className="w-full border-b-2 border-gradient-to-r from-blue-500 to-purple-600 backdrop-blur-md bg-background/90 z-50 sticky top-0 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Brand Name - ทางซ้าย */}
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <Package2 className="h-10 w-10 text-blue-600 group-hover:text-purple-600 transition-all duration-300 group-hover:scale-110" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <Link 
                href="/" 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent hover:from-purple-600 hover:via-blue-600 hover:to-purple-800 transition-all duration-300"
              >
                Smart Store
              </Link>
            </div>

            {/* Navigation Menu - ตรงกลาง (Desktop) */}
            <div className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList className="gap-1 bg-background/80 backdrop-blur-sm rounded-xl p-2 shadow-inner border border-border/50">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className={`relative px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                          isActive('/') 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                            : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        <span className="relative z-10">หน้าแรก</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className={`relative px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                          isActive('/about') 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                            : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        <span className="relative z-10">เกี่ยวกับเรา</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  {/* Service Dropdown Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={`relative px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                      isActive('/service') 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}>
                      <span className="relative z-10">บริการ</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                        {serviceItems.map((item, index) => {
                          const IconComponent = item.icon
                          const isMainService = item.href === '/service'
                          return (
                            <div key={item.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className={`group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                                    isMainService ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800' : ''
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                                      isMainService 
                                        ? 'from-emerald-100 to-emerald-200 dark:from-emerald-800 dark:to-emerald-700' 
                                        : 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700'
                                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                      <IconComponent className={`w-5 h-5 ${item.color}`} />
                                    </div>
                                    <div className="flex-1">
                                      <div className={`text-sm font-medium leading-none transition-colors duration-300 ${
                                        isMainService 
                                          ? 'text-emerald-700 dark:text-emerald-300 group-hover:text-emerald-800 dark:group-hover:text-emerald-200' 
                                          : 'group-hover:text-blue-600'
                                      }`}>
                                        {item.title}
                                        {isMainService && <span className="ml-2 text-xs bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full">หลัก</span>}
                                      </div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                              {isMainService && index < serviceItems.length - 1 && (
                                <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/contact"
                        className={`relative px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                          isActive('/contact') 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                            : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        <span className="relative z-10">ติดต่อเรา</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop Login Button */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggleSimple />
              <Button 
                asChild 
                variant="default" 
                size="lg" 
                className="gap-2 rounded bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/login">
                  <LogIn className="h-5 w-5" />
                  เข้าสู่ระบบ
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-12 w-12 p-0 text-foreground hover:bg-accent rounded-xl transition-all duration-300 hover:shadow-md"
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
                <span className="sr-only">Toggle mobile menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm dark:bg-black/80"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="fixed inset-x-0 top-0 bg-background/95 backdrop-blur-lg shadow-2xl border-b border-border">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Package2 className="h-8 w-8 text-blue-600" />
                  <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Smart Store
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggleSimple />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-10 w-10 p-0 text-foreground hover:bg-accent rounded-xl"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-4">
              <Link
                href="/"
                className={`flex items-center w-full px-6 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'text-foreground hover:bg-accent'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                หน้าแรก
              </Link>
              
              <Link
                href="/about"
                className={`flex items-center w-full px-6 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  isActive('/about') 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'text-foreground hover:bg-accent'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-4"></span>
                เกี่ยวกับเรา
              </Link>
              
              {/* Mobile Service Menu with Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                  className={`flex items-center justify-between w-full px-6 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    isActive('/service') 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-pink-400 rounded-full mr-4"></span>
                    บริการ
                  </div>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServiceDropdownOpen && (
                  <div className="ml-6 space-y-2">
                    {serviceItems.map((item) => {
                      const IconComponent = item.icon
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center w-full px-6 py-3 text-base font-medium rounded-xl transition-all duration-300 text-foreground hover:bg-accent ${
                            item.href === '/service' ? 'border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : ''
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <IconComponent className={`w-4 h-4 mr-3 ${item.color}`} />
                          {item.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
              
              <Link
                href="/contact"
                className={`flex items-center w-full px-6 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  isActive('/contact') 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'text-foreground hover:bg-accent'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-3 h-3 bg-indigo-400 rounded-full mr-4"></span>
                ติดต่อเรา
              </Link>

              {/* Login Button */}
              <div className="pt-6 border-t border-border">
                <Link
                  href="/login"
                  className="flex items-center justify-center w-full px-6 py-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LogIn className="h-5 w-5 mr-3" />
                  เข้าสู่ระบบ
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FrontNavbar 