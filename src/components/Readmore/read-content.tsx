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
id:string
}



 const ReadContent= (
{
  id,
}:Props
 ) => {
    const post = blogPosts
    const posts = post.find((post: BlogContentTypes) => post.id === id)
    
  return (
    <div>
    
        <h2 className="  font-bold text-center text-4xl my-14">{posts?.title}</h2>
   
     
       <div className=" flex items-center justify-center">
         <img className=' rounded-sm '  src={posts?.image_url} alt='img' width={650} height={100}/>
        </div>
        
        <div className=" flex flex-col ml-10 justify-center gap-6  ">
      <p><span className=' font-bold'>Author : </span>{posts?.author}</p>
      <p> <span className=' font-bold'>Category : </span>{posts?.category}</p> </div>
      
      <p className=" px-20 pt-20 text-justify">{posts?.content}</p>
     
      <Button className=" m-20" >
        <Link href={"/"}>
        Back Home</Link>
      </Button>
     
      <div>
       
       
      </div>
    </div>
 
    
  )

  }
export default  ReadContent
  
