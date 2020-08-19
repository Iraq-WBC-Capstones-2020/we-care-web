import React from 'react';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import firebase from 'C:/Users/yaras/Desktop/Recoded Bootcamp/we-care-web/src/firebase/firebase.js';

const Post = ({ post, classes }) => {
  return (
    <div
      className={`bg-white w-full md:w-11/12 xl:w-3/4 rounded-md text-darkP flex flex-col md:p-8 p-5 my-4 ${classes}`}
    >
      <h2 className="text-base font-semibold">{post.createdAt}</h2>
      <div className="my-4 text-sm">{post.text}</div>
      <div className="flex items-center justify-end text-xs font-semibold">
        <FaHeart className="mr-3" />
        <span className="mr-6">{post.likes}</span>
      </div>
    </div>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.string.isRequired,
};
