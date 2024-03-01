"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"


interface BackButtonProps {
    lable:string,
    href:string
}
export const BackButton =({
    lable,
    href
}:BackButtonProps) =>{
    const router = useRouter()
    const onClick = () => {
        router.push(href)
    }
    return (
       <Button onClick={onClick}>
       
        {lable}
       </Button>
    )
}