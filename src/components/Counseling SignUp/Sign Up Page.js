import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Content from './Content';
const CounslerSignUp = () => {
  return (
    <>
      <div className="bg-darkBeige w-screen xl:h-screen overflow-hidden">
        <Navbar />
        <div className="flex xl:justify-evenly justify-between xl:flex-row flex-col xl:items-start items-center w-full h-full mt-4">
          <Form />
          <Content />
        </div>
      </div>
    </>
  );
};

export default CounslerSignUp;
