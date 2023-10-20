import React from 'react';
import { motion } from 'framer-motion';
import { companyData } from '../data';

const Companys = () => {
  const { title, subtitle1, subtitle2, subtitle3, subtitle4, subtitle5, subtitle6  } = companyData; // Assuming subtitles is an array

  return (  
    <section className='py-20 lg:py-[80px]'>
      <motion.div 
        initial='hidden'
        className="container mx-auto px-4 py-20"
      >
        <div className='flex flex-col items-center justify-center mt-8 mb-8'>
        <h2 className="h2">{title}</h2>
        </div>
        
        
            <p className="mb-8 lg:mb-2 leading-relaxed text-left">
              {subtitle1}
            </p>
            <p className="mb-8 lg:mb-2 leading-relaxed text-left">
              {subtitle2}
<<<<<<< HEAD
            </p>        
=======
            </p>
>>>>>>> origin/main
            <p className="mb-8 lg:mb-2 leading-relaxed text-left">
              {subtitle3}
            </p>
            <p className="mb-8 lg:mb-2 leading-relaxed text-left">
              {subtitle4}
            </p>
            <p className="mb-8 lg:mb-2 leading-relaxed text-left">
              {subtitle5}
            </p>
            <p className="mb-8 lg:mb-2 leading-relaxed text-left">
              {subtitle6}
            </p>
       
      </motion.div>
    </section>
  )
}

export default Companys;
