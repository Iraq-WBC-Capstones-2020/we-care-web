import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Content from './Content';
import PropTypes from 'prop-types';

const CounslerSignUp = ({ username, email, password }) => {
  return (
    <>
      <div className="bg-darkBeige w-screen h-screen overflow-x-hidden  overflow-y-scroll">
        <Navbar />
        <div className="flex xl:justify-evenly h-full w-full justify-between xl:flex-row flex-col xl:items-start items-center">
          <Form username={username} email={email} password={password} />
          <Content />
        </div>
      </div>
    </>
  );
};

CounslerSignUp.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default CounslerSignUp;
