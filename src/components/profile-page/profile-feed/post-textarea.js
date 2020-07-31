import React, { useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import PropTypes from 'prop-types';

const WritePostTextarea = ({ posts, setPosts }) => {
  const postInput = useRef('');
  return (
    <div className="lg:w-1/2 text-darkP relative my-8">
      <h2 className="text-lg font-semibold">Write a post</h2>
      <textarea
        ref={postInput}
        id={'post-textarea'}
        className="resize-none rounded-md text-darkP px-4 py-3 h-40 w-full mt-4"
        placeholder="Start typing..."
      ></textarea>
      <button
        onClick={() => {
          setPosts([...posts, { body: postInput.current.value }]);
          postInput.current.value = '';
          postInput.current.scrollIntoView();
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

WritePostTextarea.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};
