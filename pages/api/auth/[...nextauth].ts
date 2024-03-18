import { connectDB } from "../../../utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
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
                const { email, password } = credentials;

                try {
                    const loginResponse = async () => {
                        try {
                            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ email, password }),
                            });

                            const data = await res.json();
                            return data;
                        } catch (error) {
                            console.error(error);
                            throw new Error("로그인 서버 연결 실패");
                        }
                    };

                    const result = await loginResponse();

                    if (result && result.status === "fail") {
                        throw new Error(result.message);
                    }

                    if (result && result.status === "success") {
                        return result.data;
                    }

                    return null;
                } catch (error) {
                    throw new Error(error.message);
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
                    role: user.role,
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
