import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Journal = () => {
  const currentJournal = useSelector((state) => state.currentJournal);

  return (
    currentJournal && (
      <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-center">
        <div className="overflow-y-auto w-11/12 md:w-9/12 bg-white h-full lg:w-1/2 rounded-md text-darkP flex flex-col justify-start items-center p-10 my-10">
          <h2 className="text-3xl font-light mb-12">{currentJournal.title}</h2>
          <p className="text-lg">{currentJournal.body}</p>
        </div>
      </div>
    )
  );
};

export default Journal;
