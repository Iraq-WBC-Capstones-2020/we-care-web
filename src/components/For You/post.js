import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import firebase from '../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setSearchedUser } from './../../redux/actions';
import { useHistory } from 'react-router-dom';

const Post = ({ post }) => {
  let history = useHistory();

  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

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
      <div
        onClick={async (e) => {
          e.preventDefault();
          await firebase.getUser(post.authorId).then((doc) => {
            dispatch(setSearchedUser(doc));
            history.push(`/users/${doc.username}/about`);
          });
        }}
        className="flex cursor-pointer"
      >
        <div className="mr-4">
          <img
            className="rounded-full w-12 object-cover"
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
