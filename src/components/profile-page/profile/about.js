import React from 'react';
import { useTranslation } from 'react-i18next';
const ProfileAbout = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white w-11/12 md:w-3/5 lg:w-1/2 xl:w-5/12 rounded-md text-darkP flex flex-col p-8 text-center">
      <h1 className="font-semibold text-2xl">{t('about')}</h1>
      <div className="my-4">
        <h2 className="font-bold">{t('Likes')}</h2>
        <p className="md:text-base text-sm">{t('Friendliness, Ice Creams')}</p>
      </div>
      <div className="my-4">
        <h2 className="font-bold">{t('dislikes')}</h2>
        <p className="md:text-base text-sm">{t('Horror movies')}</p>
      </div>
      <div className="my-4">
        <h2 className="font-bold">
          {t('favoret')} {t('songs')}
        </h2>
        <p className="md:text-base text-sm">
          {t('Somewhere over the rainbow')}
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-bold">
          {' '}
          {t('favoret')} {t('books')}
        </h2>
        <p className="md:text-base text-sm">{t('You are a badass')}</p>
      </div>
    </div>
  );
};

export default ProfileAbout;
