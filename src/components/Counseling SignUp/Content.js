import React from 'react';
import plant from '../Images/Plant 05.svg';
const Content = () => {
  return (
    <div className="order-1 lg:order-2 w-full flex flex-col justify-between items-center">
      <div className="w-full pl-32 lg:pl-0">
        <h1 className="lg:text-5xl text-6xl text-white leading-relaxed font-semibold">
          Be A Reason
        </h1>
        <h6 className="text-darkP lg:text-3xl text-4xl font-light lg:pr-40 pr-64">
          A reason someone is smiling and alive.
        </h6>
      </div>
      <div className="mt-10 lg:w-auto w-full lg:block flex justify-end">
        <img className="lg:w-4/5 w-48" src={plant} alt="Plant"></img>
      </div>
    </div>
  );
};

export default Content;
