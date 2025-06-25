import type { Metadata } from "next"
import Register from "./register"

export const metadata: Metadata = {
  title: "สมัครสมาชิก | Smart Store",
  description: "สมัครสมาชิกของร้านค้า Smart Store",
  keywords: ["สมัครสมาชิก", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "สมัครสมาชิก | Smart Store",
    description: "สมัครสมาชิกของร้านค้า Smart Store",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "สมัครสมาชิก | Smart Store",
    description: "สมัครสมาชิกของร้านค้า Smart Store",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com/register",
  },
}

function RegisterPage() {
  return (
    <Register />
  )
}

export default RegisterPage