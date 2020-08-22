import React from 'react';

import Logo from './image/Logo.svg';
export default function Navbar() {
  return (
    <div className="w-screen p-5 sm:text-sm">
      <nav className="flex justify-between">
        <div className="ml-20 ml-12">
          <a href="#" className=" ">
            <img src={Logo} />
          </a>
        </div>
        <ul className="flex flex-row mr-24">
          <li className="pr-5 m-1">
            <a href="#"> For You </a>
          </li>
          <li className="pr-5 m-1">
            <a>Counseling</a>
          </li>
          <li className="pr-5 m-1">
            <a>Signup</a>
          </li>
          <li className="m-1">
            <a>Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
