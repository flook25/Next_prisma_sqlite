import type { Metadata } from "next"
import Settings from './settings'

export const metadata: Metadata = {
    title: "ตั้งค่า | จัดการตั้งค่า",
    description: "ตั้งค่า - จัดการตั้งค่า",
    keywords: ["ตั้งค่า", "จัดการตั้งค่า", "Smart Store", "ร้านค้า", "ตั้งค่า", "ตั้งค่า"],
    openGraph: {
        title: "ตั้งค่า | จัดการตั้งค่า",
        description: "ตั้งค่า - จัดการตั้งค่า",
        url: "https://smartstore.com/admin/settings",
        siteName: "Smart Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "ตั้งค่า | จัดการตั้งค่า",
        description: "ตั้งค่า - จัดการตั้งค่า",
        images: ["https://smartstore.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://smartstore.com/admin/settings",
    },
}

function SettingPage() {
  return (
    <div><Settings /></div>
  )
}

export default SettingPage