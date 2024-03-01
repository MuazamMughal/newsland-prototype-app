"use Client"
import blogPosts from "@/content.json"
import BlogCardTemp from "./blog-card-temp"


export interface BlogContentTypes{

    id?: string,
  category?: string,
    title?: string,
    author?: string,
    date?: string,
    content?: string,
     image_url?: string

}


export const BlogCards= () => {
    const post:BlogContentTypes[] = blogPosts
   
  return (
    <div className=" ">
    <h1 className=" text-center font-extrabold shadow-sm  text-4xl m-20 ">Latest News</h1>
    
    <div className="flex flex-col items-center justify-center  w-4/3 gap-y-6">
        {post.map(post => (
        <BlogCardTemp key={post.category} post={post} />
      ))}
      </div>
  </div>
  )
}
