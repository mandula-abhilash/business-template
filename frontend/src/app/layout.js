import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from "@/lib/analytics";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Optimize font loading with display: optional for better CLS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
  preload: true,
  adjustFontFallback: true,
});

// Move viewport and themeColor to their own export
export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Pre-compute metadata to avoid runtime computation
export const metadata = {
  ...siteConfig.metadata,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.metadata.title.default,
    description: siteConfig.metadata.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title.default,
    description: siteConfig.metadata.description,
    images: [siteConfig.ogImage],
  },
  manifest: "/manifest.json",
};

// Pre-compute JSON-LD to avoid runtime computation
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: Object.values(siteConfig.links),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    contactType: "customer service",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Resource hints */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* PWA meta tags */}
        <meta name="application-name" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Defer non-critical scripts */}
        <GoogleAnalytics measurementId={siteConfig.analytics.googleId} />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-[88px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
