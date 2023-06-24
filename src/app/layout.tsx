import './globals.css';
import { Inter } from 'next/font/google';

import { Header } from '@/app/_components/header';

const inter = Inter({ subsets: ['latin'] });

const siteName = 'FoodTracker';
const description =
  'キッチンカー情報を集約したサイトで、キッチンカーで提供される料理とキッチンカーの詳細情報を掲載しています。';
const url = 'https://food-tracker-opal.vercel.app/';

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  metadataBase: new URL(url),
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Header />
        <main className='m-auto min-h-screen max-w-3xl'>
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
