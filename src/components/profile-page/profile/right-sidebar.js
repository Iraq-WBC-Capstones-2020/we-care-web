import React from 'react';
import profilePic from '../imgs/profile.svg';
import { FiSmile } from 'react-icons/fi';

const RightSidebar = () => {
  return (
    <div className="w-1/5 h-full lg:w-2/12 bg-darkP flex flex-col justify-center text-beige">
      <div className="w-full self-center flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mb-3">
          <img className="rounded-full w-24 mb-4" src={profilePic} />
          <h2 className="text-lg font-semibold">Charles Davies</h2>
          <p className="text-sm font-light">Joined three years ago</p>
        </div>
        <div className="border border-beige border-solid rounded-full py-2 mt-10 w-32 text-sm flex items-center justify-center">
          <FiSmile className="mr-3 text-xl" /> 34 friends
        </div>
        <button className="text-orangeP border border-orangeP border-solid rounded py-2 mt-10 w-32 text-sm">
          Change Avatar
        </button>
        <button className="text-orangeP border border-orangeP border-solid rounded py-2 mt-6 w-32 text-sm">
          Edit About
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
