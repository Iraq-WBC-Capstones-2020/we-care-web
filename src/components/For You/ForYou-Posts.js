import React, { useState, useEffect } from 'react';
import Post from './post';
import WritePostTextarea from './post-textarea';
import firebase from '../../firebase/firebase';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-darkP w-full h-full flex flex-col justify-between items-center overflow-y-auto">
        <div className="flex my-4 items-center justify-evenly">
          <p className="text-orangeP border-b-2 border-orangeP py-2 md:text-lg  md:px-16 text-xs">
            {t('By The Community')}
          </p>
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
