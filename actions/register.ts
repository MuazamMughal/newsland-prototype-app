"use server"

// this server action is for regester form

import {  RegisterSchema } from "../schemas"
import * as z  from "zod"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/User"
import { generateVerificationToken } from "@/lib/tokens"
import { sendVerificationEmail } from "@/lib/mail"
 
export const  register = async (
    values:  z.infer<typeof RegisterSchema>
) =>{
   const validateFields= RegisterSchema.safeParse(values)
    
   if(!validateFields.success){
    return {error:"Invalid fields"}
   }
   const {email ,password,name } = validateFields.data
   // now passing the passward to the bcrypt to hash it
   const hashedPassword = await bcrypt.hash(password,10)

   // now we gona check that htis email is not taken
//we inculd this getUserById function from user
   const  existingUser = await getUserByEmail(email)


   if(existingUser) {
    return {error:"Email alredy in use"}
    }

    await db.user.create({
        data:{
            name,
            password:hashedPassword,
            email
        }
    })
    // here we gona use the verificationtoken function from lib
   const verificationtoken = await generateVerificationToken(email)

   //now here we add the resend email verification functionality
   await sendVerificationEmail(
    verificationtoken.email,
    verificationtoken.token
   )
   // now for restricting the user to login without the email verification 
   //directe after register and having not register email in the login action
   {
    return {success:"Confirmation Email Sent"}
   }
}

//now pass this lossgin to the alues in the register form*/