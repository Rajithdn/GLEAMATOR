/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Services } from "../constants";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Us.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
At Gleamator Technologies, we radiate brilliance by integrating expertise in skill
training, IT services, and manpower outsourcing. As an emerging startup, we
assemble a team of seasoned professionals with extensive experience in these
domains, dedicated to delivering exceptional services to our clients
      </motion.p>
      <br/>
      <h3 className="text-white font-bold text-[24px]">Our Vision</h3>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
Gleamator Technologies envisions becoming a beacon of innovation, illuminating
paths to success through technology. We aim to inspire positive change, transforming
challenges into opportunities while leaving an indelible mark on the digital landscape
      </motion.p>
      <br/>
      <h3 className="text-white font-bold text-[24px]">Our Mission </h3>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
Our mission is to deliver transformative solutions, driving tangible value and growth
for clients. Through innovation and understanding, we craft bespoke technology
solutions, empowering individuals and businesses to thrive in an ever-evolving digital
world.
      </motion.p>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {Services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};


export default SectionWrapper(About, "about");
