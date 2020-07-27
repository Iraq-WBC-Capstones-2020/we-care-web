import React from 'react';
import profileImg from './imgs/profile.jpg';

const ProfileFeed = () => {
  return (
    <nav className="flex justify-around items-center w-screen py-6 bg-darkP text-beige text-sm">
      <h1 className="text-base">
        <a href={'#'}>We Care</a>
      </h1>
      <ul className="flex">
        <li className="mr-10">
          <a href={'#'}>For you</a>
        </li>
        <li className="mr-10">
          <a href={'#'}>Counseling</a>
        </li>
        <li>
          <a href={'#'}>Connect Now</a>
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

export default ProfileFeed;
