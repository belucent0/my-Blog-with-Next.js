import Link from "next/link";
import "./globals.css";
import { LoginBtn, LogoutBtn } from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { cookies } from "next/headers";
import DarkMode from "./DarkMode";
import Header from "./layout/header";
import Footer from "./layout/footer";

export const metadata = {
  title: "VIVIDNOW의 블로그",
  description: "오늘도 열코딩",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  let res = cookies().get("mode");

  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>

      {/* <body>
        <div className={res != undefined && res.value == "dark" ? "dark-mode" : ""}>
        <div className="navbar" style={{ margin: "auto" }}>
          <Link href="/" className="logo">
            VIVIDNOW
          </Link>
          <Link href="/list">게시판</Link>
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
        </div>
      </body> */}
    </html>
  );
}
