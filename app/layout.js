"use client";
import "./globals.css";
import { Providers } from "./provider";
import Footer from "./components/footer";
import Header from "./components/header";
import { SessionProvider } from "next-auth/react";
import Head from "./head";


export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <Providers>
            <Head/>
            <Header/>
            {children}
            <Footer />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
