import React, { useState, useEffect } from 'react';
import Post from './post';
import tree from '../imgs/tree.svg';
import WritePostTextarea from './post-textarea';
import firebase from '../../../firebase/firebase';
import { useTranslation } from 'react-i18next';

const ProfileFeed = () => {
  const { t } = useTranslation();
  const [postsList, setPosts] = useState(null);
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
    <div className="w-full h-full flex flex-col justify-center items-center text-darkP overflow-y-auto overflow-x-hidden">
      {postsList ? (
        postsList.length !== 0 ? (
          <>
            <div className="w-full h-full flex flex-col justify-between items-center overflow-y-auto">
              <div className="w-full flex flex-col justify-center items-center ">
                {postsList &&
                  postsList.map((postObj, index) => (
                    <Post post={postObj} key={index} />
                  ))}
              </div>
              <WritePostTextarea posts={postsList} setPosts={setPosts} />
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

export default ProfileFeed;
