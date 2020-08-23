import React, { useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import PropTypes from 'prop-types';
import firebase from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const WritePostTextarea = () => {
  const postInput = useRef('');
  const { t, i18n } = useTranslation();
  return firebase.getCurrentUsername() ? (
    <div className="lg:w-1/2 md:w-4/5 w-11/12 text-orangeP relative my-8">
      <h2 className="md:text-lg font-semibold">{t('write_post')}</h2>
      <textarea
        ref={postInput}
        id={'post-textarea'}
        className="md:text-base text-sm resize-none rounded-md text-darkP px-4 py-3 h-40 w-full mt-4"
        placeholder={t('start_typing')}
      ></textarea>
      <button
        onClick={() => {
          if (postInput.current.value !== '') {
            addPost(postInput.current.value);
            postInput.current.value = '';
          } else {
            alert('the text is empty');
          }
        }}
        className="bg-darkP flex items-center text-beige rounded-sm md:px-6 px-3 py-1 absolute bottom-0 right-0 mr-4 mb-4 hover:text-orangeP"
      >
        <p className="md:text-base text-sm">{t('Share')}</p>
        <FiSend className="ml-2" />
      </button>
    </div>
  ) : (
    <div>
      <h2 className="md:text-lg text-darkBeige font-semibold mt-6 border-transparent border-b-2 hover:border-orangeP">
        <Link to="/login" className="">
          {t('Sign In To Write A Post')}
        </Link>
      </h2>
    </div>
  );

  async function addPost(body) {
    try {
      await firebase.createPost(body);
    } catch {
      alert('not working');
    }
  }
};

export default WritePostTextarea;

WritePostTextarea.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};
