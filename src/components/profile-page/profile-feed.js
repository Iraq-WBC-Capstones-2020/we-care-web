import React from 'react';
import ProfileNavbar from './navbar';
import ProfileSidebar from './sidebar';

const ProfileFeed = () => {
  return (
    <div className="h-screen bg-beige flex flex-col">
      <ProfileNavbar />
      <main className="flex h-full">
        <ProfileSidebar />
        <div className="w-4/5 h-full flex flex-col justify-center items-center">
          <div className="bg-white w-64 h-40 rounded-md text-darkP">
            hello world
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileFeed;
