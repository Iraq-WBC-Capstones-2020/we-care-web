import React from 'react';
import { useTranslation } from 'react-i18next';
// import { FillButton } from 'tailwind-react-ui';
export default function AboutUs() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full bg-beige flex flex-col flex-wrap md:flex-row md:justify-around mx-auto h-full py-12 items-center">
      <div className="w-2/3 lg:1/3 xl:w-1/4 rounded-lg bg-darkP shadow-lg">
        <div className="px-10 py-12 ">
          <p className="text-white">We Care</p>
          <div className="font-bold text-3xl mb-2 text-orangeP">
            {t('about us')}
          </div>
          <p className=" text-base text-white">
            {t('We believe that what we really need sometimes')}
          </p>
        </div>
      </div>
      <div className="w-2/3 lg:1/3 xl:w-1/4 rounded-lg bg-darkP shadow-lg mt-12 xl:mt-56">
        <div className="px-10 py-12">
          <p className="text-white">We Care</p>
          <div className="font-bold text-3xl mb-2 text-orangeP">
            {t('Our Mission')}
          </div>
          <p className="text-base text-white">
            {t('Our aim is to build a supportive community')}
          </p>
        </div>
      </div>
    </div>
  );
}
