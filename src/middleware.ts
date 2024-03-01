
import authConfig from "../auth.config"
import NextAuth from "next-auth"
import {
    apiAuthPrefix,
    publicRoutes,
    authRoutes,
    DEFAULT_LOGIN_REDIRECT
} from "../routes"
import { signOut } from "../auth"


const{auth} =NextAuth(authConfig)


export default auth((req) => {
    /*because we are using prisma so we cannot able to use edge of next auth 
    for this we use auth.config.ts  creat as same level as we auth created */
  // req.auth
/* for now thiss app we make the 
staratigy that middle ware runs
 all on the routs to limit the user withoutlogin*/

const {nextUrl} = req
 const isLoggedIn = !!req.auth //we passing the req as boolen to isloggedIn

 const isApiAuthRoute = nextUrl.pathname.startsWith('apiAuthPrefix')
 
 const isPublicRoute = publicRoutes.includes(nextUrl.pathname)

 const isAuthRoute = authRoutes.includes(nextUrl.pathname)

 
 //now we gona make the logic for these routes
 if(isApiAuthRoute){
    return null
 }
 if(isAuthRoute){
    if(isLoggedIn){
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null
 }
 if (!isLoggedIn && !isPublicRoute) {
  let callbackUrl = nextUrl.pathname;

  if (nextUrl.search) {
    callbackUrl += nextUrl.search;
  }

  
 
}

 return null
})

// Optionally, don't invoke(to run on these paths) Middleware on some paths
export const config = {
    // for perfect matcher expession we ahve to got clarkauth
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}