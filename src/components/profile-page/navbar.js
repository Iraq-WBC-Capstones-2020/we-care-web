import React from 'react';
import profileImg from './imgs/profile.png';
import logo from './imgs/Logo.svg';
import { Link } from 'react-router-dom';

const ProfileNavbar = () => {
  return (
    <nav className="flex justify-around items-center w-screen py-6 bg-darkP text-beige text-sm">
      <img src={logo} className="w-20" alt="We Care logo" />
      <ul className="flex">
        <li className="mr-10">
          <a href={'#'}>For you</a>
        </li>
        <li className="mr-10">
          <a href={'#'}>Counseling</a>
        </li>
        <li>
          <Link to="/chatroom">Connect Now</Link>
        </li>
      </ul>
      <div className="flex items-center">
        <a href={'#'}>
          <img
            src={profileImg}
            className="rounded-full h-10 w-10 object-cover"
          ></img>
        </a>
        <p className="ml-2">
          <a href={'#'}>Bruce Lee</a>
        </p>
      </div>
    </nav>
  );
};

export default ProfileNavbar;
