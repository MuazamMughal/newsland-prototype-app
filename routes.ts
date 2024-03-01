/*
at tehre we gona define tha tat which routes used as public or which of some are proteced owns* /
 
 */
 export const publicRoutes = [
   "/",
   "/auth/new-verification",
   "/about-us",
   "/product/${post.title}"

]
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
  
]

export const apiAuthPrefix = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/User"