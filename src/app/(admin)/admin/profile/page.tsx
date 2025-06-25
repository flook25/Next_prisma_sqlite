import type { Metadata } from "next"
import Profile from "./profile"

export const metadata: Metadata = {
    title: "ข้อมูลส่วนตัว | จัดการข้อมูลส่วนตัว",
    description: "ข้อมูลส่วนตัว - จัดการข้อมูลส่วนตัว",
    keywords: ["ข้อมูลส่วนตัว", "จัดการข้อมูลส่วนตัว", "Smart Store", "ข้อมูลส่วนตัว", "ข้อมูลส่วนตัว"],
    openGraph: {
        title: "ข้อมูลส่วนตัว | จัดการข้อมูลส่วนตัว",
        description: "ข้อมูลส่วนตัว - จัดการข้อมูลส่วนตัว",
        url: "https://smartstore.com/admin/profile",
        siteName: "Smart Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "ข้อมูลส่วนตัว | จัดการข้อมูลส่วนตัว",
        description: "ข้อมูลส่วนตัว - จัดการข้อมูลส่วนตัว",
        images: ["https://smartstore.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://smartstore.com/admin/profile",
    },
}

function ProfilePage() {
  return (
    <div><Profile /></div>
  )
}

export default ProfilePage