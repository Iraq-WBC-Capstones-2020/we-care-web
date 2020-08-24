import React from 'react';
import PropTypes from 'prop-types';

const Journal = ({ journal }) => {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-center">
      <div className="overflow-y-auto w-11/12 md:w-9/12 bg-white h-full lg:w-1/2 rounded-md text-darkP flex flex-col justify-start items-center p-10 my-10">
        <h2 className="md:text-lg font-semibold mb-4">{journal.title}</h2>
        <p className="md:text-base text-sm">{journal.body}</p>
      </div>
    </div>
  );
};

export default Journal;

Journal.propTypes = {
  journal: PropTypes.object.isRequired,
};
