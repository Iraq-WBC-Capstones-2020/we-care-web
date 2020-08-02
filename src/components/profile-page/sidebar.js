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
  const sectionIndicator =
    'border-b-4 border-l-0 lg:border-l-4 lg:border-b-0 border-orangeP text-orangeP';
  return (
    <div className="lg:h-full lg:w-1/5 xl:w-2/12 bg-darkP flex flex-col justify-start text-beige text-center">
      <div className="w-full lg:mt-3">
        <img className="w-12 ml-8 mt-4 lg:block hidden" src={dashtext} />
        <ul className="flex lg:flex-col flex-row lg:justify-start justify-evenly text-sm lg:mt-8">
          <li
            className={`py-4 md:px-0 px-5 ${
              section === 'feed' ? sectionIndicator : ''
            }`}
          >
            <Link
              to="/feed"
              className="flex lg:justify-start justify-center items-center"
              onClick={() => {
                setSection('feed');
              }}
            >
              <BsChatSquare className="lg:ml-8 md:mr-4" />
              <p className="hidden md:block">Feed</p>
            </Link>
          </li>
          <li
            className={`py-4 md:px-0 px-5 ${
              section === 'journal' ? sectionIndicator : ''
            }`}
          >
            <Link
              to="/journal"
              className="flex lg:justify-start justify-center items-center"
              onClick={() => {
                setSection('journal');
              }}
            >
              <BsPencil className="lg:ml-8 md:mr-4" />
              <p className="hidden md:block">Journals</p>
            </Link>
          </li>
          <li
            className={`py-4 md:px-0 px-5 ${
              section === 'messages' ? sectionIndicator : ''
            }`}
          >
            <Link
              to="/messages"
              className="flex lg:justify-start justify-center items-center"
              onClick={() => {
                setSection('messages');
              }}
            >
              <AiOutlineMail className="lg:ml-8 md:mr-4" />
              <p className="hidden md:block">Messages</p>
            </Link>
          </li>
          <li
            className={`py-4 md:px-0 px-5 ${
              section === 'your-posts' ? sectionIndicator : ''
            }`}
          >
            <Link
              to="/your-posts"
              className="flex lg:justify-start justify-center items-center"
              onClick={() => {
                setSection('your-posts');
              }}
            >
              <BsChat className="lg:ml-8 md:mr-4" />
              <p className="hidden md:block">Your Posts</p>
            </Link>
          </li>
          <li
            className={`py-4 md:px-0 px-5 ${
              section === 'profile' || section === '' ? sectionIndicator : ''
            }`}
          >
            <Link
              to="/profile"
              className="flex lg:justify-start justify-center items-center"
              onClick={() => {
                setSection('profile');
              }}
            >
              <BsPerson className="lg:ml-8 md:mr-4 text-lg" />
              <p className="hidden md:block">Profile</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
