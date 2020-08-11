import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Content from './Content';
import PropTypes from 'prop-types';

const CounslerSignUp = ({ username, email, password }) => {
  return (
    <>
      <div className="bg-darkBeige w-screen xl:h-screen overflow-hidden">
        <Navbar />
        <div className="flex xl:justify-evenly justify-between xl:flex-row flex-col xl:items-start items-center  mt-4 pb-6">
          <Form />
          <Content />
        </div>
      </div>
    </>
  );
};

export default CounslerSignUp;

CounslerSignUp.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
