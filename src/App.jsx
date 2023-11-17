import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import camera360 from "./assets/camera360.mp4"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>

       {/* Video background for Navbar and Hero */}
      {/*  <div className="bg-cover bg-no-repeat bg-right-top h-screen relative">
          <video className="w-full h-full object-cover absolute inset-0" src={camera360} autoPlay loop muted />
        </div> */}

        <div className='relative z-10' src={camera360} autoPlay loop muted>
          <Navbar />
          <Hero />

        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
