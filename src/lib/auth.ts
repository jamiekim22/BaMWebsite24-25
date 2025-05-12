// src/lib/auth.ts
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(creds) {
        if (
          creds?.username === process.env.ADMIN_USERNAME &&
          creds?.password === process.env.ADMIN_PASSWORD
        ) {
          return { id: "1", name: "Site Admin" };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.isAdmin = true;
      return token;
    },
    async session({ session, token }) {
      session.user = session.user || {};
      session.user.isAdmin = !!token.isAdmin;
      return session;
    }
  },
  // remove pages.signIn override if you're using the built-in UI
  // pages: { signIn: "/auth/signin" }
};
