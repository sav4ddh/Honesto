import Header from '@/components/layout/Header';
import './globals.css';
import { Metadata } from 'next';
import { Outfit } from 'next/font/google';

const outfitFont = Outfit({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Honesto.',
  description:
    'Honesto lets you receive anonymous messages from anyone, anytime. Create your profile, generate private message IDs, and let people send their unfiltered thoughts without revealing who they are. Whether it’s confessions, compliments, or secrets — you stay in control, they stay anonymous.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${outfitFont.className} min-h-screen bg-gradient-to-br from-[#1a103d] to-[#2d0c52] text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
