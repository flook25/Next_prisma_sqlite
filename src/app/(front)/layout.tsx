import type { Metadata } from "next"
import Navbar from "@/components/front/Navbar"
import Footer from "@/components/front/Footer"

export const metadata: Metadata = {
    title: "Smart Store",
    description: "Smart Store",
}

export default function FrontLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}