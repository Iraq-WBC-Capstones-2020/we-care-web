import React from 'react';
import Post from './post';
import WritePostTextarea from './post-textarea';

const ProfileFeed = () => {
  return (
    <div className="w-4/5 h-full flex flex-col justify-between items-center">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Post />
      </div>
      <WritePostTextarea />
    </div>
  );
};

export default ProfileFeed;
