import "./globals.css";
import { Providers } from "./provider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { Inter } from "next/font/google";


export const metadata = {
  title: "VIVIDNOW의 블로그",
  description: "마음을 읽는 개발자 김재광입니다",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export type Props = {
  children: React.ReactNode;
};


export default function RootLayout({ children } : Props) {
  return (
    <html lang="ko" suppressHydrationWarning className={inter.className}>
      <body>

        <Providers>
          <Header />
          <GoogleAnalytics />
          {children}
          <Analytics />
          <Footer />
        </Providers>

      </body>
    </html>
  );
}
