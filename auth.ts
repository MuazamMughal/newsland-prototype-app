import NextAuth from "next-auth"

import authConfig from "./auth.config"
import {PrismaAdapter} from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import { getUserById } from "@/data/User"
//npm i @auth/prisma-adapter

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
// adding events of next auth form more functionality
// we using the linkaccount event if anybudy uses same emaile in github and gmial they block
events: {
  async linkAccount({ user }) {
    await db.user.update({
      where: { id: user.id },
      data: { emailVerified: new Date() }
    })
  }
},



  //now we adding callbacs from the next auth

  callbacks: {
    /* we just designed this in such away that if we donte have email 
    varified we not gona pass through 
    we can also use this by using user type any 
    without creating typescript type for next auth user in
    next-auth.d.ts
    ** aslo if we gona extend the user role withadding one more table in 
    prisma schema then we add them into user with extended user in 
    next-dev.d.ts

    async signIn({user}) {
      const existingUser = await getUserById(user.id)
      if(!existingUser||!existingUser.emailVerified){
        return false
      }
      return user
    } ,*/

    //now we gona allow the oauth without the email varification
    async signIn({
      user ,
       account
      }){
        //allowing auth without email verification
      if (account?.provider!== "credentials") return true

      //const existingUser =await getUserById((user.id)as any)

      //now preventing login without email varification
       //if(!existingUser?.emailVerified) return false

      return true

    },
    
    async session({ token, session}:any){
      if(token.sub && session.user){
        session.user.id = token.sub
      }
    
      return session
    },

    
    async jwt({token}){
    
      return token
    },

  },

  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  ...authConfig,
 
})