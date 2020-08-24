import React from 'react';
import Navbar from './navbar';
import waitingSVG from './imgs/waiting.svg';

const Waiting = () => {
  return (
    <div className="h-screen flex flex-col bg-beige">
      <Navbar />
      <main className="flex flex-col justify-around items-center h-full w-full overflow-hidden text-center">
        <h1 className="xl:text-5xl md:text-6xl text-4xl text-darkP w-11/12 md:w-3/4 xl:w-1/2 font-light">
          Hang in there! We are connecting you to a listener!
        </h1>
        <img
          className="w-2/3 md:w-1/2 xl:w-3/12"
          src={waitingSVG}
          alt="waiting"
        ></img>
      </main>
    </div>
  );
};

export default Waiting;
