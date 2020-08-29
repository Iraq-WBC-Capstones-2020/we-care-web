import React, { useState, useEffect } from 'react';
import tree from '../imgs/tree.svg';
import firebase from '../../../firebase/firebase';
import { putPostsIntoGrid } from '../util';
import { useTranslation } from 'react-i18next';

const ProfileYourPosts = () => {
  const [postsList, setPosts] = useState(null);
  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    try {
      firebase.getUserPosts(setPosts);
    } catch (e) {
      console.log(e);
      alert('not working');
    }
  }
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-darkP overflow-y-auto overflow-x-hidden">
      {postsList ? (
        postsList.length !== 0 ? (
          <>
            <div className="flex flex-wrap w-full justify-center items-center h-full overflow-y-auto overflow-x-hidden md:p-12 p-4 lg:p-20">
              {putPostsIntoGrid(postsList)}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-5xl font-light mb-12">{t('No posts yet')}</h1>
            <img src={tree} alt="tree illustration" className="w-1/4" />
          </>
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default ProfileYourPosts;
