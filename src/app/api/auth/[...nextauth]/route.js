import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

export const authOption = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST  }