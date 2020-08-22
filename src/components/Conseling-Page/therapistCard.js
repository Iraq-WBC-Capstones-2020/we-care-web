import React from 'react';
import PropTypes from 'prop-types';

const TherapistCard = ({ therapist }) => {
  return (
    <div className="flex flex-col md:h-auto bg-darkP rounded-lg overflow-hidden md:flex-row md:my-24 my-16 md:p-10 p-5 mx-auto md:w-1/2 w-5/6">
      <div className="md:flex items-center sm:w-3/4 md:h-full">
        <div className="w-auto md:mt-0 mt-6 md:h-full flex justify-center items-center">
          <img
            src={therapist.profilePicture}
            className="rounded-lg md:w-56 w-11/12 md:mx-0 mx-auto h-56 object-cover"
            alt="Counsellor"
          />
        </div>
        <div className="flex-col flex-wrap py-6 md:px-0 md:py-0 text-base md:text-sm mb-2 mx-4 md:ml-10 md:h-full">
          <h2 className="text-orangeP text-xl">{therapist.username}</h2>
          <div className="mb-4">
            <h3 className="mb-2 sm:mt-3 md:mt-4 text-orangeP">Bio:</h3>
            <h2>{therapist.therapistBio}</h2>
          </div>
          <h2 className="mt-4">
            <span className="text-orangeP font-extrabold text-base">
              {therapist.cost}.00$
            </span>{' '}
            Hourly
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-between py-6 md:px-0 md:py-0 text-base md:text-sm mb-2 mx-4">
        <div className="mt-1 sm:mt-3 md:mt-4 overflow-hidden">
          <h2 className="text-orangeP text-xl mb-2">Specialties</h2>
          <ul
            className="md:overflow-y-auto md:h-20 overflow-x-hidden mb-8"
            style={{
              listStyleImage: 'url(srccomponentsConseling-PageForward.png)',
            }}
          >
            {therapist.expertise.map((expertise, index) => {
              return (
                <li className="my-1" key={index}>
                  <h2>
                    <span className="text-orangeP mr-2">&gt;</span>
                    {expertise}
                  </h2>
                </li>
              );
            })}
          </ul>
        </div>
        <a href="https://calendly.com/sarasaadiq98/30min">
          <button
            type="submit"
            className="bg-transparent text-orangeP border border-orangeP rounded py-1 w-32"
          >
            Book A Time
          </button>
        </a>
      </div>
    </div>
  );
};

TherapistCard.propTypes = {
  therapist: PropTypes.object.isRequired,
};

export default TherapistCard;
