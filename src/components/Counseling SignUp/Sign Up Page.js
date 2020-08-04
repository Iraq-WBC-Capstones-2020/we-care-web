import React from 'react';
import Navbar from './navbar';
import Form from './Form';
import Content from './Content';
const CounslerSignUp = () => {
  return (
    <>
      <div className="bg-darkBeige w-screen lg:h-screen overflow-hidden">
        <Navbar />
        <div className="flex justify-evenly lg:flex-row flex-col items-center w-full mt-8">
          <Form />
          <Content />
        </div>
      </div>
    </>
  );
};

export default CounslerSignUp;
