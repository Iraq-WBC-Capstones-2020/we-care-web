import React from 'react';
import PropTypes from 'prop-types';

const Journal = ({ journal }) => {
  return (
    <div className="w-7/12 bg-white lg:w-1/2 rounded-md text-darkP flex flex-col justify-center p-8 my-5">
      <h2 className="text-lg font-semibold mb-4">{journal.title}</h2>
      <p className="text-base">{journal.body}</p>
    </div>
  );
};

export default Journal;

Journal.propTypes = {
  journal: PropTypes.object.isRequired,
};
