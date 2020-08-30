import React from 'react';
import { useTranslation } from 'react-i18next';

const AllMessages = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="overflow-y-auto w-11/12 md:w-9/12 bg-white h-full lg:w-1/2 rounded-md text-darkP flex flex-col justify-start items-center p-10 my-10">
        <h2 className="md:text-2xl text-xl font-semibold mb-10">
          {t('Messages')}
        </h2>
        <ul className="w-full flex flex-col justify-center items-center md:text-base text-sm">
          <li className="border-b-2 border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            Leena Elliana
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllMessages;
