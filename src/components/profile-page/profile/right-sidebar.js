import React from 'react';
import profilePic from '../imgs/profile.svg';
import { FiSmile } from 'react-icons/fi';

const RightSidebar = () => {
  return (
    <div className="lg:w-1/5 h-20 lg:h-full bg-darkP flex flex-col justify-center text-beige">
      <div className="w-full self-center justify-evenly flex lg:flex-col items-center">
        <div className="flex lg:flex-col justify-center items-center">
          <img className="rounded-full w-12 lg:w-24 lg:mb-4" src={profilePic} />
          <h2 className="lg:text-lg text-base font-semibold lg:ml-0 ml-4">
            Charles Davies
          </h2>
          <p className="text-sm hidden lg:block font-light">
            Joined three years ago
          </p>
        </div>
        <div className="border border-beige border-solid rounded-full py-2 lg:mt-10 w-32 text-sm flex items-center justify-center">
          <FiSmile className="mr-3 text-xl" /> 34 friends
        </div>
        <button className="text-orangeP border border-orangeP border-solid rounded py-2 lg:mt-10 w-32 text-sm">
          Change Avatar
        </button>
        <button className="text-orangeP border border-orangeP border-solid rounded py-2 lg:mt-6 w-32 text-sm">
          Edit About
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
