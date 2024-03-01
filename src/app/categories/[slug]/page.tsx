

import CategoreyTemp from '@/components/categories/categoryTemp'
import React from 'react'
import cover from "@/../public/cover.jpg"
import Image from 'next/image'


const Categoreypage = ({params }:{params:{slug:string}}) => {
    const data : string= params.slug


  return (
    <div>
        <Image className="  h-80  w-full"   src={cover}alt="hero image"  />
       <div className=' text-center font-extrabold text-4xl my-20'>{data}
        </div> 
        <CategoreyTemp category={data} />
        </div>
  )
}

export default Categoreypage