import React, { useState, useEffect } from 'react';
import Post from './post';
import WritePostTextarea from './post-textarea';
import firebase from '../../firebase/firebase';
const ProfileFeed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      await firebase.getPosts(setPosts);
    } catch {
      alert('not working');
    }
  }

  return (
    <>
      <div className="bg-darkP w-full h-full flex flex-col justify-between items-center overflow-y-auto">
        <div className="flex my-4 items-center justify-evenly">
          <a className="text-orangeP border-b-2 border-orangeP py-2 md:text-lg  md:px-16 text-xs">
            By The Community
          </a>
        </div>
        <WritePostTextarea posts={posts} setPosts={setPosts} />
        <div className="w-full flex flex-col justify-center items-center ">
          {posts &&
            posts.map((postObj, index) => <Post post={postObj} key={index} />)}
        </div>
      </div>
    </>
  );
};

export default ProfileFeed;
