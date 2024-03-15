// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
    export interface Session {
        user: {
            email?: string;
            password?: string;
            image?: string;
            role?: string;
        } & Session["user"];
    }
}
