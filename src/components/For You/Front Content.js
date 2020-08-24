import React from 'react';
import connection from '../Images/undraw_connection_b38q.svg';
import { useTranslation } from 'react-i18next';
const ForYouContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="text-darkP bg-beige">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap my-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full">
              <h1 className="mb-2 text-3xl md:text-5xl leading-relaxed font-semibold ">
                {t('For You')}
              </h1>
            </div>
            <div className="md:w-2/3 ">
              <h2 className="font-medium text-sm md:text-xl">
                {t(
                  'Your motivational area, articles from the team and the community.'
                )}
              </h2>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full mt-6 sm:mt-0">
            <img
              src={connection}
              alt="connection"
              className=" object-right w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default ForYouContent;
