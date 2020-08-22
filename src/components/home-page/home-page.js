import React from 'react';
import Navbar from './navbar.js';
import Connect from './connect.js';
import Information from './information.js';
import AboutUs from './aboutUs.js';
import Footer from './footer.js';

const LandingPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar></Navbar>
        <Connect></Connect>
        <Information></Information>
        <AboutUs></AboutUs>
        <Footer></Footer>
      </div>
    </>
  );
};

export default LandingPage;
