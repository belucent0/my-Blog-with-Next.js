"use client";
import "./globals.css";
import { Providers } from "./provider";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { SessionProvider } from "next-auth/react";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <Providers>
            <Head/>
            <Header />
            {children}
            <Footer />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
