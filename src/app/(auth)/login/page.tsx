import type { Metadata } from "next"
import Login from "./login"

export const metadata: Metadata = {
  title: "ลงชื่อเข้าใช้ | Smart Store",
  description: "ลงชื่อเข้าใช้ของร้านค้า Smart Store",
  keywords: ["ลงชื่อเข้าใช้", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "ลงชื่อเข้าใช้ | Smart Store",
    description: "ลงชื่อเข้าใช้ของร้านค้า Smart Store",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "ลงชื่อเข้าใช้ | Smart Store",
    description: "ลงชื่อเข้าใช้ของร้านค้า Smart Store",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com/login",
  },
}

function LoginPage() {
  return (
    <Login />
  )
}

export default LoginPage