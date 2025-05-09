import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

// Initialize the Hebrew font
const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
})

// Define metadata for the site
export const metadata: Metadata = {
  title: 'מסעדה גמא - מסעדה מוביל בישראל',
  description: 'מסעדה מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
  keywords: 'מסעדה, שירות, איכות, מקצועיות, ישראל, בריאות',
  openGraph: {
    title: 'מסעדה גמא - מסעדה מוביל בישראל',
    description: 'מסעדה מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
    url: 'https://www.restaurantgamma.co.il',
    siteName: 'מסעדה גמא',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
        width: 1200,
        height: 630,
        alt: 'מסעדה גמא',
      },
    ],
  },
}

// Schema.org markup for the restaurant
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'מסעדה גמא',
  description: 'מסעדה מוביל המספק שירות מקצועי ואיכותי בתחום הבריאות',
  url: 'https://www.restaurantgamma.co.il',
  telephone: '+972-123-456-789',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'רחוב הרצל 123',
    addressLocality: 'תל אביב',
    postalCode: '6100000',
    addressCountry: 'IL',
  },
  servesCuisine: 'בריאות',
  priceRange: '₪₪',
  openingHours: 'ראשון-חמישי 09:00-22:00, שישי 09:00-15:00',
  image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 text-right">
          {children}
        </main>
      </body>
    </html>
  )
}