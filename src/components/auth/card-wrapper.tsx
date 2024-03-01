"use client"

import { Card ,
    CardHeader,
     CardFooter,
      CardTitle,
       CardDescription,
        CardContent} from "../ui/card"
import { BackButton } from "./backButton"
import { Header } from "./header"
import { Social } from "./social"

interface CardWrapperProps {

    children: React.ReactNode,
    headerLable: string,
    backButtonLable: string,
    backButtonHref: any,
    showSocial?: boolean

}

export const CardWrapper = ({
    children,
    headerLable,
    backButtonHref,
    backButtonLable,
    showSocial
}: CardWrapperProps) => {
    return(
        <Card className=" w-[400px] shadow-md">
            <CardHeader>
                <Header lable={headerLable}/>
            </CardHeader>
            <CardContent >
                    {children}
            </CardContent>
            {/*now here we gon a apply our logic for show social*/}
            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                 lable = {backButtonLable}
                 href ={backButtonHref}/>
            </CardFooter>
            

        </Card>
    )

}