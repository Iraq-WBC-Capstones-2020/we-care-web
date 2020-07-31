import React from 'react';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Post = ({ post, classes }) => {
  return (
    <div
      className={`bg-white w-1/2 rounded-md text-darkP flex flex-col lg:p-8 sm:p-6 my-4 ${classes}`}
    >
      <h2 className="text-base font-semibold">{post.createdAt}</h2>
      <div className="my-4 text-sm">{post.body}</div>
      <div className="flex items-center justify-end text-xs font-semibold">
        <FaHeart className="mr-3" />
        <span className="mr-6">{post.likes}</span>
        <p>
          Replies (<span>{post.numOfReplies}</span>)
        </p>
      </div>
    </div>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.string.isRequired,
};
