"use client"
import React from 'react'
import {BlogContentTypes} from '@/components/hero/content-card'
import blogPosts from "@/content.json"
import  ReadContent  from '@/components/Readmore/read-content'




const page = (
    {params }:{params:{slug:string}}) => {
        
     const Sid :string= params.slug
 


    
        
  return (
    <div>
       
        <ReadContent id={Sid}/>
        
      
        
      
        
      
       
        
      
        

        
    
    
    </div>

  )



}

export default page