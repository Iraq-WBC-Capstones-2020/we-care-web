import React from 'react';

const TherapistCard = () => {
  return (
    <div className="flex flex-col md:h-auto bg-darkP rounded-lg overflow-hidden md:flex-row my-24 p-10 w-2/3 sm:w-10/12 lg:w-2/3 mx-auto">
      <div className="md:flex items-center sm:w-3/4">
        <div className="w-auto mt-6">
          <img
            src="https://source.unsplash.com/random "
            className="rounded-lg h-40 w-56"
            alt="Counsellor"
          />
        </div>
        <div className="flex-col flex-wrap py-6 sm:px-1 md:px-0 md:py-0 text-base md:text-sm mb-2 mx-4">
          <h2 className="text-orangeP text-xl">Name</h2>
          <div className="mb-4">
            <h3 className="mb-2 sm:mt-3 md:mt-4 text-orangeP">Bio:</h3>
            <h2>
              Hi I’m Elisabeth Davis. I’m a certified therapist with 3 years of
              experience.
            </h2>
          </div>
          <h2 className="mt-4">
            <span className="text-orangeP font-extrabold text-base">
              10.00$
            </span>{' '}
            Hourly
          </h2>
        </div>
      </div>
      <div className="flex-col flex-wrap py-6 sm:px-1 md:px-0 md:py-0 text-base md:text-sm mb-2 mx-4">
        <h2 className="text-orangeP text-xl">Specialties</h2>
        <div className="mt-1 sm:mt-3 md:mt-4">
          <ul
            className="mb-4"
            style={{
              listStyleImage: 'url(srccomponentsConseling-PageForward.png)',
            }}
          >
            <li>
              <h2>
                <span className="text-orangeP mr-2">&gt;</span>Stress, Anxiety
              </h2>
            </li>
            <li>
              <h2>
                <span className="text-orangeP mr-2">&gt;</span>Trauma and abuse
              </h2>
            </li>
            <li>
              <h2>
                <span className="text-orangeP mr-2">&gt;</span> Grief
              </h2>
            </li>
            <li>
              <h2>
                <span className="text-orangeP mr-2">&gt;</span>Depression
              </h2>
            </li>
          </ul>
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
    </div>
  );
};

export default TherapistCard;
