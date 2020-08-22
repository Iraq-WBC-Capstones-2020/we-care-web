import React from 'react';

import Facebook from './image/facebook.png';
import Twitter from './image/twitter.png';
import Instagram from './image/instagram.png';
import Quotes from './image/quotes.svg';
import Logo from './image/Logo.svg';

export default function Footer() {
  return (
    <div className="m-0 bg-orange-910   h-60 w-screen">
      <div className="flex flex-row justify-around ">
        <div className=" mt-16 mb-16">
          What mental health needs is more
          <br /> sunlight, more candor, and more
          <br /> unashamed conversation
          <img src={Quotes} className="ml-56" />
        </div>
        <div>
          <p className="text-blue-910 mt-16 mb-16">Your Feedback</p>
        </div>
      </div>
      <hr className="w-screen bg-orange-940" />
      <div className="flex flex-row justify-evenly mt-4">
        <div className="mt-2">© 2020 We Care </div>
        <div>
          <img src={Logo} className="w-16 h-16" />
        </div>
        <div className="flex flex-row justify-between  w-24 ">
          <div>
            <img src={Facebook} className="w-6 h-6" />
          </div>
          <div>
            <img src={Instagram} className="w-6 h-6" />
          </div>
          <div>
            <img src={Twitter} className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
