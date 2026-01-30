"use client";

import { Carousel } from "flowbite-react";
import {FiChevronLeft, FiChevronRight, FiX} from "react-icons/fi"
import Image from "next/image";

export default function HeroCarousel({ images, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xl">
   <button className="absolute right-10 top-32 z-10 hover:text-white hover:scale-110 " onClick={onClose}>
    <FiX size={40} />
   </button>
   
     <div className="w-full max-w-5xl h-[70vh] px-4 mx-auto mt-30">
        <Carousel slideInterval={5000} indicators={true}
         leftControl={
            <div className="text-blue-700 bg-blue-200 hover:bg-blue-300 hover:text-blue-400 transition text-4xl rounded-full p-2">
              <FiChevronLeft />
            </div>
          }
          rightControl={
            <div className="text-blue-700  bg-blue-200 hover:bg-blue-300 hover:text-blue-400 transition text-4xl rounded-full p-2">
              <FiChevronRight />
            </div>
          }
        >
          {images.map((i,index)=>(
             <div key={i} className="relative h-full w-full">
            <Image key={index} src={`/properties/${i}`} fill alt=""/>
            </div>
          ))}
      </Carousel>
   </div>
  
     
    </div>
  );
}
