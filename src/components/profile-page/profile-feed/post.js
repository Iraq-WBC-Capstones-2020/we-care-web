import React from 'react';
import profilePic from '../imgs/profile.png';
import { FaHeart } from 'react-icons/fa';
import { MdReply } from 'react-icons/md';

const Post = () => {
  return (
    <div className="bg-white w-1/2 rounded-md text-darkP flex flex-col p-8">
      <div className="flex mb-3">
        <div className="mr-4">
          <img className="rounded-full" src={profilePic} />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Charles Davies</h2>
          <p className="text-sm text-orangeP">5 minutes ago</p>
        </div>
      </div>
      <div className="mb-3">
        Rich in mystery across the centuries decipherment finite but unbounded
        Rig Veda globular star cluster.
      </div>
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
