import React from 'react';
import { BsChatSquare } from 'react-icons/bs';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import dashtext from './imgs/dash.svg';
import PropTypes from 'prop-types';

const ProfileSidebar = ({ setSection, section }) => {
  return (
    <div className="w-1/5 h-full lg:w-2/12 bg-darkP flex flex-col justify-start text-beige text-center">
      <div className="w-full mt-3">
        <img className="w-12 ml-8 mt-4" src={dashtext} />
        <ul className="flex flex-col text-sm mt-8">
          <li
            className={`py-4 ${
              section === 'feed' ? 'border-l-4 border-orangeP text-orangeP' : ''
            }`}
          >
            <a
              href={'#'}
              onClick={() => {
                setSection('feed');
              }}
              className="flex justify-start items-center"
            >
              <BsChatSquare className="ml-8 mr-4" />
              <p>Feed</p>
            </a>
          </li>
          <li
            className={`py-4 ${
              section === 'journal'
                ? 'border-l-4 border-orangeP text-orangeP'
                : ''
            }`}
          >
            <a
              href={'#'}
              onClick={() => {
                setSection('journal');
              }}
              className="flex justify-start items-center"
            >
              <BsPencil className="ml-8 mr-4" />
              <p>Journal</p>
            </a>
          </li>
          <li
            className={`py-4 ${
              section === 'messages'
                ? 'border-l-4 border-orangeP text-orangeP'
                : ''
            }`}
          >
            <a
              href={'#'}
              onClick={() => {
                setSection('messages');
              }}
              className="flex justify-start items-center"
            >
              <AiOutlineMail className="ml-8 mr-4" />
              <p>Messages</p>
            </a>
          </li>
          <li
            className={`py-4 ${
              section === 'yourPosts'
                ? 'border-l-4 border-orangeP text-orangeP'
                : ''
            }`}
          >
            <a
              href={'#'}
              onClick={() => {
                setSection('yourPosts');
              }}
              className="flex justify-start items-center"
            >
              <BsChat className="ml-8 mr-4" />
              <p>Your Posts</p>
            </a>
          </li>
          <li
            className={`py-4 ${
              section === 'profile'
                ? 'border-l-4 border-orangeP text-orangeP'
                : ''
            }`}
          >
            <a
              href={'#'}
              onClick={() => {
                setSection('profile');
              }}
              className="flex justify-start items-center"
            >
              <BsPerson className="ml-8 mr-4 text-lg" />
              <p>Profile</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;

ProfileSidebar.propTypes = {
  setSection: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
};
