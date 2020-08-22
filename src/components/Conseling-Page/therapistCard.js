import React from 'react';

const TherapistCard = ({ therapist }) => {
  return (
    <div className="flex flex-col md:h-auto bg-darkP rounded-lg overflow-hidden md:flex-row my-24 p-10 w-2/3 sm:w-10/12 lg:w-2/3 mx-auto">
      <div className="md:flex items-center sm:w-3/4">
        <div className="w-auto mt-6">
          <img
            src={therapist.profilePicture}
            className="rounded-lg h-40 w-56"
            alt="Counsellor"
          />
        </div>
        <div className="flex-col flex-wrap py-6 sm:px-1 md:px-0 md:py-0 text-base md:text-sm mb-2 mx-4">
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
      <div className="flex flex-col justify-between py-6 sm:px-1 md:px-0 md:py-0 text-base md:text-sm mb-2 mx-4">
        <div className="mt-1 sm:mt-3 md:mt-4">
          <h2 className="text-orangeP text-xl mb-2">Specialties</h2>
          <ul
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

export default TherapistCard;
