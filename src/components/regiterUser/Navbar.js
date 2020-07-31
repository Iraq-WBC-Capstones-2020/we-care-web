import React from 'react';
import './../../styles/main.css';

const Navbar = () => {
  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl font-body text-pink-930">We Care</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="pr-12 text-pink-930" href="#">
            For You
          </a>
          <a className="pr-10 text-pink-930" href="#">
            Counseling
          </a>
          <a className="mr-5 text-pink-930" href="#">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
