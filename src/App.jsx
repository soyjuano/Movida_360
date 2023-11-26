import { BrowserRouter, Link } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Footer } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative z-10'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <ToastContainer style={{ zIndex: 9999 }} />
        </div>
        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
