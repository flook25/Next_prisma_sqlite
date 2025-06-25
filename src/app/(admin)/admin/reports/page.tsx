import type { Metadata } from "next";
import Reports from './reports'

export const metadata: Metadata = {
    title: "รายงาน | จัดการรายงาน",
    description: "รายงาน - จัดการรายงาน",
    keywords: ["รายงาน", "จัดการรายงาน", "Smart Store", "ร้านค้า", "รายงาน", "รายงาน"],
    openGraph: {
        title: "รายงาน | จัดการรายงาน",
        description: "รายงาน - จัดการรายงาน",
        url: "https://smartstore.com/admin/reports",
        siteName: "Smart Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "รายงาน | จัดการรายงาน",
        description: "รายงาน - จัดการรายงาน",
        images: ["https://smartstore.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://smartstore.com/admin/reports",
    },
}


function ReportPage() {
  return (
    <div>
        <Reports />
    </div>
  )
}

export default ReportPage