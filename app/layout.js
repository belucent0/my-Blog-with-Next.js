import "./globals.css";
import { Providers } from "./provider";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  title: "VIVIDNOW의 블로그",
  description: "마음을 읽는 개발자 김재광입니다",
};

export default function RootLayout({ children }) {

  return (
    <html lang="ko" suppressHydrationWarning>
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
