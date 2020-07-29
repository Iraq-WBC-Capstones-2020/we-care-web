import React from 'react';
import ProfileNavbar from './navbar';
import ProfileSidebar from './sidebar';
import Post from './post';

const ProfileFeed = () => {
  return (
    <div className="h-screen bg-beige flex flex-col">
      <ProfileNavbar />
      <main className="flex h-full">
        <ProfileSidebar />
        <div className="w-4/5 h-full flex flex-col justify-center items-center">
          <Post />
        </div>
      </main>
    </div>
  );
};

export default ProfileFeed;
