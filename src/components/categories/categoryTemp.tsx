"use client"
import blogPosts from "@/content.json"

import { Item } from "@radix-ui/react-navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";





export interface BlogContentTypes{

  id?: string,
category?: string,
  title?: string,
  author?: string,
  date?: string,
  content?: string,
   image_url?: string

}

interface Props{
category:string
}



const CategoreyTemp= (
{
category,
}:Props
) => {
  const post = blogPosts
  const posts = post.find((post: BlogContentTypes) => post.category === category)
  
return (
  <div><div className="flex items-center justify-center"> 
    <div className=" flex  flex-row items-center justify-center gap-x-10 border-2
    p-4 rounded-md">
        <div>
         <img className=' rounded-sm' src={posts?.image_url} alt='img' width={150} height={100}/>
        </div>
    <div className=' w'>
      <h2>{posts?.title}</h2>
      <p><span className=' font-bold'>Author : </span>{posts?.author}</p>
      <p> <span className=' font-bold'>Category : </span>{posts?.category}</p></div>
      <Button >
        <Link href={`/read/${posts?.id}`}>
        Read more</Link>
      </Button>
     
      <div>
       
       
      </div>
     
    </div>
    
    </div>
    <div className=" flex  item-center  justify-center m-20">
    <Button  >
      <Link href={"/"}>
      Back Home</Link>
    </Button></div>
  </div>
)

}
export default  CategoreyTemp


   