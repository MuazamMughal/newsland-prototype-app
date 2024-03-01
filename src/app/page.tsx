import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import cover from "@/../public/cover.jpg"
import  {BlogCards } from "@/components/hero/content-card";



export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className=" ">
      <Image className="  h-80  w-full"   src={cover}alt="hero image"  />



  </div>

  <div>

<BlogCards/>
  </div>
    <Footer/>  
    </div>
  )
}
