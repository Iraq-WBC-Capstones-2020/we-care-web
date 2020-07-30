import React from 'react';
import profileImg from './imgs/profile.png';
import logo from './imgs/Logo.svg';
import { Link } from 'react-router-dom';

const ProfileNavbar = () => {
  return (
    <nav className="flex justify-around items-center w-screen py-6 text-beige text-sm">
      <img src={logo} className="w-20" alt="We Care logo" />
      <ul className="flex">
        <li className="mr-10">
          <a href={'#'}>Home</a>
        </li>
        <li className="mr-10">
          <a href={'#'}>For you</a>
        </li>
        <li>
          <a href={'#'}>Counseling</a>
        </li>
      </ul>
      <div className="flex justify-center items-center">
        <Link to="/profile">
          <img
            src={profileImg}
            className="rounded-full h-10 w-10 object-cover"
          ></img>
        </Link>
        <Link to="/profile">
          <p className="ml-2">Bruce Lee</p>
        </Link>
      </div>
    </nav>
  );
};

export default ProfileNavbar;
