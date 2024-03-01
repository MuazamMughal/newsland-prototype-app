"use Server"

import { getUserByEmail } from "@/data/User"
import {  getVerificationTokenByToken } from "@/data/verification-token"
import { db } from "@/lib/db"

export const newVerification =async (token:string) =>{
    const existingToken = await getVerificationTokenByToken(token)
    console.log({token})

    if (!existingToken) {
        return { error: "Login PLease" };
      }

    /*now finding that the token is expired or  not*/
    const hasxpired = new Date(existingToken.expires) < new Date() 

    if(hasxpired){
        return {error:"Token has expired"}
    }
    //now finding the user that we wanted to validate tahtt the user change there
    //email in the mean time

    const existingUser = await getUserByEmail(existingToken.email)
    if(!existingUser){
        return {error:"Email does not found"}
    }
    //now after passing the all the test  we update the user
    await db.user.update({
        where: {id: existingUser.id},
         
        data: { emailVerified: new Date(),
                email: existingUser.email   }
               
           
        
    })

    //now at alst e gona removing this old verification token
    await db.verificationToken.delete({
        where: { id: existingUser.id}
    })
return {success:"Email Verified"}
}
//now adding this new function into the new-verification-form.tsx