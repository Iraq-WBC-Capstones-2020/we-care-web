import React, { useState } from 'react';
import Post from './post';
import WritePostTextarea from './post-textarea';

const ProfileFeed = () => {
  const [posts, setPosts] = useState([
    {
      body:
        'Rich in mystery across the centuries decipherment finite but unbounded Rig Veda globular star cluster.',
    },
  ]);
  return (
    <div className="w-full h-full flex flex-col justify-between items-center overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center overflow-y-auto">
        {posts &&
          posts.map((postObj, index) => <Post post={postObj} key={index} />)}
      </div>
      <WritePostTextarea posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default ProfileFeed;
