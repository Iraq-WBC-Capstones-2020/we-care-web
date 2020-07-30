import React from 'react';

const RightSidebar = () => {
  return (
    <div className="w-1/5 h-full lg:w-2/12 bg-darkP flex flex-col justify-center text-beige">
      <div className="w-full self-center flex flex-col items-center">
        <button className="text-orangeP border border-orangeP border-solid rounded px-4 py-2">
          Change Avatar
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
