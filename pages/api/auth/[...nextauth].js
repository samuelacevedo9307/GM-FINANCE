import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectToDatabase from "../../../lib/mongo";
import UserModel from "../../../models/UserModel";
export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        contrasena: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, contrasena } = credentials;
        const client = await connectToDatabase();
        const user = await UserModel.findOne({ email: email});
        console.log("esta entrando al provider");
        console.log(user);
        if (!user) {
          console.log("Invalid credentials");
          throw new Error("Correo o contraseña no validos");
        }
        client.connection.close();
        const iscontrasenaCorrect = await compare(contrasena, user.contrasena);

        if (!iscontrasenaCorrect) {
          if (contrasena == user.contrasena) {
            return user;
          } else {
            console.log("Invalid credentials");
            throw new Error("Correo o contraseña no validos");
          }
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user;
      session.user = user;

      return session;
    },
  },
});
