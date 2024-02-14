import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anatonelly Fretes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body className='bg-anatonelly-bg'>{children}</body>
    </html>
  );
}
