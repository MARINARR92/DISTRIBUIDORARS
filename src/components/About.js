import React from "react";
import { aboutData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section className="bg-[#f9f9f9] lg:py-16 xl:pb-[160px]">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row gap-x-[70px] lg:items-center"
        >
          
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 h-full xl:mt-48"
          >
            <h2 className="h2">{title}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey font-semibold">
                <p className="mb-6">{subtitle1}</p>
                <p className="mb-9">{subtitle2}</p>
                <a
                  href={"http://localhost:3000/Company"}
                  className="text-blue mt-2 hover:underline"                 
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-lg btn-link">
                    {btnText} <div className="text-xl">{btnIcon}</div>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col lg:flex-row flex-1 mt-24"
          >
            <div
              className="border-spacing-4 border-black rounded-lg flex-1 bg-about bg-contain bg-no-repeat
          h-[551px] w-[658px] bg-center"
            >
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
