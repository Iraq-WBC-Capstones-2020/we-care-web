import React from 'react';
import { FiSmile } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

const RightSidebar = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    currentUser && (
      <div className="lg:w-1/5 order-1 lg:order-2 w-11/12 md:w-3/5 lg:h-full lg:mt-0 mt-10 mb-5 lg:mb-0 lg:p-0 p-10 lg:bg-darkP bg-white flex flex-col justify-center lg:text-beige text-darkP lg:rounded-none rounded">
        <div className="w-full h-auto self-center justify-evenly flex flex-col items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full w-24 mb-4"
              src={currentUser.profilePicture}
              alt="Profile"
            />
            <h2 className="text-lg font-semibold lg:ml-0 ml-4">
              {currentUser.username}
            </h2>
            <p className="lg:text-sm md:text-base text-sm lg:font-light">
              Joined <Moment fromNow>{currentUser.dateJoined.toDate()}</Moment>
            </p>
          </div>
          <div className="border lg:border-beige border-darkP border-solid rounded-full py-2 mt-10 w-32 text-sm flex items-center justify-center lg:font-normal font-medium">
            <FiSmile className="mr-3 text-xl" /> 34 friends
          </div>
          <button className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded py-2 mt-10 w-32 text-sm">
            Change Avatar
          </button>
          <button className="text-orangeP border lg:border-orangeP border-darkP lg:bg-transparent bg-darkP border-solid rounded py-2 mt-6 w-32 text-sm">
            Edit About
          </button>
        </div>
      </div>
    )
  );
};

export default RightSidebar;
