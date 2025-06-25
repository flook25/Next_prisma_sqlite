import type { Metadata } from "next"
import ForgotPassword from "./forgotpassword"

export const metadata: Metadata = {
  title: "ลืมรหัสผ่าน | Smart Store",
  description: "ลืมรหัสผ่านของร้านค้า Smart Store",
  keywords: ["ลืมรหัสผ่าน", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "ลืมรหัสผ่าน | Smart Store",
    description: "ลืมรหัสผ่านของร้านค้า Smart Store",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "ลืมรหัสผ่าน | Smart Store",
    description: "ลืมรหัสผ่านของร้านค้า Smart Store",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com/forgot-password",
  },
}

function ForgotPasswordPage() {
  return (
    <ForgotPassword />
  )
}

export default ForgotPasswordPage