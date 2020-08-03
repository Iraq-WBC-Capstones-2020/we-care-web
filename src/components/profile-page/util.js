import React from 'react';
import Post from './profile-your-posts/post';

export function putPostsIntoGrid(posts) {
  let lastIndex = posts.length - 1;
  return posts.map((post, index) => {
    if (index % 2 === 1) {
      return (
        <div
          className="flex justify-start items-center w-full md:w-1/2"
          key={index}
        >
          <Post post={post} classes={'md:ml-5'} />
        </div>
      );
    } else if (index % 2 !== 1 && index === lastIndex) {
      return (
        <div
          className="flex justify-center items-center w-full md:w-1/2"
          key={index}
        >
          <Post post={post} classes={''} />
        </div>
      );
    } else {
      return (
        <div
          className="flex justify-end items-center w-full md:w-1/2"
          key={index}
        >
          <Post post={post} classes={'md:mr-5'} />
        </div>
      );
    }
  });
}
