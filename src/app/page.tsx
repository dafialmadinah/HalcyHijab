"use client";
import { SectionAboutUs } from "@/sections/SectionAboutUs";
import { SectionBlogs } from "@/sections/SectionBlogs";
import { SectionContact } from "@/sections/SectionContact";
import { SectionHome } from "@/sections/SectionHome";
import { SectionNews } from "@/sections/SectionNews";
import { SectionReview } from "@/sections/SectionReview";
import { SectionShop } from "@/sections/SectionShop";
import { SectionWhy } from "@/sections/SectionWhy";



export default function Home() {


  return (
    <main className="w-screen relative">
    <SectionHome/>
    <SectionWhy/>
    <SectionShop/>
    <SectionAboutUs/>
    <SectionReview/>
    <SectionBlogs/>
    <SectionNews/>
    <SectionContact/>

      {/* ABOUT US */}             


        {/* CUstomer Review*/}
        


      {/* Section BLOGS */}
      

      {/* newsletter */}
      
{/* Section Contact Us (Footer) */}

    </main>
  );
}