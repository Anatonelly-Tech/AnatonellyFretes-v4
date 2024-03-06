import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: "1",
          email: "adm@email.com",
          password: "adm",
          name: "admizin",
          role: "admin",
        };
        const isValidEmail = credentials?.email === user.email;
        const isValidPassword = credentials?.password === user.password;

        if (!isValidEmail || !isValidPassword) {
          return null;
        } else {
          return user;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      const customUser = user as unknown as any;
      if (user) {
        return {
          ...token,
          role: customUser.role,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          role: token.role,
        },
      };
    },
    redirect: async ({ baseUrl }) => {
      return `${baseUrl}/auth/login`;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
