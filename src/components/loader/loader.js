import React from 'react';
import './loader.css';
import PropTypes from 'prop-types';

const Loader = ({ classes }) => {
  return (
    <div
      className={`${
        classes ? classes : 'h-screen w-screen'
      } bg-beige flex justify-center items-center`}
    >
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  classes: PropTypes.string,
};
