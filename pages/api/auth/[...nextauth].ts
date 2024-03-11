import { connectDB } from "../../../utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

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
      type: "credentials",
      credentials: {
        email: { label: "이메일", type: "email" },
        password: { label: "비밀번호", type: "password" },
      },

      //로그인시 실행
      async authorize(credentials: { email: string; password: string }) {
        try {
          const { email, password } = credentials;

          const db = (await connectDB()).db("forum");
          const user = await db.collection("guest_credentials").findOne({ email });

          if (!user) {
            throw new Error("해당 이메일로 가입된 유저가 없습니다.");
          }

          const isPasswordVaild = await bcrypt.compare(password, user.password);

          if (!isPasswordVaild) {
            throw new Error("비밀번호가 일치하지 않습니다.");
          }

          return user;
        } catch (error) {
          throw new Error("이메일 혹은 비밀번호가 정확하지 않습니다.");
        }
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
          email: user.email,
          name: user.name,
          image: user.image,
        };
      }
      return token;
    },
    // 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user as
        | {
            email?: string;
            passowrd?: string;
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
    signIn: "/guestbook",
    error: "/guestbook",
    signOut: "/guestbook",
  },
};

const authHandler = NextAuth(authOptions);
export default async function handler(...params: [NextApiRequest, NextApiResponse]) {
  await authHandler(...params);
}
