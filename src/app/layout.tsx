import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import CommandPalette from '@/components/command-palette'
import { ThemeProvider } from '@/components/theme-provider'
import VisitorCounter from '@/components/visitor-counter'
import A11yControls from '@/components/a11y-controls'
import NextTopLoader from 'nextjs-toploader'
import ScrollProgress from '@/components/scroll-progress'

// Add preconnect for Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  preload: true,
  display: 'swap',
})

// Update with your actual information
const SITE_URL = 'https://your-domain.com'
const TWITTER_HANDLE = '@yourtwitterhandle'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Full-Stack Developer with AI/ML Expertise | Building Intelligent Web Solutions',
    template: '%s | Your Name'
  },
  description: 'Experienced Full-Stack Developer (3+ years) with AI/ML expertise. Building scalable web applications and intelligent solutions. React, Node.js, Python, TensorFlow. Based in Sri Lanka, serving global clients.',
  keywords: ['Full-Stack Developer', 'Web Developer', 'React Developer', 'Node.js', 'AI Integration', 'Machine Learning', 'Software Engineer', 'Next.js', 'TypeScript', 'Sri Lanka'],
  authors: [{ name: 'Your Name', url: SITE_URL }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Full-Stack Developer Portfolio',
    title: 'Full-Stack Developer with AI/ML Expertise',
    description: 'Building scalable web applications and intelligent solutions with 3+ years of development experience',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Developer with AI/ML Expertise',
    description: 'Building scalable web applications and intelligent solutions with 3+ years of development experience',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    images: [`${SITE_URL}/og-image.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
        color: '#000000'
      }
    ]
  },

  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    other: {
      'msvalidate.01': 'your-bing-verification',
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

// JSON-LD structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Your Name',
  url: SITE_URL,
  sameAs: [
    'https://github.com/yourusername',
    'https://linkedin.com/in/yourusername',
    'https://twitter.com/yourusername'
  ],
  jobTitle: 'Full-Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance'
  },
  description: 'Full-Stack Developer specializing in web development and AI/ML integration',
  image: `${SITE_URL}/profile.jpg`,
  email: 'mailto:your.email@example.com'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* PWA meta tags */}
        <meta name="application-name" content="Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Google Analytics - Only load if GA_ID is provided */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={cn(inter.variable, 'font-sans antialiased')}>
        <NextTopLoader color="#0EA5E9" showSpinner={false} />
        <ScrollProgress />
        <ThemeProvider>
          <div className="noise" />
          {children}
          <CommandPalette />
          <VisitorCounter />
          <A11yControls />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
} 