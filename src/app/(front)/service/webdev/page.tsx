import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ออกแบบเว็บไซต์ | Smart Store",
  description: "ออกแบบเว็บไซต์ที่ทันสมัยและใช้งานง่าย",
  keywords: ["ออกแบบเว็บไซต์", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "ออกแบบเว็บไซต์ | Smart Store",
    description: "ออกแบบเว็บไซต์ที่ทันสมัยและใช้งานง่าย",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "ออกแบบเว็บไซต์ | Smart Store",
    description: "ออกแบบเว็บไซต์ที่ทันสมัยและใช้งานง่าย",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://smartstore.com/service/webdev",
  },
}

import WebDev from "./webdev"

function WebDevPage() {
  return <WebDev />
}

export default WebDevPage