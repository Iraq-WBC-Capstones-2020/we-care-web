import React from 'react';
import PropTypes from 'prop-types';

const TherapistCard = ({ therapist }) => {
  return (
    <div className="flex flex-col md:h-auto bg-darkP rounded-lg overflow-hidden md:flex-row md:my-24 my-16 md:p-10 p-5 mx-auto xl:w-1/2 lg:w-8/12 w-5/6">
      <div className="w-auto md:mt-0 mt-6 xl:w-5/12 md:w-6/12 flex justify-center items-center">
        <img
          src={therapist.profilePicture}
          className="rounded-lg md:w-56 w-11/12 md:mx-0 mx-auto md:h-48 object-cover"
          alt="Counsellor"
        />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center w-full xl:px-10 lg:pl-10 md:pl-8">
        <div className="flex flex-col items-start py-6 text-base md:h-full md:w-auto w-11/12 md:justify-between md:py-2 md:pr-6">
          <h2 className="text-beige text-xl md:m-0 mb-8">
            {therapist.username}
          </h2>
          <div className="md:m-0 mb-8">
            <h3 className="text-orangeP text-lg mb-1">Bio:</h3>
            <h2 className="md:text-sm">{therapist.therapistBio}</h2>
          </div>
          <h2 className="md:text-sm">
            <span className="text-orangeP font-extrabold text-base">
              {therapist.cost}.00$
            </span>
            &nbsp; Hourly
          </h2>
        </div>
        <div className="flex flex-col items-start py-6 text-base md:h-full md:w-auto w-11/12 md:justify-between md:py-2">
          <div className="overflow-hidden md:m-0 mb-8">
            <h2 className="text-orangeP text-lg mb-1">Specialties:</h2>
            <ul
              className="md:overflow-y-auto md:h-24 overflow-x-hidden md:text-sm"
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
          <a href={therapist.calendlyLink}>
            <button
              type="submit"
              className="bg-transparent text-orangeP border border-orangeP rounded py-1 w-32"
            >
              Book A Time
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

TherapistCard.propTypes = {
  therapist: PropTypes.object.isRequired,
};

export default TherapistCard;
