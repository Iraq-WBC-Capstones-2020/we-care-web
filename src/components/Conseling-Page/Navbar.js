import React from 'react';
import profileImg from '../Images/Profile.png';
import logo from '../Images/Logo.svg';
import { useTranslation } from 'react-i18next';
// import '../../Acomponent';
const ProfileNavbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center py-6 text-darkP text-sm bg-beige">
        <img src={logo} className="w-20" alt="We Care logo" />
        <ul className="flex">
          <li className="mr-10">
            <a href={'#'}>{t('Welcome to react using react-i18next')}</a>
          </li>
          <li className="mr-10">
            <a href={'#'}>For you</a>
          </li>
          <li>
            <a href={'#'}>Counseling</a>
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <img
            src={profileImg}
            className="rounded-full h-10 w-10 object-cover"
            alt="profile"
          ></img>
          <p className="ml-2">Bruce Lee</p>
        </div>
      </nav>
    </>
  );
};
export default ProfileNavbar;
