import { connectDB } from "../../../util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions : NextAuthOptions = {
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID || '',
        clientSecret: process.env.GITHUB_CLIENT_SECRET || '', 
      }),
    NaverProvider({
        clientId: process.env.NAVER_CLIENT_ID || '', 
        clientSecret: process.env.NAVER_CLIENT_SECRET || '', 
      }),
    KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID || '', 
        clientSecret: process.env.KAKAO_CLIENT_SECRET || '', 
      }),
],

  // jwt 선택 + jwt 만료일설정
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60 //1일
  },


  callbacks: {
    // jwt 형성시 실행되는 코드 
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어감.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {
          name: user.name,
          email: user.email,
          image: user.image
        };
      }
      return token;
    },
    // 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user as { name?: string; email?: string; image?: string } | undefined;
      return session;
    },
  },

  secret : process.env.OAuth_SECRET,
  adapter : MongoDBAdapter(connectDB),
  pages: {
    signIn:"/login",
  }
};
export default NextAuth(authOptions); 