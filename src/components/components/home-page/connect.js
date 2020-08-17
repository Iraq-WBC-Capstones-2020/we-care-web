import React from 'react';

import Illustration from './image/undraw-workout.svg';

export default function Connect() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center w-full lg:mb-40 ">
        <div className="md:mt-0 mt-40">
          <h1 className="text-blue-910 font-bold md:text-4xl text-2xl flex-1  ">
            let's make a <br />
            change today
          </h1>
          <h6 className="text-blue-910 md:mt-8 mt-5 md:text-xl lg:text-base text-sm">
            Connect to caring people, chat anonymously
            <br /> and be part of a supportive community
          </h6>
          <button className="bg-blue-910 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded lg:mt-16 mt-10 mb-12">
            Connect Now
          </button>
        </div>
        <div className="flex justify-center items-center md:my-0 my-30 mb-32 mt-20 ">
          <img className="md:w-1/2 lg:w-86  w-80" src={Illustration} />
        </div>
      </div>
    </div>
  );
}
