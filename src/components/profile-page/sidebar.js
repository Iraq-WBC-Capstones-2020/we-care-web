import React from 'react';

const ProfileSidebar = () => {
  return (
    <div className="w-1/5 lg:w-2/12 bg-darkP flex flex-col justify-start text-beige text-center">
      <div className="w-full mt-3">
        <h1 className="font-semibold text-lg">dash</h1>
        <ul className="flex flex-col text-sm mt-6">
          <li className=" text-orangeP border-l-4 border-orangeP py-3">
            <a href={'#'}>Feed</a>
          </li>
          <li className="py-3">
            <a href={'#'}>Journal</a>
          </li>
          <li className="py-3">
            <a href={'#'}>Messages</a>
          </li>
          <li className="py-3">
            <a href={'#'}>Your Posts</a>
          </li>
          <li className="py-3">
            <a href={'#'}>Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
