import React from 'react';

export default function ConselingPage() {
  return (
    <div className="flex-wrap sm:inline-flex md:inline-flex lg:inline-flex xl:flex  justify-center  bg-beige ">
      <nav>navBar</nav>
      <ul className="m-40 sm:mt-0">
        <li>
          <div className="lg:flex  grid-cols-3 col-gap-4 m-20 text-red-200 lg:w-62 lg:h-58  spacing-h-40 rounded-lg bg-darkP">
            <span className="lg:mb-6 md:mt-2 ">
              <img
                src="https://source.unsplash.com/random "
                className="inline-block  sm:mt-4 sm:mb-4 sm:ml-5 lg:ml-8 md:ml-12 md:mt-12  md:m-6 lg:flex-1 lg:mt-6  lg:mr-0 rounded-lg sm:w-40 sm:h-40 md:w-3/4 md:h-64 lg:w-64"
              />
            </span>
            <div className="md:flex lg:mt-6 ">
              <span className="md:mt-2">
                <div className="inline-block lg:text-base sm:text-xs sm:ml-6 lg:ml-8 lg:mr-8 font-sans flex-1 md:flex-1  md:text-sm md:ml-12 md:mr-4 sm:w-32 sm:mt-0rounded-lg lg:w-40 h-auto md:w-40 md:h-auto">
                  <h2 className="inline sm:ml-6  md:ml-0 sm:text-base lg:text-lg text-orangeP ">
                    Beth Murphy
                  </h2>
                  <h3 className="mb-2 lg:text-xl sm:mt-3  md:mt-4 sm:text-base text-orangeP sm:font-weight">
                    Bio :
                  </h3>

                  <h2 className="text-beige">
                    Hi I’m Elisabeth Davis. I’m a certified therapist with 3
                    years of experience.
                  </h2>
                  <h2 className="inline-block  sm:mt-2 sm:mb-8 sm:ml-5  sm:text-sm md:ml-0 lg:mb-8">
                    <div className="inline-block lg:text-lg text-orangeP">
                      {'$10.00'}
                    </div>
                    Hourly
                  </h2>
                </div>
              </span>
              <span>
                <div className="inline-block sm:text-xs lg:text-base lg:ml-0 lg:mr-4  md:flex-1 sm:ml-6 font-sans md:ml-0 md:mr-4 lg:flex-1 md:text-sm mt-2 rounded-lg lg:w-40 h-auto">
                  <div className="inline ">
                    <h1 className="mb-3 mr-4 sm:ml-4 sm:text-base lg:text-lg md:ml-2 text-orangeP">
                      Specialties:
                    </h1>
                    <li>
                      <h2 className="mb-2 inline-block">
                        <div className="inline-block text-orangeP mr-2">
                          {'>'}
                        </div>
                        Stress, Anxiety
                      </h2>
                    </li>

                    <li>
                      <h2 className="mb-2 inline-block">
                        <div className="inline-block text-orangeP mr-2">
                          {'>'}
                        </div>
                        Trauma and abuse
                      </h2>
                    </li>
                    <li>
                      <h2 className="mb-2 inline-block">
                        <div className="inline-block text-orangeP mr-2">
                          {'>'}
                        </div>
                        Grief
                      </h2>
                    </li>
                    <li>
                      <h2 className="mb-2 inline-block">
                        <div className="inline-block text-orangeP mr-2">
                          {'>'}
                        </div>
                        Depression
                      </h2>
                    </li>
                    <button className="sm:m-2 lg:mt-4 lg:text-lg sm:mb-4 sm:ml-10 md:m-8 md:mt-2  md:ml-2 bg-transparent  text-orangeP px-1 font-sans py-2 border border-orangeP rounded">
                      Book A Time
                    </button>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
