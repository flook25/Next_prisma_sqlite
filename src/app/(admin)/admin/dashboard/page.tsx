import type { Metadata } from "next";
import Dashboard from "./dashboard"

export const metadata: Metadata = {
    title: "หน้าแดชบอร์ด | จัดการคลังสินค้า",
    description: "หน้าแดชบอร์ด - จัดการคลังสินค้า",
    keywords: ["หน้าแดชบอร์ด", "จัดการคลังสินค้า", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
    openGraph: {
        title: "หน้าแดชบอร์ด | จัดการคลังสินค้า",
        description: "หน้าแดชบอร์ด - จัดการคลังสินค้า",
        url: "https://smartstore.com/admin/dashboard",
        siteName: "Smart Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "หน้าแดชบอร์ด | จัดการคลังสินค้า",
        description: "หน้าแดชบอร์ด - จัดการคลังสินค้า",
        images: ["https://smartstore.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://smartstore.com/admin/dashboard",
    },
}

function DashboardPage() {
  return (
    <div>
        <Dashboard />
    </div>
  )
}

export default DashboardPage