import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Content from './Content';
const CounslerSignUp = () => {
  return (
    <>
      <div className="bg-darkBeige sm:bg-darkBeige">
        <Navbar />
        <div className="sm:flex justify-around items-center h-screen">
          {/* this div is for splitting the other two*/}
          <Form></Form>
          <Content />
        </div>
      </div>
    </>
  );
};

export default CounslerSignUp;
