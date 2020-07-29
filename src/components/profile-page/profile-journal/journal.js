import React from 'react';

const Journal = ({ journal }) => {
  return (
    <div className="bg-white w-1/2 rounded-md text-darkP flex flex-col justify-center p-8 my-5">
      <h2 className="text-xl font-semibold mb-4">{journal.title}</h2>
      <p>{journal.body}</p>
    </div>
  );
};

export default Journal;
