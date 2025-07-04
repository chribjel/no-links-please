import type { Metadata } from "next"
import ClientPage from "./clientpage"

export const metadata: Metadata = {
  title: "Delinkify - Remove Auto-Linking from URLs with Zero-Width Spaces",
  description:
    "Insert zero-width spaces in URLs to prevent auto-linking. Perfect for sharing URLs without creating clickable links on social media and messaging platforms.",
  openGraph: {
    title: "Delinkify - Remove Auto-Linking from URLs",
    description: "Insert zero-width spaces in URLs to prevent auto-linking on social media and messaging platforms",
    url: "https://delinkify.com",
    siteName: "Delinkify",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Delinkify - Remove Auto-Linking from URLs with Zero-Width Spaces",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delinkify - Remove Auto-Linking from URLs",
    description: "Insert zero-width spaces in URLs to prevent auto-linking on social media and messaging platforms",
    images: ["/api/og"],
  },
  keywords: [
    "delinkify",
    "remove links",
    "zero-width space",
    "prevent auto-linking",
    "URL tool",
    "social media",
    "messaging",
  ],
  authors: [{ name: "chribjel", url: "https://github.com/chribjel" }],
  creator: "chribjel",
  robots: "index, follow",
  alternates: {
    canonical: "https://delinkify.com",
  },
}

export default function Page() {
  return <ClientPage />
}
