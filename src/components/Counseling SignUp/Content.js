import React from 'react';
import plant from '../Images/Plant 05.svg';
const Content = () => {
  return (
    <>
      <div className="w-1/2 sm:w-auto md:w-1/3 lg:w-1/3 xl:w-1/3 md:flex flex-col mx-10 mt-4">
        <div style={{ fontFamily: 'Roboto' }} className="mt-auto">
          <h1 className="text-2xl lg:text-5xl text-white leading-relaxed font-semibold ">
            Be A Reason.
          </h1>
          <h6 className="text-darkP font-medium text-xl lg:text-2xl">
            A reason someone is smiling and alive.
          </h6>
        </div>
        <div className="hidden md:block mr-20 ml-auto mt-10">
          <img src={plant} alt="Plant"></img>
        </div>
      </div>
    </>
  );
};

export default Content;
