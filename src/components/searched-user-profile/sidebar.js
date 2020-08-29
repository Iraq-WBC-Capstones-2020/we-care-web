import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsChatSquare } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import dashtext from './../profile-page/imgs/dash.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProfileSidebar = () => {
  const searchedUser = useSelector((state) => state.searchedUser);

  const [section, setSection] = useState('about');
  const sectionIndicator =
    'border-b-4 border-l-0 lg:border-l-4 lg:border-b-0 border-orangeP text-orangeP';

  const { t } = useTranslation();

  return (
    <div className="lg:h-full lg:w-1/5 xl:w-2/12 bg-darkP flex flex-col justify-between text-beige text-center">
      <div className="w-full lg:mt-3">
        <img
          className="w-12 ml-8 mt-4 lg:block hidden"
          src={dashtext}
          alt="dashboard"
        />
        <ul className="flex lg:flex-col flex-row lg:justify-start justify-evenly text-sm lg:mt-8">
          <li
            className={`py-4 md:px-0 px-5 ${
              section === 'friends' ? sectionIndicator : ''
            }`}
          >
            <Link
              to={`/users/${searchedUser.username}/friends`}
              className="flex lg:justify-start justify-center items-center"
              onClick={() => {
                setSection('friends');
              }}
            >
              <BsPeopleFill className="lg:ml-8 md:mr-4" />
              <p className="hidden md:block">Friends</p>
            </Link>
          </li>

          <li
            className={`py-4 md:px-0 px-5 ${
              section === 'posts' ? sectionIndicator : ''
            }`}
          >
            <Link
              to={`/users/${searchedUser.username}/posts`}
              className="flex lg:justify-start justify-center items-center"
              onClick={() => {
                setSection('posts');
              }}
            >
              <BsChatSquare className="lg:ml-8 md:mr-4" />
              <p className="hidden md:block">Posts</p>
            </Link>
          </li>

          <li
            className={`py-4 md:px-0 px-5 ${
              section === 'about' || section === '' ? sectionIndicator : ''
            }`}
          >
            <Link
              to={`/users/${searchedUser.username}/about`}
              className="flex lg:justify-start justify-center items-center"
              onClick={() => {
                setSection('about');
              }}
            >
              <BsPerson className="lg:ml-8 md:mr-4 text-lg" />
              <p className="hidden md:block">{t('About')}</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
