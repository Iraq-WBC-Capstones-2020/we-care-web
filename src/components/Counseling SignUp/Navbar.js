import React from 'react';
const GeneralNavbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center w-screen py-6 bg-darkBeige text-darkP text-sm">
        <h1 className="text-lg">
          <a href={'#'} style={{ fontFamily: 'Pacifico' }}>
            We Care
          </a>
        </h1>
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
