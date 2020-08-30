import React, { useState, useEffect } from 'react';
import Post from './post';
import WritePostTextarea from './post-textarea';
import firebase from '../../../firebase/firebase';

const ProfileFeed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      await firebase.getFriendsPosts(setPosts);
    } catch (err) {
      console.log(err);
      alert('not working');
    }
  }

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
