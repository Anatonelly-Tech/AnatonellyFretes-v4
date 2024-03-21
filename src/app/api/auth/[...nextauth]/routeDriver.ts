import { getDriverByCPF } from "@/services/driver";
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const getDriver = async (cpf: any) => {
  const Driver = (await getDriverByCPF(cpf)).data.response;
  console.log(Driver);
  return Driver;
};

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialProvider({
      name: "driver",
      type: "credentials",
      credentials: {
        cpf: { label: "CPF", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const Driver = await getDriver(credentials?.cpf);

        const isValidcpf = credentials?.cpf === Driver.cpf;
        const isValidPassword = credentials?.password === Driver.password;

        if (!isValidcpf || !isValidPassword) {
          console.log("Invalid CPF or Password");
          return null;
        } else {
          return Driver;
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
    signIn: "/auth/loginDriver",
    signOut: "/auth/loginDriver",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
