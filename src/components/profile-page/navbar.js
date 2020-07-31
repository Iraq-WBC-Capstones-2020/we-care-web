import React, { useState } from 'react';
import profileImg from './imgs/profile.png';
import logoImg from './imgs/Logo.svg';
import logoDark from './imgs/LogoDark.svg';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';
const ProfileNavbar = () => {
  const [iconClicked, setIconClicked] = useState(false);
  return (
    <>
      {iconClicked ? (
        <nav className="flex flex-col justify-center items-center w-screen h-screen py-6 bg-beige text-darkP text-sm absolute z-10">
          <img
            src={logoDark}
            className="w-24 mb-20 text-center cursor-pointer"
            alt="We Care logo"
          />
          <div className="flex justify-center items-center mb-20 text-lg">
            <Link to="/profile">
              <img
                src={profileImg}
                className="rounded-full w-12 object-cover"
              ></img>
            </Link>
            <Link to="/profile" className="ml-4">
              <p>Bruce Lee</p>
            </Link>
          </div>
          <ul className="flex flex-col justify-center text-center text-lg">
            <li className="mb-8">
              <a href={'#'}>For you</a>
            </li>
            <li className="mb-8">
              <a href={'#'}>Counseling</a>
            </li>
            <li>
              <Link to="/chatroom">Connect Now</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="flex lg:justify-around justify-between items-center w-screen py-6 bg-darkP text-beige text-sm">
          <img
            src={logoImg}
            className="w-20 lg:ml-0 md:ml-12 ml-8 cursor-pointer"
            alt="We Care logo"
          />
          <ul className="lg:flex hidden">
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
          <div className="lg:flex justify-center items-center hidden">
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
      )}

      <div
        className="lg:hidden lg:mr-0 md:mr-12 mr-8 m-auto mt-4 right-0 top-0 absolute z-20"
        onClick={() => {
          iconClicked ? setIconClicked(false) : setIconClicked(true);
        }}
      >
        {iconClicked ? (
          <IoIosClose className="text-5xl cursor-pointer text-darkP" />
        ) : (
          <FiMenu className="text-3xl cursor-pointer text-beige" />
        )}
      </div>
    </>
  );
};

export default ProfileNavbar;
