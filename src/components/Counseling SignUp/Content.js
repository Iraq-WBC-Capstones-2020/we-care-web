import React from 'react';
import plant from '../Images/Plant 05.svg';
const Content = () => {
  return (
    <div className="order-1 xl:order-2 md:w-auto w-full flex flex-col xl:justify-between justify-center items-end xl:mb-auto mb-8">
      <div className="w-full flex flex-col md:pl-0 pl-12">
        <h1 className="md:text-5xl text-4xl text-white leading-relaxed font-semibold">
          Be A Reason
        </h1>
        <h6 className="text-darkP md:text-3xl text-2xl font-light md:w-3/5 w-11/12">
          A reason someone is smiling and alive.
        </h6>
      </div>
      <div className="mt-10 lg:block flex md:justify-end justify-center md:w-auto w-full">
        <img className="md:w-9/12 w-5/12" src={plant} alt="Plant"></img>
      </div>
    </div>
  );
};

export default Content;
