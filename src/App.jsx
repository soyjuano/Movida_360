import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import camera360 from "./assets/camera360.mp4"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>

      
        <div className='relative z-10'>
        <Navbar />
        <Hero />
        </div>
        {/* Video background for Navbar and Hero */}
    <div className='absolute inset-0 w-full max-h-screen object-cover z-0'>
      <video src={camera360} autoPlay loop muted className='w-full h-full object-cover' />
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
