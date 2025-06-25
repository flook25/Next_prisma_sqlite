import type { Metadata } from "next";
import AdminLayoutClient from './admin-layout-client';

export const metadata: Metadata = {
  title: "จัดการคลังสินค้า | Smart Store",
  description: "จัดการคลังสินค้า - Smart Store ระบบจัดการคลังสินค้าที่ทันสมัย",
  keywords: ["จัดการคลังสินค้า", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "จัดการคลังสินค้า | Smart Store",
    description: "จัดการคลังสินค้า - Smart Store ระบบจัดการคลังสินค้าที่ทันสมัย",
    url: "https://smartstore.com/admin",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "จัดการคลังสินค้า | Smart Store",
    description: "จัดการคลังสินค้า - Smart Store ระบบจัดการคลังสินค้าที่ทันสมัย",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com/admin",
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>
}
