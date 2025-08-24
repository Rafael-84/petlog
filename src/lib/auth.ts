import { PrismaAdapter } from '@auth/prisma-adapter';
import prismaClient from "./prisma";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismaClient),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async session({ session, user, token }) {
            session.user = { ...session.user, id: user.id } as { id: string, name: string, email: string }
            return session;
        }
    }
}