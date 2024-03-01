"use client"
import { CardWrapper } from "./card-wrapper"
import * as z from "zod"
import { LoginSchema } from "../../../schemas"

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
import { login } from "../../../actions/login"
import { useState, useTransition } from "react"



//using use transition react hook for transition validaion


export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const [isPending, startTransition] = useTransition()

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("");


    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")
        // wrapping the starttransition to the login and applind ispending to fields
        startTransition(() => {
            login(values)
              .then((data) => {
              
                  setError(data?.error);
                
                
      
               
                 
               
      
               
              })
              .catch(() => setError("Something went wrong"));
          });
        };

    return (
        <CardWrapper
            headerLable="Wellcome Back"
            backButtonHref="/auth/register"
            backButtonLable="Don't have an Account"
            showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6">
                    <div>
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
                                    <FormMessage />
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
                                    <FormMessage />

                                </FormItem>
                            )}

                        />


                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type="submit"
                        className=" w-full">
                        Login
                    </Button>


                </form>


            </Form>
        </CardWrapper>
    )
}