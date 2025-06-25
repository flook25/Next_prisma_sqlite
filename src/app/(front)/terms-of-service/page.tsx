import type { Metadata } from "next"
import TermsOfService from './termofservice'

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้งาน | Smart Store",
  description: "ข้อกำหนดการใช้งานของร้านค้า Smart Store",
  keywords: ["ข้อกำหนดการใช้งาน", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "ข้อกำหนดการใช้งาน | Smart Store",
    description: "ข้อกำหนดการใช้งานของร้านค้า Smart Store",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "ข้อกำหนดการใช้งาน | Smart Store",
    description: "ข้อกำหนดการใช้งานของร้านค้า Smart Store",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com/terms-of-service",
  },
}

function TermsOfServicePage() {
  return (
    <TermsOfService />
  )
}

export default TermsOfServicePage