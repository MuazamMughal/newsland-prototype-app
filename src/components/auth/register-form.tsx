"use client"
import { CardWrapper } from "./card-wrapper"
import * as z from "zod"
import { RegisterSchema } from "../../../schemas"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { register } from "../../../actions/register"
import { useState, useTransition } from "react"



//using use transition react hook for transition validaion


export const RegisterForm = () => {
    
    

    const [error , setError] =useState<string | undefined>("")
    const [success , setSuccess] = useState<string | undefined>("")
const [isPending , startTransition] = useTransition()


    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        }
    })

  

       
    const onSubmit = (values : z.infer<typeof RegisterSchema>) => {
         setError("")
        setSuccess("")
        // wrapping the starttransition to the login and applind ispending to fields
       
       
        startTransition(()=>{
        register(values)
        .then((data) => {
            setError(data.error)
            setSuccess(data.success)
        })
        })

    }

    return (
        <CardWrapper
            headerLable="Create an Account"
            backButtonHref="/auth/login"
            backButtonLable="Already have an Account"
            showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6">
                    <div>
                    <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                        disabled={isPending}
                                            {...field}
                                            placeholder="username"
                                            
                                        />

                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}

                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                        disabled={isPending}
                                            {...field}
                                            placeholder="john@example.com"
                                            type="email"
                                        />

                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}

                        />
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel >Password</FormLabel>
                                    <FormControl>
                                        <Input
                                        disabled={isPending}
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                        />

                                    </FormControl>
                                    <FormMessage/>
                                    
                                </FormItem>
                            )}

                        />


                    </div>
                  <FormError message={error}/>
                  <FormSuccess message={success}/>
                        <Button 
                        disabled={isPending}
                        type="submit"
                        className=" w-full">
                           Register
                        </Button>
                  

                </form>


            </Form>
        </CardWrapper>
    )
}