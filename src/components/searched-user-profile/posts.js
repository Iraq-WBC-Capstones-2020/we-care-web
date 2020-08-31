import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import tree from './../profile-page/imgs/tree.svg';
import firebase from '../../firebase/firebase';
import { putPostsIntoGrid } from './../profile-page/util';

const ProfilePosts = () => {
  const [postsList, setPosts] = useState(null);

  const searchedUser = useSelector((state) => state.searchedUser);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  function getPosts() {
    try {
      firebase.getUserPosts(setPosts, searchedUser.uid);
    } catch (e) {
      alert('not working');
    }
  }
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
            <h1 className="sm:text-4xl text-3xl font-light mb-12 text-center">
              {searchedUser.username} hasn&apos;t posted yet.
            </h1>
            <img
              src={tree}
              alt="tree illustration"
              className="xl:w-1/4 lg:w-2/4 md:w-2/5 sm:w-2/4 w-2/3"
            />
          </>
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default ProfilePosts;
