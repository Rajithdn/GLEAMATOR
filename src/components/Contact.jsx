/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div className={`flex bg-black-100 p-8 rounded-2xl h-auto -mt-24 relative`}>
      {/* Styles for scrolling text */}
      <style>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .scrolling-text {
          animation: scrollUp 20s linear infinite; /* Adjust duration for speed */
          height: 100%; /* Ensure it fills the height */
          display: flex;
          flex-direction: column;
        }

        .scroll-container {
          height: 300px; /* Adjust height as needed */
          overflow: hidden; /* Hide overflow to keep text in view */
        }

        .column {
          flex: 1; /* Allow each column to take equal space */
          padding: 0 16px; /* Add some padding */
        }

        .social-icons {
          display: flex;
          align-items: center;
          gap: 10px; /* Space between icons */
        }

        .social-icon {
          width: 24px; /* Adjust size of icons */
          height: 24px; /* Adjust size of icons */
          cursor: pointer;
        }
      `}</style>

      {/* First Column: Main Content */}
      <div className="column">
        <div className="scroll-container">
          <motion.div className="flex flex-col scrolling-text">
            <h2 className={`text-white text-2xl font-bold mb-4`}>Gleamator Technologies</h2>
            <p className={`text-gray-300 mb-4`}>
              Gleamator Technologies has a robust presence across India with a network of point of contacts and infrastructure that is tailored to meet various project requirements.
            </p>
            <h3 className={`text-white text-xl font-semibold mb-2`}>Point of Contacts:</h3>
            <p className={`text-gray-300 mb-4`}>
              Gleamator Technologies has established contacts in different locations across India. These points of contact serve as local hubs where they can engage with clients, manage projects, and provide support.
            </p>
            <h3 className={`text-white text-xl font-semibold mb-2`}>Tailor-Made Infrastructure:</h3>
            <p className={`text-gray-300 mb-4`}>
              Gleamator Technologies has developed or can readily access infrastructure that is customized or specifically configured to meet the needs of different types of projects. This could include physical facilities, IT infrastructure, equipment, and resources necessary for project execution.
            </p>
            <h3 className={`text-white text-xl font-semibold mb-2`}>PAN India Execution Capability:</h3>
            <p className={`text-gray-300 mb-4`}>
              With our extended arms or network across India, Gleamator Technologies is capable of executing projects nationwide. This indicates the ability to scale operations and resources as required, ensuring they can handle projects of varying sizes and complexities across different regions of the country.
            </p>
            <h3 className={`text-white text-xl font-semibold mb-2`}>Our Presence</h3>
            <p className={`text-gray-300`}>
              Overall, this presence and capability highlight Gleamator Technologies' readiness to meet the needs of clients across India with tailored solutions and comprehensive project execution capabilities.
            </p>
            <p className={`text-gray-300 mb-4`}>
              In conclusion, Gleamator Technologies stands out as a versatile and reliable partner for organizations seeking comprehensive solutions in IT services, skill training, corporate training, and HR services. With a strong Pan-India presence and customized infrastructure, we offer tailored solutions that meet diverse project requirements efficiently.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Second Column: Contact Us Section */}
      <div className="column">
        <h3 className={`text-white text-xl font-semibold mb-2`}>Contact Us</h3>
        <p className={`text-gray-300 mb-4`}>
          Email: <a href="mailto:ceo@gleamator.in" className="text-blue-400 underline">ceo@gleamator.in</a>
        </p>
      </div>

      {/* Third Column: Social Icons */}
      <div className="column">
        <h3 className={`text-white text-xl font-semibold mb-2`}>Follow Us</h3>
        <div className="social-icons">
          <img src="/path/to/mail-icon.png" alt="Mail" className="social-icon" />
          <img src="/path/to/phone-icon.png" alt="Call" className="social-icon" />
          {/* Add more icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
