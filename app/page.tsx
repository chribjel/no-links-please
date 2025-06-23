import type { Metadata } from "next"
import ClientPage from "./clientpage"

export const metadata: Metadata = {
  title: "No Links Please - Delinkify URLs with Zero-Width Spaces",
  description:
    "Insert zero-width spaces in URLs to prevent auto-linking. Perfect for sharing URLs without creating clickable links.",
  openGraph: {
    title: "No Links Please - Delinkify URLs",
    description: "Insert zero-width spaces in URLs to prevent auto-linking",
    url: "https://nolinksplease.com",
    siteName: "No Links Please",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "No Links Please - Delinkify URLs with Zero-Width Spaces",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Links Please - Delinkify URLs",
    description: "Insert zero-width spaces in URLs to prevent auto-linking",
    images: ["/api/og"],
  },
}

export default function Page() {
  return <ClientPage />
}
