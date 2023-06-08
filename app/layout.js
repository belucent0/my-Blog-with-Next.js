"use client";
import "./globals.css";
import { Providers } from "./provider";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <SessionProvider>
          <Providers>
            <Head>
              <title>VIVIDNOW의 블로그</title>
              <meta name="description" content="코딩합시다" />
            </Head>
            <Header />
            {children}
            <Footer />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
