
"use server"

import { AuthError } from "next-auth"
import { signIn } from "../auth"
import { DEFAULT_LOGIN_REDIRECT } from "../routes"
import { LoginSchema } from "../schemas"
import * as z from "zod"
import { getUserByEmail } from "@/data/User"
import { generateVerificationToken } from "@/lib/tokens"

/*the main purpose to use the use server action to pass the 
client values to the server*/

export const login = async (
    values: z.infer<typeof LoginSchema>
) => {
    const validateFields = LoginSchema.safeParse(values)

    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }
    const { email, password } = validateFields.data

    //here we gona create the resistriction login without verification
    const existingUser = await getUserByEmail(email)
    if(!existingUser||!existingUser.email||!existingUser.password){
        return{error:"Email dose not exist!"
        }
    } 
 /* this is for that if we have to change the token again 
 if(!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(
            existingUser.email
        )
        return {success: "Confirmation email sent!"}
    }now aftere this login form  sucess is working as it*/

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } 
    catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid Credentials" }
                default:
                    return { error: "Something went Wrong" }

            }
        }
        throw error
    }
}


//now pass this login to the alues in the login form