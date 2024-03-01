"use client"
/* basicaly thi component is a boutten component we 
can pass any of the button as it as child ,
 the default for this button is to redirect 
 to use it we an only rapp the button with is component*/
import { useRouter } from "next/navigation"


//we have to crate the interface for the button comp
interface LoginButtonProps {
    children: React.ReactNode;
    // adding optional mode whis ia either modal or a redirect
    mode?: "Modal" | "redirect",
    asChild?: boolean,
}

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {

    const router = useRouter()

    const onClick = () => {
        router.push('/auth/login')
    }

    return (
        <span className=" cursor-pointer" onClick={onClick}>
            {children}
        </span>
    )
}