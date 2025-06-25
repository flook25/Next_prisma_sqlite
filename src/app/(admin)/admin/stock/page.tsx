import type { Metadata } from "next";
import Stock from './stock'

export const metadata: Metadata = {
    title: "สต็อก | จัดการคลังสินค้า",
    description: "สต็อก - จัดการคลังสินค้า",
    keywords: ["สต็อก", "จัดการคลังสินค้า", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
    openGraph: {
        title: "สต็อก | จัดการคลังสินค้า",
        description: "สต็อก - จัดการคลังสินค้า",
        url: "https://smartstore.com/admin/stock",
        siteName: "Smart Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "สต็อก | จัดการคลังสินค้า",
        description: "สต็อก - จัดการคลังสินค้า",
        images: ["https://smartstore.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://smartstore.com/admin/stock",
    },
}

function StockPage() {
  return (
    <div>
        <Stock />
    </div>
  )
}

export default StockPage