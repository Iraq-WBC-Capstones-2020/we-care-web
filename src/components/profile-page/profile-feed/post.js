import React from 'react';
import profilePic from '../imgs/profile.svg';
import { FaHeart } from 'react-icons/fa';
import { MdReply } from 'react-icons/md';
import PropTypes from 'prop-types';
import moment from 'moment';

const Post = ({ post }) => {
  return (
    <div className="bg-white w-11/12 md:w-4/5 lg:w-1/2 rounded-md text-darkP flex flex-col md:p-8 p-5 my-8">
      <div className="flex">
        <div className="mr-4">
          <img alt="" className="rounded-full w-12" src={profilePic} />
        </div>
        <div>
          <h2 className="text-base font-semibold">Charles Davies</h2>
          <p className="text-sm text-orangeP">
            {moment().startOf('hour').fromNow()}
          </p>
        </div>
      </div>
      <div className="my-4 text-sm">{post.body}</div>
      <div className="flex items-center justify-end text-xs font-semibold">
        <FaHeart className="mr-3" />
        <span>56</span>
        <MdReply className="ml-6 mr-2 text-xl" />
        <p className="mr-6">Reply</p>
        <p>
          Replies (<span>2</span>)
        </p>
      </div>
    </div>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
