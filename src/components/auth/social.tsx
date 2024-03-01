"use client"

import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
//in the case of first credential login we use server actoins to pass credentials
//in google and github case we gona create sign in in client component
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from"../../../routes"


export const Social =()=>{

    const onClick=(provider:"google"|"github")=>{
        signIn(provider , {
            callbackUrl:DEFAULT_LOGIN_REDIRECT

        })
    }

    return(
        <div className="flex items-center w-full gap-x-2">
            <Button 
            variant="outline"
            className="w-full"
            size="lg"
            onClick={()=>{onClick("google")}}>
                <FcGoogle className="h-5 w-5"/>
            </Button>
            <Button 
            variant="outline"
            className="w-full"
            size="lg"
            onClick={(e)=>onClick("github")}>
                <FaGithub className="h-5 w-5"/>
            </Button>

        </div>
    )
}