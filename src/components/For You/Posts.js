import React from 'react';
import profileImg from '../Images/Profile.png';
import Anna from '../Images/anna.webp';
import { useTranslation } from 'react-i18next';
const Posts = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="text-darkP bg-darkP">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex mb-4 items-center justify-evenly">
            <a className="text-orangeP border-b-2 border-orangeP py-2 md:text-lg md:px-16 text-xs">
              {t('By The Team')}
            </a>
            <a className="text-white border-b-2 border-white py-2 md:text-lg  md:px-16 text-xs">
              {t('By The Community')}
            </a>
          </div>
          <div className="flex flex-col flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 items-center">
            <div className="px-4 py-12 w-2/3 md:mb-0 mb-6 flex flex-col text-center items-center bg-white rounded-lg my-16">
              <img
                src={profileImg}
                alt="profile"
                className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0"
              ></img>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium mb-3">
                  {t('Shooting Stars')}
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  {t('we don`t have a cool image anymore.')}
                </p>
              </div>
            </div>
            <div className="px-4 py-12 w-2/3 md:mb-0 mb-6 flex flex-col text-center items-center bg-white rounded-lg my-16">
              <img
                src={profileImg}
                alt="profile"
                className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0"
              ></img>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium mb-3">
                  {t('The Catalyzer')}
                </h2>
                <p className="leading-relaxed text-base mb-4">lol.</p>
              </div>
            </div>
            <div className="px-4 py-12 w-2/3 md:mb-0 mb-6 flex flex-col text-center items-center bg-white rounded-lg my-16">
              <img
                src={Anna}
                alt="Anna"
                className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0"
              ></img>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium mb-3">Anna</h2>
                <p className="leading-relaxed text-base mb-4">
                  {t('DO YOU WANNA BUILD A SNOWMAN?')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Posts;
