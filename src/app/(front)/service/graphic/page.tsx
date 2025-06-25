import type { Metadata } from "next"
import Graphic from "./graphic"

export const metadata: Metadata = {
  title: "ออกแบบกราฟฟิก | Smart Store",
  description: "ออกแบบกราฟิกที่สวยงามและโดดเด่น",
  keywords: ["ออกแบบกราฟฟิก", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "ออกแบบกราฟฟิก | Smart Store",
    description: "ออกแบบกราฟิกที่สวยงามและโดดเด่น",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "ออกแบบกราฟฟิก | Smart Store",
    description: "ออกแบบกราฟิกที่สวยงามและโดดเด่น",
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
    canonical: "https://smartstore.com/service/graphic",
  },
}

function GraphicPage() {
  return <Graphic />
}

export default GraphicPage