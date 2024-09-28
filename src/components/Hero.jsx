import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
<section className="relative w-full h-screen mx-auto">
<div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 h-full">
  <div className="flex flex-col justify-center items-center mt-5">
    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
    <div className="w-1 sm:h-80 h-40 violet-gradient" />
  </div>

  <div className="xl:mt-8 flex flex-row gap-10 w-full">
    <motion.div className="flex-1 xl:h-[700px] md:h-[600px] h-[400px] flex flex-col">
      <h1 className="font-black text-white lg:text-[60px] sm:text-[20px] xs:text-[20px] text-[20px] lg:leading-[60px] mt-2">
        {/* Gleamator Technologies<br /> */}
        envisions becoming <br />
        a beacon of innovation, illuminating<br />
       
      </h1>
      <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
       paths to success
        <br className="sm:block hidden" />
      through technology
      </p>
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="flex-1 xl:h-[550px]  md:h-[600px] h-[400px] p-0 mb-4 -mt-28"
    >
      {/* <ComputersCanvas/> */}
      <EarthCanvas/>
      {/* <ComputersCanvas/> */}
    </motion.div>
  </div>
</div>


  <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
      </div>
    </a>
  </div>
</section>

  );
};

export default Hero;
