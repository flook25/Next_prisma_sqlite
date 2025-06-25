import Home from './home/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "หน้าแรก | Smart Store",
  description: "หน้าแรกของร้านค้า Smart Store",
  keywords: ["หน้าแรก", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "หน้าแรก | Smart Store",
    description: "หน้าแรกของร้านค้า Smart Store",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "หน้าแรก | Smart Store",
    description: "หน้าแรกของร้านค้า Smart Store",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com",
  },
}

export default function Front() {
  return (
    <Home />
  )
}