import React from 'react';

import Logo from './image/Logo.svg';
export default function Navbar() {
  return (
    <div className="w-screen lg:p-5  p-2 lg:text-base text-sm mt-2">
      <nav className="flex justify-between">
        <div className="lg:ml-20  md:ml-8 ml-2 ">
          <a href="#">
            <img src={Logo} className="md:w-24 w-16 " />
          </a>
        </div>
        <ul className="flex flex-row lg:mr-24 md:mr-8 mr-2">
          <li className="md:pr-5  pr-2  m-1">
            <a href="#">
              <p className="md:text-base text-2xsm "> For You</p>{' '}
            </a>
          </li>
          <li className="md:pr-5  pr-2  m-1">
            <a>
              <p className="md:text-base text-2xsm ">Counseling</p>
            </a>
          </li>
          <li className="md:pr-5  pr-2 m-1">
            <a>
              <p className="md:text-base text-2xsm ">Signup</p>
            </a>
          </li>
          <li className="pr-2 m-1">
            <a>
              <p className="md:text-base text-3xsm ">Login</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
