
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from 'next-auth'
import bcrypt from 'bcrypt';
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Your email" },
        password: { label: "Password", type: "password", placeholder: "Your password" }
      },
      async authorize(credentials) {
              
        // check to see if email and password is there
        if(!credentials?.username || !credentials?.password) {
            throw new Error('Please enter an email and password')
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
            where: {
                email: credentials?.username
            }
        });

        // if no user was found 
        if (!user || !user?.password) {
            throw new Error('No user found')
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(credentials?.password, user.password)

        // if password does not match
        if (!passwordMatch) {
            throw new Error('Incorrect password')
        }

        return user;
    },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/auth/signIn"
  },
  secret : process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === 'development',
}
const handler = NextAuth(authOptions);

const handlerss = NextAuth({
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Email", type: "text", placeholder: "Your email" },
            password: { label: "Password", type: "password", placeholder: "Your password" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const res = await fetch('http://localhost:3000/api/login/credentials', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: credentials?.username,
                    password: credentials?.password,
                }),
            });

            const user = await res.json();
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        }),

        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),

        GitHubProvider({
          clientId: process.env.GITHUB_ID ?? "",
          clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],

    pages: {
      signIn: "/auth/signIn"
    },

    callbacks: {
      async jwt({token, user}) {
        return({...token, ...user});
      },

      async session({session, token}) {
        session.user = token as any;
        return session;
      }
    }
});

export {handler as GET, handler as POST}