import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
const CounslerSignUp = () => {
  return (
    <>
      <div className="bg-darkBeige h-full w-full ">
        <Navbar />
        <div
          className="flex justify-around items-center w-screen h-screen 
        py-6"
        >
          {/* this div is for splitting the other two*/}

          <Form />
        </div>
      </div>
    </>
  );
};

export default CounslerSignUp;
