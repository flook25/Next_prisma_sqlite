import type { Metadata } from "next"
import Service from './service'

export const metadata: Metadata = {
  title: "บริการ | Smart Store",
  description: "บริการของร้านค้า Smart Store",
  keywords: ["บริการ", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "บริการ | Smart Store",
    description: "บริการของร้านค้า Smart Store",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "บริการ | Smart Store",
    description: "บริการของร้านค้า Smart Store",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com/service",
  },
}

function ServicePage() {
  return <Service />
}

export default ServicePage