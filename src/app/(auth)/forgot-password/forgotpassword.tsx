"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, ArrowLeft, Check, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

// Type สำหรับข้อมูล forgot password
type ForgotPasswordData = {
  email: string
}

function ForgotPassword() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    // การใช้ useForm hook จาก react-hook-form
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm<ForgotPasswordData>()
  
    // ฟังก์ชันสำหรับจัดการการส่งข้อมูล
    const onSubmit = async (data: ForgotPasswordData) => {
      try {
        // แสดง loading
        Swal.fire({
          title: 'กำลังส่งอีเมล...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          }
        })

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // ปิด loading และแสดงผลสำเร็จ
        Swal.fire({
          title: 'ส่งอีเมลสำเร็จ!',
          text: `เราได้ส่งลิงก์รีเซ็ตรหัสผ่านไปยัง ${data.email}`,
          icon: 'success',
          confirmButtonText: 'ตกลง'
        }).then(() => {
          setIsSubmitted(true)
        })
        
      } catch (error) {
        // แสดงข้อผิดพลาด
        Swal.fire({
          title: 'เกิดข้อผิดพลาด',
          text: 'ไม่สามารถส่งอีเมลได้ กรุณาลองใหม่อีกครั้ง',
          icon: 'error',
          confirmButtonText: 'ตกลง'
        })
      }
    }
  
    if (isSubmitted) {
      const submittedEmail = getValues('email')
      return (
        <>
          <CardHeader className="text-center pb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full flex items-center justify-center mb-6">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">ตรวจสอบอีเมลของคุณ</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 text-lg">
              เราได้ส่งลิงก์รีเซ็ตรหัสผ่านไปยัง<br />
              <span className="font-semibold text-blue-600 dark:text-blue-400">{submittedEmail}</span>
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-100 dark:border-blue-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">ไม่ได้รับอีเมล? ลองตรวจสอบในโฟลเดอร์สแปม</p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false)
                    reset()
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  ส่งอีกครั้ง
                </button>
              </div>
  
              <div className="text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  กลับไปหน้าเข้าสู่ระบบ
                </Link>
              </div>
            </div>
          </CardContent>
        </>
      )
    }

 return (
    <>
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">ลืมรหัสผ่าน?</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400 text-lg">
          ไม่ต้องกังวล เราจะส่งคำแนะนำการรีเซ็ตให้คุณ
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
                  required: 'กรุณากรอกอีเมล',
                  validate: {
                    isEmail: value => /^\S+@\S+\.\S+$/.test(value) || 'กรุณากรอกอีเมลที่ถูกต้อง'
                  }
                })}
                id="email"
                name="email"
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-700"
                placeholder="กรอกอีเมลของคุณ"
              />
              {errors.email && (
                <span className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.email.message}</span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            ส่งคำแนะนำการรีเซ็ต
          </Button>
        </form>

        {/* Back to Login */}
        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            กลับไปหน้าเข้าสู่ระบบ
          </Link>
        </div>
      </CardContent>
    </>
  )
}

export default ForgotPassword