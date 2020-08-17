import React from 'react';

import Facebook from './image/facebook.png';
import Twitter from './image/twitter.png';
import Instagram from './image/instagram.png';
import Quotes from './image/quotes.svg';
import Logo from './image/Logo.svg';

export default function Footer() {
  return (
    <div className="m-0 bg-orange-910   h-60 w-screen">
      <div className="flex md:flex-row justify-around flex-col">
        <div className=" md:mt-16 md:mb-16 ml-12 mt-12">
          What mental health needs is more
          <br /> sunlight, more candor, and more
          <br /> unashamed conversation
          <img src={Quotes} className="ml-56" />
        </div>
        <div>
          <p className="text-blue-910 md:mt-16 md:mb-16 ml-12 mt-6 mb-6">Your Feedback</p>
        </div>
      </div>
      <hr className="w-screen bg-orange-940" />
      <div className="flex flex-row justify-evenly mt-4">
        <div className="md:mt-2 md:text-base text-xs ml-0">© 2020 We Care </div>
        <div>
          <img src={Logo} className="md:w-16 md:h-16 w-12 h-8 mt-0" />
        </div>
        <div className="flex flex-row justify-between md:w-24 20">
          <div>
            <img src={Facebook} className="md:w-6 md:h-6 w-4 h-4" />
          </div>
          <div>
            <img src={Instagram} className="md:w-6 md:h-6 w-4 h-4" />
          </div>
          <div>
            <img src={Twitter} className="md:w-6 md:h-6 w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
