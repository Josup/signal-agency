import type { Metadata } from 'next';
import { Fraunces, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { getSchemaMarkup } from '@/lib/schema';

const fraunces = Fraunces({
  axes: ['opsz'],
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Signal — Local SEO for the AI Era | Brooklyn, NY',
  description:
    'Customers now ask AI who to call. Signal makes sure that answer is you — in ChatGPT, Google AI Overviews, and Perplexity.',
  metadataBase: new URL('https://signalbrooklyn.com'),
  alternates: { canonical: 'https://signalbrooklyn.com' },
  openGraph: {
    type: 'website',
    url: 'https://signalbrooklyn.com',
    title: 'Signal — Local SEO for the AI Era | Brooklyn, NY',
    description: 'Customers now ask AI who to call. Signal makes sure that answer is you — in ChatGPT, Google AI Overviews, and Perplexity.',
    siteName: 'Signal',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signal — Local SEO for the AI Era | Brooklyn, NY',
    description: 'Customers now ask AI who to call. Signal makes sure that answer is you — in ChatGPT, Google AI Overviews, and Perplexity.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --display: var(--font-fraunces), Georgia, serif;
            --serif:   var(--font-source-serif), Georgia, serif;
            --mono:    var(--font-jetbrains), ui-monospace, monospace;
          }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getSchemaMarkup() }}
        />
      </head>
      <body className={`${fraunces.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
