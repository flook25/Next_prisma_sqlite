import type { Metadata } from "next"
import PrivacyPolicy from './privacypolicy'

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว | Smart Store",
  description: "นโยบายความเป็นส่วนตัวของร้านค้า Smart Store",
  keywords: ["นโยบายความเป็นส่วนตัว", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "นโยบายความเป็นส่วนตัว | Smart Store",
    description: "นโยบายความเป็นส่วนตัวของร้านค้า Smart Store",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "นโยบายความเป็นส่วนตัว | Smart Store",
    description: "นโยบายความเป็นส่วนตัวของร้านค้า Smart Store",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com/privacy-policy",
  },
}

function PrivacyPolicyPage() {
  return (
    <PrivacyPolicy />
  )
}

export default PrivacyPolicyPage