import connect from "@/utils/db"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "856215327371-1t7pvf2v9q46s8kqjuu3qg4fic821vou.apps.googleusercontent.com",
            clientSecret: "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"
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                await connect()
                try {
                    // console.log(credentials.email);
                    const user = await User.findOne({ email: credentials.email })
                    console.log(user);
                    if (user) {
                        //check pass
                        const isPasscorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        )
                        if (isPasscorrect) {
                            return user
                        }
                        else {
                            throw new Error("Wrong credentials")
                        }
                    }
                    else {
                        throw new Error("User not found")
                    }
                }
                catch (err) {
                    throw new Error(err)
                }
            }
        })
    ],
    pages:{
        error: "/dashboard/login"
    }
})


export { handler as GET, handler as POST }