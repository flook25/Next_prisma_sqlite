import type { Metadata } from "next"
import About from './about'

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | Smart Store",
  description: "เกี่ยวกับเรา",
  keywords: ["เกี่ยวกับเรา", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "เกี่ยวกับเรา | Smart Store",
    description: "เกี่ยวกับเรา",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "เกี่ยวกับเรา | Smart Store",
    description: "เกี่ยวกับเรา",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com/about",
  },
}

function AboutPage() {
  return <About />
}

export default AboutPage