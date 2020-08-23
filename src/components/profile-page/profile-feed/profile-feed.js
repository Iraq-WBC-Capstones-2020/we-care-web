import React, { useState, useEffect } from 'react';
import Post from './post';
import WritePostTextarea from './post-textarea';

const ProfileFeed = () => {
  useEffect(() => {
    const textarea = document.getElementById('post-textarea');
    textarea.scrollIntoView();
  }, []);
  const [posts, setPosts] = useState([
    {
      body:
        'Rich in mystery across the centuries decipherment finite but unbounded Rig Veda globular star cluster.',
    },
    {
      body:
        'Rich in mystery across the centuries decipherment finite but unbounded Rig Veda globular star cluster.',
    },
  ]);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center overflow-y-auto">
      <div className="w-full flex flex-col justify-center items-center ">
        {posts &&
          posts.map((postObj, index) => <Post post={postObj} key={index} />)}
      </div>
      <WritePostTextarea posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default ProfileFeed;
