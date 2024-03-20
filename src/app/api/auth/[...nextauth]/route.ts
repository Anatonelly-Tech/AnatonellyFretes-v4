import { getUserByEmail } from "@/services/user";
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const getUser = async (email: any) => {
  const User = (await getUserByEmail(email)).data.response;
  console.log(User);
  return User;
};

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const User = await getUser(credentials?.email);

        const isValidEmail = credentials?.email === User.email;
        const isValidPassword = credentials?.password === User.password;

        if (!isValidEmail || !isValidPassword) {
          console.log("Invalid Email or Password");
          return null;
        } else {
          return User;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          role: user.role, // Adicionando a função do usuário ao token JWT
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        maxAge: 4 * 60 * 60,
        user: {
          name: token.name,
          email: token.email,
          role: token.role, // Adicionando a função do usuário à sessão do usuário
        },
      };
    },
    redirect: async ({ baseUrl, provider }) => {
      if (provider === "driver") {
        return `${baseUrl}/auth/loginDriver`;
      } else if (provider === "credentials") {
        return `${baseUrl}/auth/login`;
      } else {
        return `${baseUrl}/auth/login`; // ou outra rota padrão
      }
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
