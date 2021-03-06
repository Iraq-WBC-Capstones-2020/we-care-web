import React from 'react';
import Navbar from './navbar';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const UserNotFound = ({ user }) => {
  const { t } = useTranslation();
  return (
    <div className="h-screen flex flex-col bg-beige text-darkP">
      <Navbar />
      <main className="flex flex-col justify-center items-center h-full w-full overflow-hidden text-center">
        <h1 className="xl:text-5xl md:text-4xl text-3xl">
          Looks like there&#39;s no available {user}s.
        </h1>
        <h2 className="md:text-3xl text-2xl font-light mt-5">
          {t('Please try again later.')}
        </h2>
      </main>
    </div>
  );
};

export default UserNotFound;

UserNotFound.propTypes = {
  user: PropTypes.string.isRequired,
};
