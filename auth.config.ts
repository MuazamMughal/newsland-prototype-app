

import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from "@/data/User"
import bcrypt from "bcryptjs"
// import simp,ly  google and github provider too but we are just using the google 
//for this project we just using both for our learning 
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"

export default {
  providers: [
    // now we gona add our login provider for google
//we willl got both providers at in 3000/api/auth/providers
//after tjis we gona add envirnoment keys for github han google

    Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),

   Credentials({
        async authorize(credentials){
            const validateFields= LoginSchema.safeParse(credentials)

            if(validateFields.success){
                const {email,password} = validateFields.data

                const user = await getUserByEmail(email)
                if(!user || !user.password) return null

                const passwordsMatch =await bcrypt.compare(
                    password,
                    user.password
                )
                if(passwordsMatch) return user


            }
            return null
        }
    })
  ],
} satisfies NextAuthConfig