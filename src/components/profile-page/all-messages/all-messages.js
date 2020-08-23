import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AllMessages = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="overflow-y-auto w-11/12 md:w-9/12 bg-white h-full lg:w-1/2 rounded-md text-darkP flex flex-col justify-start items-center p-10 my-10">
        <h2 className="md:text-2xl text-xl font-semibold mb-10">{t('Messages')}</h2>
        <ul className="w-full flex flex-col justify-center items-center md:text-base text-sm">
          <li className="border-b-2 border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            Leena Elliana
          </li>
          <li className="border-b-2 border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            Odin Valdemar
          </li>
          <li className="border-b-2 border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            <Link
              to="/profile/messages/HarryDavies"
              className="flex w-full justify-center items-center"
            >
              Harry Davies
              <span className="w-6 h-6 bg-darkP text-white rounded-full flex justify-center items-center ml-3">
                3
              </span>
            </Link>
          </li>
          <li className="border-b-2 border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            Davis Eugene
          </li>
          <li className="border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            Rositsa Boyana
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllMessages;
