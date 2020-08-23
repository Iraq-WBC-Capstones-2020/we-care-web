import React from 'react';
import Illustration from './image/undraw-workout.svg';
import { Link } from 'react-router-dom';

export default function Connect() {
  return (
    <div className="flex justify-evenly lg:justify-between lg:mx-auto items-center lg:mt-12 py-20">
      <div className="flex xl:flex-row flex-col xl:justify-evenly justify-between lg:ml-4">
        <div className="xl:mt-0 leading-relaxed mx-auto md:mx-0 w-3/4">
          <h1 className="text-darkP font-bold xl:text-4xl text-lg xl:w-1/2">
            Let&apos;s make a change today
          </h1>
          <h6 className="text-darkP xl:mt-8 mt-5 xl:text-base text-xs xl:w-1/2">
            Connect to caring people, chat anonymously and be part of a
            supportive community
          </h6>
          <button className="bg-darkP text-white font-bold py-2 border rounded-lg xl:mt-16 mt-10 w-1/2">
            <Link to="/signUp" className="text-sm ml-2">
              Connect Now
            </Link>
          </button>
        </div>
      </div>
      <img
        className="hidden lg:block w-2/6 mr-16"
        src={Illustration}
        alt="girl running"
      />
    </div>
  );
}
