import type { Metadata } from "next"
import Marketing from './marketing'

export const metadata: Metadata = {
  title: 'การตลาดดิจิทัล | Smart Store',
  description: 'บริการการตลาดดิจิทัลที่มีประสิทธิภาพ เพิ่มยอดขายและขยายธุรกิจ ครอบคลุมทุกช่องทางออนไลน์',
  openGraph: {
    title: 'การตลาดดิจิทัล | Smart Store',
    description: 'บริการการตลาดดิจิทัลที่มีประสิทธิภาพ เพิ่มยอดขายและขยายธุรกิจ ครอบคลุมทุกช่องทางออนไลน์',
    url: 'https://smartstore.com',
    siteName: 'Smart Store',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'การตลาดดิจิทัล | Smart Store',
    description: 'บริการการตลาดดิจิทัลที่มีประสิทธิภาพ เพิ่มยอดขายและขยายธุรกิจ ครอบคลุมทุกช่องทางออนไลน์',
    images: ['https://smartstore.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://smartstore.com/service/marketing',
  },
}

function MarketingPage() {
    return <Marketing />
}

export default MarketingPage
