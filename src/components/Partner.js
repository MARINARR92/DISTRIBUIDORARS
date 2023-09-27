import React from "react";

import { galleryData } from "../data";




const slides = galleryData.images.map(
  ({ original, width, height, title, description, link }) => ({
    src: original,
    width,
    height,
    title,
    description,
    link,
  })
);

const Partner = () => {
  return (
    <section className="py-40 lg:py-[160px]">

<div className='flex flex-col items-center justify-center mt-8 mb-8'>
        <h2 className="h2">Parceiros</h2>
        </div>
    
    <div className="grid gap-6 mb-6 md:grid-cols-2">

   
            
              {slides.map((slide, index) => (
                <div
                  className="grad h-[180px] w-full border-2 shadow-md flex 
              flex-row items-center justify-center overflow-hidden relative group"
                >
                  <div
                    className="grad h-[160px] w-[180px]
            overflow-hidden relative group flex items-center 
            justify-center"
                  >
                    <img
                      src={slide.src}
                      alt={`Slide ${index}`}
                      width={slide.width}
                      height={slide.height}
                      className="w-full h-auto mb-2"
                    />
                  </div>

                  <div className="flex flex-col justify-center items-start ml-6 w-80">
                    <h2 className="text-xl font-semibold mb-2">
                      {slide.title}
                    </h2>
                    <p className="mb-2">{slide.description}</p>
                    <a
                      href={slide.link}
                      className="text-blue mt-2 hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              ))}
        </div>
       
     
    </section>
  );
};

export default Partner;
