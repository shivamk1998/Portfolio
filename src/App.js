import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Portfolio from './components/portfolio/Portfolio';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';



const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio/>
        {/* <Blog /> */}
        {/* <Pricing/> */}
        <Contact />

      </main>
    </>
  );
}

export default App;
