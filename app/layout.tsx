import type { Metadata } from 'next';
import { Instrument_Serif, Inter } from 'next/font/google';
import './globals.css';
import GrainOverlay from '@/components/GrainOverlay';
import CursorFollower from '@/components/CursorFollower';
import { getSchemaMarkup } from '@/lib/schema';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Signal — Local SEO for the AI Era | Brooklyn, NY',
  description:
    'Customers now ask AI who to call. Signal makes sure that answer is you — in ChatGPT, Google AI Overviews, and Perplexity.',
  metadataBase: new URL('https://signalbrooklyn.com'),
  alternates: {
    canonical: 'https://signalbrooklyn.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://signalbrooklyn.com',
    title: 'Signal — Local SEO for the AI Era | Brooklyn, NY',
    description:
      'Customers now ask AI who to call. Signal makes sure that answer is you — in ChatGPT, Google AI Overviews, and Perplexity.',
    siteName: 'Signal',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signal — Local SEO for the AI Era | Brooklyn, NY',
    description:
      'Customers now ask AI who to call. Signal makes sure that answer is you — in ChatGPT, Google AI Overviews, and Perplexity.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getSchemaMarkup() }}
        />
      </head>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} antialiased`}
      >
        <GrainOverlay />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
