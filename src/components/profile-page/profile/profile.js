import React from 'react';
import ProfileAbout from './about';
import RightSidebar from './right-sidebar';

const Profile = () => {
  return (
    <>
      <div className="lg:w-4/5 h-full flex flex-col justify-center items-center">
        <ProfileAbout />
      </div>
      <RightSidebar />
    </>
  );
};

export default Profile;
