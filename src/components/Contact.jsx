import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import './Contact.css';

const Contact = () => {
  return (
    <div className={`flex bg-black-100 p-8 rounded-2xl h-auto -mt-24 relative`}>
      {/* First Column: Main Content */}
      <div className="column">
        <motion.div className="flex flex-col scrolling-text">
          <h2 className={`text-white text-2xl font-bold mb-4`}>Our Presence</h2>
          <h6 className={`text-gray-300 text-lg font-semibold mb-2`}>Point of Contacts</h6>
          <h6 className={`text-gray-300 text-lg font-semibold mb-2`}>Tailor-Made Infrastructure</h6>
          <h6 className={`text-gray-300 text-lg font-semibold mb-2`}>PAN India Execution Capability</h6>
        </motion.div>
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
        <div className="social-icons flex">
          <a href="mailto:ceo@gleamator.in" className="social-icon mr-4">
            <i className="bi bi-envelope-fill text-gray-300"></i>
          </a>
          <a href="tel:+911234567890" className="social-icon">
            <i className="bi bi-telephone-fill text-gray-300"></i>
          </a>
          {/* Add more icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
