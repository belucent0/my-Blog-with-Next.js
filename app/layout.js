import Link from "next/link";
import "./globals.css";
import { LoginBtn, LogoutBtn } from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { cookies } from "next/headers";
import DarkMode from "./DarkMode";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Providers } from "./providers";

export const metadata = {
  title: "VIVIDNOW의 블로그",
  description: "코딩합시다",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

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

{
  /* <div className={res != undefined && res.value == "dark" ? "dark-mode" : ""}>
        <div className="navbar" style={{ margin: "auto" }}>
          <Link href="/" className="logo">
            VIVIDNOW
          </Link>
          <Link href="/list">게시판</Link
          <span style={{float: "right",margin: "-9px",}}>
            {session ? (
              <span className="logo">
                {session.user.name} <LogoutBtn />{" "}
              </span>
            ) : (
              <LoginBtn />
            )}
            <DarkMode />
          </span>
          </div>
        </div> */
}
