import React from 'react';
import {BlogContentTypes} from '@/components/hero/content-card';
import { Button } from '../ui/button';
import Image from 'next/image';
import img from "@../../../public/tempsnip.png"
import Link from 'next/link';

interface Props {
  post: BlogContentTypes;
}

const BlogCardTemp: React.FC<Props> = ({ post }) => {
  return (
    <div className=" flex flex-row items-center justify-center gap-x-10 border-2
    p-4 rounded-md">
        <div>
         <img className=' rounded-sm' src={post.image_url} alt='img' width={150} height={100}/>
        </div>
    <div className=' w'>
      <h2>{post.title}</h2>
      <p><span className=' font-bold'>Author : </span>{post.author}</p>
      <p> <span className=' font-bold'>Category : </span>{post.category}</p></div>
      <Button >
        <Link href={`/read/${post.id}`}>
        Read more</Link>
      </Button>
     
      <div>
       
       
      </div>
    </div>
  );
};

export default BlogCardTemp;
