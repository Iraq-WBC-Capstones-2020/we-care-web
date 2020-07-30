import React, { useState } from 'react';
import tree from '../imgs/tree.svg';
import moment from 'moment';
import { putPostsIntoGrid } from '../util';

const ProfileYourPosts = () => {
  const [yourPosts] = useState([
    {
      createdAt: moment().format('MMM Do YY'),
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies imperdiet porttitor.',
      likes: 34,
      numOfReplies: 1,
      replies: [
        { createdAt: moment().format('MMM Do YY'), body: "that's cool" },
      ],
    },
    {
      createdAt: moment().format('MMM Do YY'),
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies imperdiet porttitor.',
      likes: 34,
      numOfReplies: 1,
      replies: [
        { createdAt: moment().format('MMM Do YY'), body: "that's cool" },
      ],
    },
    {
      createdAt: moment().format('MMM Do YY'),
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies imperdiet porttitor.',
      likes: 34,
      numOfReplies: 1,
      replies: [
        { createdAt: moment().format('MMM Do YY'), body: "that's cool" },
      ],
    },
    {
      createdAt: moment().format('MMM Do YY'),
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies imperdiet porttitor.',
      likes: 34,
      numOfReplies: 1,
      replies: [
        { createdAt: moment().format('MMM Do YY'), body: "that's cool" },
      ],
    },
  ]);

  return (
    <div className="w-4/5 h-full flex flex-col justify-center items-center text-darkP overflow-y-auto overflow-x-hidden">
      {yourPosts.length !== 0 ? (
        <>
          <h1 className="text-2xl font-semibold mt-2 mb-10">Your Posts</h1>
          <div className="flex flex-wrap justify-center items-center">
            {putPostsIntoGrid(yourPosts)}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-5xl font-light mb-12">No posts yet</h1>
          <img src={tree} alt="tree illustration" className="w-1/4" />
        </>
      )}
    </div>
  );
};

export default ProfileYourPosts;
