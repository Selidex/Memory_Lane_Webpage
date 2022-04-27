import React from 'react';
import './app.css';
import Nav from '../Nav/Nav.js';
import Hero from '../Hero/Hero.js';
import Footer from '../Footer/Footer.js';
import About from '../About/About.js';
import Carousel from '../Carousel/Carousel.js';
import ImportantSection from '../ImportantSection/ImportantSection.js';
const App = (props) => {
  return (
    <>
      {/* <Nav /> */}
      <Hero />
      <About />
      <ImportantSection />
      <Carousel />
      <Footer />
    </>
  );
};

export default App;
