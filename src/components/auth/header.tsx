

interface HeaderProps{
    lable:string
}
export const Header =({
    lable
}:HeaderProps) =>{
        return(
            <div className="flex flex-col gap-y-2 w-full items-center justify-center" >
                <h1  className=" font-bold text-2xl">
                    Authentication
                </h1>
                <p className=" text-muted-foreground text-sm">
                    {lable}
                </p>
            </div>
        )
}