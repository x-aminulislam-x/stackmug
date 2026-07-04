import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'StackMug | Premium Developer Mugs & Vessels',
    template: '%s | StackMug',
  },
  description:
    'High-performance, strictly-typed mugs and thermal containers built for programmers and tech teams. Designed to maintain caffeine temperature through complex compiler workflows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="-Tt1ogxOHNGi3QB796VB3ohm6hmjsDkWfTphiBtwVpg"
        />
        <meta name="msvalidate.01" content="8E8CF824ABAC607F1BAC21AAAFB3416E" />
      </head>
      <body
        className="flex min-h-screen flex-col bg-white font-sans antialiased text-gray-800"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
