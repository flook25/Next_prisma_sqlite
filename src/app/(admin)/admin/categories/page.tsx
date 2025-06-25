import type { Metadata } from "next";
import Categories from './categories'

export const metadata: Metadata = {
    title: "หมวดหมู่ | จัดการคลังสินค้า",
    description: "หมวดหมู่ - จัดการคลังสินค้า",
    keywords: ["หมวดหมู่", "จัดการคลังสินค้า", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
    openGraph: {
        title: "หมวดหมู่ | จัดการคลังสินค้า",
        description: "หมวดหมู่ - จัดการคลังสินค้า",
        url: "https://smartstore.com/admin/categories",
        siteName: "Smart Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "หมวดหมู่ | จัดการคลังสินค้า",
        description: "หมวดหมู่ - จัดการคลังสินค้า",
        images: ["https://smartstore.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://smartstore.com/admin/categories",
    },
}

function CategoryPage() {
  return (
    <div>
        <Categories />
    </div>
  )
}

export default CategoryPage