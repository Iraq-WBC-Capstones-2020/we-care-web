import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Content from './Content';
const CounslerSignUp = () => {
  return (
    <>
      <div className="bg-darkBeige sm:bg-darkBeige md:h-screen">
        <Navbar />
        <div className="md:flex justify-evenly items-center">
          <Form />
          <Content />
        </div>
      </div>
    </>
  );
};

export default CounslerSignUp;
