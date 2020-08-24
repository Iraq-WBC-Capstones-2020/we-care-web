import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import firebase from '../../firebase/firebase';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);

  async function addLike() {
    try {
      await firebase.addLike(post);
    } catch {
      alert('not working');
    }
  }

  async function removeLike() {
    try {
      await firebase.removeLike(post);
    } catch {
      alert('not working');
    }
  }

  return (
    <div className="bg-white w-11/12 md:w-4/5 lg:w-1/2 rounded-md text-darkP flex flex-col md:p-8 p-5 my-8">
      <div className="flex">
        <div className="mr-4">
          <img
            className="rounded-full w-12"
            src={post.authorAvatar}
            alt="Profile"
          />
        </div>
        <div>
          <h2 className="text-base font-semibold">{post.authorName}</h2>
          <p className="text-sm text-orangeP">
            <Moment fromNow>{post.createdAt}</Moment>
          </p>
        </div>
      </div>
      <div className="my-4 text-sm">{post.text}</div>
      <div
        className="flex items-center justify-end text-xs font-semibold"
        onClick={() => {
          if (liked) {
            removeLike();
            setLiked(false);
          } else {
            addLike();
            setLiked(true);
          }
        }}
      >
        <FaHeart
          className={`mr-1 ${
            liked ? 'text-red-600' : 'text-orangeP'
          }  mb-1 cursor-pointer`}
        />
        <span className="cursor-pointer">{post.likes}</span>
      </div>
    </div>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
