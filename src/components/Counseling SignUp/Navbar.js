import React from 'react';
import logo from '../Images/Logo.svg';

const GeneralNavbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center py-6 bg-darkBeige text-darkP text-sm">
        <img src={logo} className="w-20" alt="We Care logo" />

        <ul className="flex">
          <li className="mr-10">
            <a href={'#'}>For you</a>
          </li>
          <li className="mr-10">
            <a href={'#'}>Counseling</a>
          </li>
          <li className="mr-10">
            <a href={'#'}>Sign Up</a>
          </li>
          <li className="mr-10">
            <a href={'#'}>Log In</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default GeneralNavbar;
