
import { galleryData } from '../data';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper';



const slides = galleryData.images.map(({original, width, 
  height})=> ({
    src: original,
    width,
    height,
  }));

const GallerySection = () => {

  const {title} = galleryData;
  

  return (
    <div className='mb-16'>
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h2 className='h2 mb-12 mt-12 text-center xl:text-center'>{title}</h2>
    </div>

    <motion.div
      variants={fadeIn('scale')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.6 }}>
    <Swiper 
      modules={[Pagination, Navigation]} 
      loop={false} 
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
       },
    }}
    pagination={{
      clickable: true,      
    }}
    className='mx-auto max-w-[360px] md:max-w-lg
    xl:max-w-[1410px]'
    >
      <>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='grad h-[160px] w-[180px] border-2 rounder-[8px]
            overflow-hidden relative group flex items-center 
            justify-center mb-20'>
            
              <img 
                src={slide.src} 
                alt={`Slide ${index}`} 
                width={slide.width} 
                height={slide.height} 
                className='group-hover:scale-90 transition-all'
              />
                     
            


          </div>
                          
          
        </SwiperSlide>
      ))}
      </>

    </Swiper>

    </motion.div>

    
    
  </div>
  );
};

export default GallerySection;
