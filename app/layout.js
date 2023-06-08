"use client";
import "./globals.css";
import { Providers } from "./provider";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "VIVIDNOW의 블로그",
  description: "코딩합시다",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <SessionProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
