import { productData } from "../data";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const slides = productData.images.map(
  ({ original, width, height, title, link }) => ({
    src: original,
    width,
    height,
    title,
    link,
  })
);

const ProductsLine = () => {
  const { btnText, btnIcon } = productData;

  return (
    <div className="mb-16">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="h2 mb-12 mt-12 text-center xl:text-center">
          Linha de Produtos
        </h2>
      </div>

      <motion.div
        variants={fadeIn("scale")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
      >
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
          className="mx-auto max-w-[360px] md:max-w-lg
    xl:max-w-[1410px]"
        >
          <>
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="grad w-[280px] h-[362px] rounder-[8px]
            overflow-hidden relative group"
                >
                  <div
                    className="w-[280px] h-[240px] flex items-center 
              justify-center relative"
                  >
                    <img
                      src={slide.src}
                      alt={`Slide ${index}`}
                      width={slide.width}
                      height={slide.height}
                      className="group-hover:scale-90 transition-all"
                    />
                  </div>

                  <div className="px-6 pb-8 flex flex-col">
                    <div className="text-center text-gray-800 mb-3 link ">
                      {slide.title}
                    </div>
                    <div className="text-[15px] mb-2 lg:mb-9 items-center justify-center mx-4 text-blue-400">
                      <a
                        href={slide.link}
                        className="text-blue mt-2 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn">
                          {btnText} <div className="text-xl">{btnIcon}</div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default ProductsLine;
