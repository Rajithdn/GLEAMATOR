import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  OurSerices,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Services,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />  
          <div className="relative z-0">
          <Hero />
          <StarsCanvas />
        </div>
        </div>
        <About />
        <OurSerices />
        <Tech />
        <Services />
        <Feedbacks />
        {/* <div className="relative z-0"> */}
          <Contact />
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
