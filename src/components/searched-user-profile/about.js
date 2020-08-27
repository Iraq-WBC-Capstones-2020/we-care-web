import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ProfileAbout = () => {
  const { t } = useTranslation();

  const searchedUser = useSelector((state) => state.searchedUser);

  return (
    searchedUser && (
      <div className="bg-white w-11/12 md:w-3/5 lg:w-1/2 xl:w-5/12 rounded-md text-darkP flex flex-col p-8 text-center">
        <div>
          <h1 className="font-semibold text-2xl">{t('about')}</h1>
          <div className="my-4">
            <h2 className="font-bold">{t('Likes')}</h2>
            <p className="md:text-base text-sm">
              {searchedUser.about.likes === ''
                ? '...'
                : searchedUser.about.likes}
            </p>
          </div>
          <div className="my-4">
            <h2 className="font-bold">{t('dislikes')}</h2>
            <p className="md:text-base text-sm">
              {searchedUser.about.dislikes === ''
                ? '...'
                : searchedUser.about.dislikes}
            </p>
          </div>
          <div className="my-4">
            <h2 className="font-bold">
              {t('favoret')} {t('songs')}
            </h2>
            <p className="md:text-base text-sm">
              {searchedUser.about.favouriteSongs === ''
                ? '...'
                : searchedUser.about.favouriteSongs}
            </p>
          </div>
          <div className="my-4">
            <h2 className="font-bold">
              {' '}
              {t('favoret')} {t('books')}
            </h2>
            <p className="md:text-base text-sm">
              {searchedUser.about.favouriteMovies === ''
                ? '...'
                : searchedUser.about.favouriteMovies}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileAbout;
