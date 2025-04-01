import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'TEDxNTUA Quiz',
  description: "A quiz to gauge which of the 8 TEDxNTUA's organizing team fits you best.",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: './favicons/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: './favicons/favicon-16x16.png'
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="h-[65px] w-full bg-black/95 flex items-center px-4">
          <a
            className="w-[85%] mx-auto"
            href="https://www.tedxntua.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="tedxntua-logo.png" alt="Logo" className="h-[40px] w-auto" />
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
