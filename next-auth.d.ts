
import NextAuth,{type DefaultSession} from "next-auth"

//now i am gona wxtend the User
export type ExtendedUser = DefaultSession["user"]&{
   //we gona add anything that we gona pass the users types in session
   id: string
}
 
declare module "next-auth" {
    
    interface Session {
      user:ExtendedUser
      
    }
  
  }
  
    