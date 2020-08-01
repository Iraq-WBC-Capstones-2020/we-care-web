import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Content from './Content';
const CounslerSignUp = () => {
  return (
    <>
      <div className="bg-darkBeige sm:bg-darkBeige">
        <Navbar />
        <div className="md:flex justify-evenly items-baseline md:h-screen">
          <Form />
          <Content />
        </div>
      </div>
    </>
  );
};

export default CounslerSignUp;
