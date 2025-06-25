import type { Metadata } from "next"
import CookiePolicy from './cookiepolicy'

export const metadata: Metadata = {
  title: "นโยบายคุกกี้ | Smart Store",
  description: "นโยบายคุกกี้ของร้านค้า Smart Store",
  keywords: ["นโยบายคุกกี้", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "นโยบายคุกกี้ | Smart Store",
    description: "นโยบายคุกกี้ของร้านค้า Smart Store",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "นโยบายคุกกี้ | Smart Store",
    description: "นโยบายคุกกี้ของร้านค้า Smart Store",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com/cookie-policy",
  },
}

function CookiePolicyPage() {
  return (
    <CookiePolicy />
  )
}

export default CookiePolicyPage