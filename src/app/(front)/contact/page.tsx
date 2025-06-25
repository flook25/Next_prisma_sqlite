import type { Metadata } from "next"
import Contact from './contact'

export const metadata: Metadata = {
  title: "ติดต่อเรา | Smart Store",
  description: "ติดต่อเรา - Smart Store พร้อมให้บริการและตอบคำถามของคุณ",
  keywords: ["ติดต่อเรา", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "ติดต่อเรา | Smart Store",
    description: "ติดต่อเรา - Smart Store พร้อมให้บริการและตอบคำถามของคุณ",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "ติดต่อเรา | Smart Store",
    description: "ติดต่อเรา - Smart Store พร้อมให้บริการและตอบคำถามของคุณ",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com/contact",
  },
}

export default function ContactPage() {
  return <Contact />
}