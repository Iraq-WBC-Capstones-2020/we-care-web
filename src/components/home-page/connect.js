import React from 'react';
import Illustration from './image/undraw-workout.svg';

export default function Connect() {
  return (
    <div className="w-full h-full flex justify-center items-center lg:mt-12 py-20">
      <div className="flex xl:flex-row flex-col xl:justify-evenly justify-center items-center w-full">
        <div className="xl:mt-0 mt-32">
          <h1 className="text-darkP font-bold xl:text-4xl text-5xl flex-1 ">
            Let&apos;s make a <br />
            change today
          </h1>
          <h6 className="text-darkP xl:mt-8 mt-5 xl:text-base text-xl">
            Connect to caring people, chat anonymously
            <br /> and be part of a supportive community
          </h6>
          <button className="bg-darkP text-white font-bold py-2 px-4 border rounded-xl xl:mt-16 mt-10">
            Connect Now
          </button>
        </div>
        <div className="flex justify-center items-center xl:my-0">
          <img className="w-4/6" src={Illustration} />
        </div>
      </div>
    </div>
  );
}
