import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Smart Web by Visdak",
    template: "%s | Smart Web",
  },
  description: "Professional web solutions for modern businesses",
  keywords: ["web development", "business website", "professional web design"],
  authors: [{ name: "Visdak" }],
  creator: "Visdak",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Smart Web by Visdak",
    description: "Professional web solutions for modern businesses",
    siteName: "Smart Web",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smart Web by Visdak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Web by Visdak",
    description: "Professional web solutions for modern businesses",
    creator: "@visdak",
    images: ["https://your-domain.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://your-domain.com",
    languages: {
      "en-US": "https://your-domain.com",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
};

// You can also add JSON-LD structured data
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Smart Web by Visdak",
  url: "https://your-domain.com",
  logo: "https://your-domain.com/logo.png",
  sameAs: [
    "https://twitter.com/visdak",
    "https://linkedin.com/company/visdak",
    "https://github.com/visdak",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-123-456-7890",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
