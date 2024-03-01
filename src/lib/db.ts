import { PrismaClient } from "@prisma/client";

declare global {
    var prisma : PrismaClient|undefined
}

/*this is due ho refresh in next.js in developmet mode they need to stick to one client
other wist on every refresh they eate new prisma client
globle is not effected with hot reload*/ 

export const db =globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalThis.prisma =db

/* in production mode there will be no rd refres
 at every time so in that case no any chance of multiple prisma client
 export const db = new PrismaClient in prodection mode*/