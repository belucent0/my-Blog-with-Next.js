import { connectDB } from "../../../utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      credentials: {
        loginId: { label: "아이디", type: "text" },
        password: { label: "비밀번호", type: "password" },
      },

      //2. 로그인시 실행
      async authorize(credentials: { loginId: string; password: string }, req) {
        const { loginId, password } = credentials;
        console.log("credentials", credentials);

        const db = (await connectDB()).db("forum");
        let user = await db
          .collection("guest_credentials")
          .findOne({ loginId });

        if (!user) {
          console.log("존재하지 않는 아이디입니다.");
          return null;
        }

        const isPasswordVaild = await bcrypt.compare(password, user.password);

        if (!isPasswordVaild) {
          console.log("비밀번호가 일치하지 않습니다.");
          return null;
        }

        return user;
      },
    }),
  ],

  // jwt 선택 + jwt 만료일
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60, //1시간
  },

  callbacks: {
    // jwt 형성시 실행되는 코드
    //user변수는 DB의 유저정보담겨있고 token.user에 정보 저장하면 jwt으로.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {
          name: user.name,
          email: user.email,
          image: user.image,
        };
      }
      return token;
    },
    // 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user as
        | {
            loginId?: string;
            passowrd?: string;
            name?: string;
            email?: string;
            image?: string;
            role?: string;
          }
        | undefined;
      return session;
    },
  },

  secret: process.env.OAuth_SECRET,
  adapter: MongoDBAdapter(connectDB()),
  pages: {
    signIn: "/login",
  },
};

const authHandler = NextAuth(authOptions);
export default async function handler(...params: any[]) {
  await authHandler(...params);
}
