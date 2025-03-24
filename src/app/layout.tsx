import type { Metadata } from "next";
import { DM_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from './providers'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Citta Việt Nam - Nến Thơm Cao Cấp",
  description: "Nến thơm cao cấp Citta với đa dạng các mùi hương, tầng hương khác nhau. Đem tới cho bạn và gia đình không gian sảng khoái nhưng vẫn rất ấm áp.",
  keywords: "nến thơm, sáp đậu nành, nến cao cấp, citta việt nam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${dmSans.variable} ${openSans.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
