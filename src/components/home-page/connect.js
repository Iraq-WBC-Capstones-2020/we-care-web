import React from 'react';

import Illustration from './image/undraw-workout.svg';

export default function Connect() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex md:flex-row flex-col md:justify-evenly justify-center items-center w-full md:mb-40">
        <div className="md:mt-0 mt-32">
          <h1 className="text-blue-910 font-bold md:text-4xl text-5xl flex-1 ">
            let's make a <br />
            change today
          </h1>
          <h6 className="text-blue-910 md:mt-8 mt-5 md:text-base text-lg">
            Connect to caring people, chat anonymously
            <br /> and be part of a supportive community
          </h6>
          <button className="bg-blue-910 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded md:mt-16 mt-10">
            Connect Now
          </button>
        </div>
        <div className="flex justify-center items-center md:my-0 my-40">
          <img className="md:w-86 w-4/6" src={Illustration} />
        </div>
      </div>
    </div>
  );
}
