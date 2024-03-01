"use client"

import { useSearchParams } from "next/navigation"
import { CardWrapper } from "./card-wrapper"
import {BeatLoader} from "react-spinners"
import { useCallback, useEffect, useState } from "react"
import { newVerification } from "../../../actions/new-verification"
import { FormSuccess } from "../form-success"
import { FormError } from "../form-error"


export const NewVerificationForm = () => {
const [error,setError] = useState<string|undefined>()
const [success , setSuccess] = useState<string|undefined>()
    const searchPrams = useSearchParams()
    const token = searchPrams.get("token")
    

    const onSubmit =useCallback(() => {
        //this is for that if we have the verified email donot send email on login
       // this is for that useeffect because it fiers twice in dev moed
        if(success || error) return 
        if(!token) {
            setError("Missing Token")
            return
        }
        //calling the new verification server action
        newVerification(token)
        .then((data)=>{
            setSuccess(data.success)
            setError(data.error)
        })
        .catch(()=>{
            setError("Something went wrong")
        })

    },[token,success,error]
    )

   useEffect(() => {
            onSubmit()
        },[onSubmit])


    return(
        <CardWrapper
        headerLable="Confirming your Verification"
        backButtonLable="Back to login"
        backButtonHref="/auth/login"
        
        >
        <div className=" flex justify-center items-center w-full">
            {!success && !error && <BeatLoader />}
           
            <FormSuccess message={success}/>
            {!success &&  (<FormError message={error}/>)}
            

        </div>
        </CardWrapper>
    )
}