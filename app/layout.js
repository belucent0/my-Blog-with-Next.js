import "./globals.css";
import { Providers } from "./provider";
import Header from "./layout/header";
import Footer from "./layout/footer";

export const metadata = {
  title: "VIVIDNOW의 블로그",
  description: "코딩합시다",
};

export default async function RootLayout({ children }) {

  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
