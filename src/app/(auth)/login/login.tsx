"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EyeOff, Mail, Lock, ArrowRight, Eye } from "lucide-react";
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { LoginData } from "@/types/auth";

function Login() {

    // สร้างตัวแปร state สำหรับแสดงรหัสผ่าน
    // showPassword คือชื่อ state
    // setShowPassword คือฟังก์ชันสำหรับเปลี่ยนค่า state
    const [showPassword, setShowPassword] = useState(false)

    // การใช้ useForm hook จาก react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>()

    // ฟังก์ชันสำหรับจัดการการส่งข้อมูล
    const onSubmit = async (data: LoginData) => {
        if(data.email == "example@email.com" && data.password == "123456"){
            // ถ้าเข้าสู่ระบบสำเร็จ
            Swal.fire({
              title: 'เข้าสู่ระบบสำเร็จ',
              text: 'ยินดีต้อนรับกลับ!',
              icon: 'success',
              confirmButtonText: 'ตกลง'
            }).then(() => {
              window.location.href = '/admin/dashboard'
            })
          } else {
            // ถ้าเข้าสู่ระบบไม่สำเร็จ
            Swal.fire({
              title: 'เข้าสู่ระบบไม่สำเร็จ',
              text: 'กรุณาตรวจสอบข้อมูลอีกครั้ง',
              icon: 'error',
              confirmButtonText: 'ตกลง'
            })
        }
    }

  return (
    <>
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">ยินดีต้อนรับกลับ</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400 text-lg">
          เข้าสู่ระบบเพื่อจัดการสินค้าคลังของคุณ
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              อีเมล
            </label>
            <div className="relative">
              <input
                {...register('email', { 
                  required: 'กรุณากรอกอีเมล' ,
                  validate: {
                    isEmail: value => /^\S+@\S+\.\S+$/.test(value) || 'กรุณากรอกอีเมลที่ถูกต้อง'
                  }
                })}
                id="email"
                name="email"
                type="text"
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-700"
                placeholder="example@email.com"
              />
              {errors.email && (
                <span id="email-error" className="text-red-500 dark:text-red-400 text-sm mt-1 block" role="alert">{errors.email.message}</span>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Lock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              รหัสผ่าน
            </label>
            <div className="relative">
              <input
                {...register('password', { 
                  required: 'กรุณากรอกรหัสผ่าน',
                  minLength: {
                    value: 6,
                    message: 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'
                  }
                })}
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                aria-describedby={errors.password ? "password-error" : undefined}
                className="w-full h-[48px] px-4 pr-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-700 leading-none"
                placeholder="123456"
              />
              <button
                type="button"
                aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
                className="absolute right-3 top-[12px] text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors w-6 h-6 flex items-center justify-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
              {errors.password && (
                <span id="password-error" className="text-red-500 dark:text-red-400 text-sm mt-1 block" role="alert">{errors.password.message}</span>
              )}
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer min-h-[44px]">
              <input
                type="checkbox"
                aria-describedby="remember-me-label"
                className="h-4 w-4 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 border-gray-300 dark:border-gray-600 rounded transition-colors bg-white dark:bg-gray-700"
              />
              <span id="remember-me-label" className="ml-3 text-sm text-gray-600 dark:text-gray-400">จดจำการเข้าสู่ระบบ</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors min-h-[44px] flex items-center px-2"
            >
              ลืมรหัสผ่าน?
            </Link>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
          >
            เข้าสู่ระบบ
            <ArrowRight className="h-5 w-5" />
          </Button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
          <span className="px-4 text-sm text-gray-500 dark:text-gray-400 font-medium">หรือเข้าสู่ระบบด้วย</span>
          <div className="flex-1 border-t border-gray-200 dark:border-gray-600"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            type="button"
            aria-label="เข้าสู่ระบบด้วย Google"
            className="w-full py-3 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 rounded-xl transition-all duration-300 hover:shadow-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white min-h-[48px]"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </Button>
          <Button 
            variant="outline" 
            type="button"
            aria-label="เข้าสู่ระบบด้วย Facebook"
            className="w-full py-3 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 rounded-xl transition-all duration-300 hover:shadow-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white min-h-[48px]"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </Button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <span className="text-gray-600 dark:text-gray-400">
            ยังไม่มีบัญชี?{' '}
            <Link
              href="/register"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors min-h-[44px] inline-flex items-center px-1"
            >
              สมัครสมาชิก
            </Link>
          </span>
        </div>
      </CardContent>
    </>
  );
}

export default Login
