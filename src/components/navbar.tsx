
import { auth, signOut } from '@/../auth'
import * as React from "react"
import Link from "next/link"

 
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { LoginButton } from "./auth/login-button"
import { title } from "process"

const components: { title: string; href: string;  }[] = [
  {
    title: "Global",
    href: `/categories/Global`
   },
  {
    title: "Political",
    href: `/categories/Political`,
   },
  {
    title: "Sports",
    href: `/categories/Sports`,
   },
  {
    title: "Fashion",
    href: `/categories/Fashion`,
   },
 
]

const Navbar =async () => {
  const session = await auth()
  return (
    <div className=" flex justify-between items-center border-2 rounded-lg my-3 py-2 px-6  bg-slate-200">
    <NavigationMenu>
        <NavigationMenuList className=" text-2xl font-bold ">NewsLand</NavigationMenuList>
     </NavigationMenu>
  
  
    <NavigationMenu>
      <NavigationMenuList className="flex gap-2">
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10   items-center justify-center rounded-lg  px-4  text-lg font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
>
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[120px] gap-3 p-4 md:w-[120px] md:flex-cols-2 lg:w-[200px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10   items-center justify-center rounded-lg  px-4  text-lg font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
         
          <LoginButton> 
            {session &&
            <button className="group inline-flex h-10 bg-slate-300   items-center justify-center rounded-lg  px-4  text-lg font-bold transition-colors hover:bg-slate-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
             >
              Login
            </button>}
            {!session  &&
            <button className="group inline-flex h-10 bg-slate-300   items-center justify-center rounded-lg  px-4  text-lg font-bold transition-colors hover:bg-slate-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
             >
              Login
            </button>}
          </LoginButton>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-md font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
  


export default Navbar
