import React, { useRef } from 'react';
import { FiSend } from 'react-icons/fi';

const WritePostTextarea = ({ posts, setPosts }) => {
  const postInput = useRef('');
  return (
    <div className="w-1/2 text-darkP relative mb-8">
      <h2 className="text-xl font-semibold">Write a post</h2>
      <textarea
        ref={postInput}
        className="resize-none rounded-md text-darkP px-4 py-3 h-40 w-full mt-4"
        placeholder="Start typing..."
      ></textarea>
      <button
        onClick={() => {
          setPosts([...posts, { body: postInput.current.value }]);
        }}
        className="bg-darkP flex items-center text-beige rounded-sm px-6 py-1 absolute bottom-0 right-0 mr-4 mb-4 hover:text-orangeP"
      >
        <p>Share</p>
        <FiSend className="ml-2" />
      </button>
    </div>
  );
};

export default WritePostTextarea;