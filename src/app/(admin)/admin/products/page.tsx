import type { Metadata } from "next";
import Products from './products'

export const metadata: Metadata = {
    title: "สินค้า | จัดการคลังสินค้า",
    description: "สินค้า - จัดการคลังสินค้า",
    keywords: ["สินค้า", "จัดการคลังสินค้า", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
    openGraph: {
        title: "สินค้า | จัดการคลังสินค้า",
        description: "สินค้า - จัดการคลังสินค้า",
        url: "https://smartstore.com/admin/products",
        siteName: "Smart Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "สินค้า | จัดการคลังสินค้า",
        description: "สินค้า - จัดการคลังสินค้า",
        images: ["https://smartstore.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://smartstore.com/admin/products",
    },
}

function ProductsPage() {
  return (
    <div>
        <Products />
    </div>
  )
}

export default ProductsPage