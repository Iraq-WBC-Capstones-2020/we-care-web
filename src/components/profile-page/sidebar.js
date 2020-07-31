import React, { useState } from 'react';
import { BsChatSquare } from 'react-icons/bs';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import dashtext from './imgs/dash.svg';
import { Link, useLocation } from 'react-router-dom';

const ProfileSidebar = () => {
  let location = useLocation();
  const [section, setSection] = useState(`${location.pathname.slice(1)}`);
  return (
    <div className="sm:w-1/3 h-full lg:w-2/12 bg-darkP flex flex-col justify-start text-beige text-center">
      <div className="w-full mt-3">
        <img className="w-12 ml-8 mt-4" src={dashtext} />
        <ul className="flex flex-col text-sm mt-8">
          <li
            className={`py-4 ${
              section === 'feed' ? 'border-l-4 border-orangeP text-orangeP' : ''
            }`}
          >
            <Link
              to="/feed"
              className="flex justify-start items-center"
              onClick={() => {
                setSection('feed');
              }}
            >
              <BsChatSquare className="ml-8 mr-4" />
              Feed
            </Link>
          </li>
          <li
            className={`py-4 ${
              section === 'journal'
                ? 'border-l-4 border-orangeP text-orangeP'
                : ''
            }`}
          >
            <Link
              to="/journal"
              className="flex justify-start items-center"
              onClick={() => {
                setSection('journal');
              }}
            >
              <BsPencil className="ml-8 mr-4" />
              Journal
            </Link>
          </li>
          <li
            className={`py-4 ${
              section === 'messages'
                ? 'border-l-4 border-orangeP text-orangeP'
                : ''
            }`}
          >
            <Link
              to="/messages"
              className="flex justify-start items-center"
              onClick={() => {
                setSection('messages');
              }}
            >
              <AiOutlineMail className="ml-8 mr-4" />
              Messages
            </Link>
          </li>
          <li
            className={`py-4 ${
              section === 'your-posts'
                ? 'border-l-4 border-orangeP text-orangeP'
                : ''
            }`}
          >
            <Link
              to="/your-posts"
              className="flex justify-start items-center"
              onClick={() => {
                setSection('your-posts');
              }}
            >
              <BsChat className="ml-8 mr-4" />
              Your Posts
            </Link>
          </li>
          <li
            className={`py-4 ${
              section === 'profile' || section === ''
                ? 'border-l-4 border-orangeP text-orangeP'
                : ''
            }`}
          >
            <Link
              to="/profile"
              className="flex justify-start items-center"
              onClick={() => {
                setSection('profile');
              }}
            >
              <BsPerson className="ml-8 mr-4 text-lg" />
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
