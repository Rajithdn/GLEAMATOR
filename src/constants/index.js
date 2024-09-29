import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Get In Touch",
  },
];

const Services = [
  {
    title: "Founders / Leadership",
    icon: web,
    description:"The founders of Gleamator Technologies bring a wealth of experience in both skilldevelopment, IT and HR services. They possess a deep understanding of thechallenges and opportunities within the industry, having previously worked onsimilar projects."
  },
  {
    title: "Project Managers:",
    icon: mobile,
    description:"The project management team consists ofseasoned professionals with a trackrecord of successfully executing skilldevelopment and IT services projects.They are adept at overseeing projectlifecycles, ensuring timely delivery, andmaintaining high-quality standards"
  },
  {
    title: "Technical Experts",
    icon: backend,
    description:"Gleamator Technologies boasts a team oftechnical experts proficient in various domains of IT services. These experts bring specialized skills in software development, database management, mobile appdevelopment, and other relevant areas, enabling the company to deliver innovative solutions tailored to the needs of its clients."
  },
  {
    title: "Skill Development Specialists",
    icon: creator,
    description:"The team includes individuals with expertise in designing and implementing skilldevelopment programs. They possess in-depth knowledge of industry-specifictraining methodologies, curriculum development, and assessment techniques,allowing Gleamator to deliver effective training solutions that align with market demands."
  },
  {
    title: "Support Staf",
    icon: creator,
    description:"Gleamator Technologies values customer satisfaction and provides dedicated support staff to address client queries, resolve issues, and ensure a smooth project experience. These individuals are committed to delivering exceptional service and fostering longterm relationships with clients."
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const OurSericess = [
  {
    title: "Skill Training",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Gleamator Technologies likely offers skill training programs aimed at enhancing the capabilities and competencies of individuals within organizations. These programs could cover a wide range of skills relevant to industries and job roles"
    ],
  },
  {
    title: "IT Services",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "This typically includes a broad spectrum of IT-related services such as IT consulting, system integration, Supply, AMC, and more. Gleamator Technologies likely provides these services to help businesses optimize their IT infrastructure and operations"
    ],
  },
  {
    title: "Corporate Training",
    icon: shopify,
    iconBg: "#383E56",
    points: [
    "Corporate training programs are designed to address specific needs within organizations, such as Skilling & Up-Skilling on latest Technology courses, Leadership Development, Team Building, Communication Skills, and IndustrySpecific knowledge. Gleamator Technologies would offer tailored training solutions to improve overall organizational effectiveness."
    ],
  },
  {
    title: "HR Services",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
    "This includes human resources consulting and outsourcing services. Gleamator Technologies offer assistance with recruitment, staffing solutions, HR policies and procedures, Performance Management, Employee relations, and other HRrelated functions to support businesses in managing their workforce effectively"
    ],
  },
];

const ceo = [
  {
    testimonial:
      "",
    name: "CEO",
    designation: "CEO",
    company: "GLEAMATOR",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
];

const Directors = [
  {
    testimonial:"",
    name: "Directors",
    designation: "Directors",
    company: "GLEAMATOR",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:"",
    name: "Directors",
    designation: "Directors",
    company: "GLEAMATOR",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:"",
    name: "Directors",
    designation: "Directors",
    company: "GLEAMATOR",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const members = [
  {
    testimonial:"",
    name: "members",
    designation: "members",
    company: "GLEAMATOR",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:"",
    name: "members",
    designation: "members",
    company: "GLEAMATOR",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:"",
    name: "members",
    designation: "members",
    company: "GLEAMATOR",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { Services,ceo,members,Directors, technologies, OurSericess, projects };
