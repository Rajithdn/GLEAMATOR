/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Services } from "../constants";

const ServiceCard = ({ index, title, icon, description }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isIconDisabled, setIsIconDisabled] = useState(false);

  const handleCardClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
    setIsIconDisabled(!isIconDisabled);
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onClick={handleCardClick}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex flex-col justify-between"
        >
          <img
            src={icon}
            alt="service-icon"
            className={`w-16 h-16 object-contain ${isIconDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            style={isIconDisabled ? { pointerEvents: 'none' } : {}}
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <div className={`overflow-hidden ${isDescriptionVisible ? "h-auto" : "h-0"} transition-all duration-300`}>
            <p className="text-white text-[16px] text-center mt-2 max-h-[100px] overflow-y-auto scrollbar-custom">
              {description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: ${isDescriptionVisible ? 'rgba(255, 255, 255, 0.5)' : 'transparent'};
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </Tilt>
  );
};


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
      <h2 className={styles.sectionHeadText} style={{ textAlign: 'center' }}>
        Our team
      </h2>
      <div className="services-container mt-27 flex flex-wrap gap-10">
        {Services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
