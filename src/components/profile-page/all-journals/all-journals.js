import React from 'react';
import { Link } from 'react-router-dom';

const AllJournals = () => {
  return (
    <div className="w-full overflow-y-auto h-full flex flex-col justify-center items-center">
      <div className="overflow-y-auto w-11/12 md:w-9/12 bg-white h-full lg:w-1/2 rounded-md text-darkP flex flex-col justify-start items-center p-10 my-10">
        <div className="flex flex-col w-full justify-evenly items-center">
          <h2 className="text-3xl">Journals</h2>
          <button className="text-beige border text-center border-darkP my-8 bg-darkP h-8 border-solid rounded w-32 text-sm">
            Add Journal
          </button>
        </div>
        <ul className="w-full flex flex-col justify-center items-center md:text-base text-sm">
          <li className="border-b-2 border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            The day she said...
          </li>
          <li className="border-b-2 border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            I am happy
          </li>
          <li className="border-b-2 border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            <Link
              to="/profile/journals/1"
              className="flex w-full justify-center items-center"
            >
              why does this happen to me every time?
            </Link>
          </li>
          <li className="border-b-2 border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            well, I didn&apos;t need it anyways
          </li>
          <li className="border-grey py-2 w-full flex justify-center items-center hover:text-orangeP hover:border-orangeP">
            I mean... was that a coincidence!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllJournals;
