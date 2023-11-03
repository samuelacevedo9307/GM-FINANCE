import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectToDatabase from "../../../lib/mongo";
import UserModel from "../../../models/UserModel";
import companyModel from "../../../models/CompanyModel";
export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        type: { label: "type", type: "text" },
        email: { label: "Email", type: "text" },
        contrasena: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { type, email, contrasena } = credentials;
        const client = await connectToDatabase();
        if (type == "Empresa") {
          const user = await companyModel.findOne({Contacto: email});
          console.log("esta entrando al provider");
          console.log(user);
          if (!user) {
            console.log("Invalid credentials");
            throw new Error("Correo o contraseña no validos");
          }
          client.connection.close();
          console.log(contrasena)
          const iscontrasenaCorrect = await compare(contrasena, user.Contrasena);

          if (!iscontrasenaCorrect) {
            if (contrasena == user.contrasena) {
              if (user.Verificado) {
                return user;
              }
            } else {
              console.log("Invalid credentials");
              throw new Error("Correo o contraseña no validos");
            }
          }
          if (user.Verificado) {
            return user;
          } else {
            console.log("Email No Verificado");
            throw new Error("Email No Verificado");
          }
        } else {
          const user = await UserModel.findOne({ email: email });
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
              if (user.Verificado) {
                return user;
              }
            } else {
              console.log("Invalid credentials");
              throw new Error("Correo o contraseña no validos");
            }
          }
          if (user.Verificado) {
            return user;
          } else {
            console.log("Email No Verificado");
            throw new Error("Email No Verificado");
          }
        }
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
