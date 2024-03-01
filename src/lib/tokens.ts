import { getVerificationTokenByEmail } from "@/data/verification-token"
import { v4 as uuidv4 } from "uuid"
import { db } from "./db"


//now we gona get all the tokens from the email
export const generateVerificationToken = async (email: string) => {
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000)

    //now  creating logic that we have existing token already email sent to this email
    const existingtoken =  await getVerificationTokenByEmail(email)
    if (existingtoken){
        await db.verificationToken.delete({
            where: {
                id: existingtoken.id
            }
        })
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            email,
            expires,
            token
        }
    })
    return verificationToken
    //now we gona run this function over the register itsef
    //in srever action of register

}