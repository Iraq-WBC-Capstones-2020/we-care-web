import React from "react";

export default function ConselingPage() {
  return (
    <body class="flex-wrap sm:inline-flex md:inline-flex lg:inline-flex xl:flex  justify-center  bg-beige ">
      <nav>navBar</nav>
      <ul class="m-40 sm:mt-4">
        <li>
          <div class="lg:flex  inline-grid grid-cols-3 sm:mt-0 col-gap-4 m-20 text-red-200 lg:w-62 lg:h-62  spacing-h-40 rounded-lg bg-darkP">
            <div class="md:flex">
              <span class="lg:mb-6  md:mt-2 ">
                <img
                  src="https://source.unsplash.com/random "
                  class="inline-block sm:h-48 md:flex-1   lg:ml-12  md:m-6 lg:flex-1 lg:mt-6 sm:ml-0 sm:mb-0 mb-16 lg:mr-0 rounded-lg sm:w-full md:w-48 md:h-48"
                />
              </span>

              <span class="md:mt-2">
                <div class="inline-block sm:text-xs flex-1 md:flex-1 lg:mr-12 md:text-sm md:ml-18 md:mr-4 lg:text-sm mt-2 mr-10 ml-10  rounded-lg lg:w-40 h-auto md:w-40 md:h-auto">
                  <h2 class="inline sm:ml-6  md:ml-0  ">Beth Murphy </h2>
                  <h3 class="mb-2 sm:mt-3 md:mt-4">Bio:</h3>

                  <h2>
                    Hi I’m Elisabeth Davis. I’m a certified therapist with 3
                    years of experience.
                  </h2>
                  <div class="">
                    <h2 class="sm:mt-4 sm:mb-8 sm:ml-5 md:ml-0 lg:mb-8">
                      $10.00 Hourly
                    </h2>
                  </div>
                </div>
              </span>
            </div>
            <span>
              <div class="inline-block sm:text-xs sm:ml-12 lg:mr-0 lg:ml-5 md:ml-10 lg:flex-1 md:text-sm mt-2 rounded-lg lg:w-40 h-auto">
                <div class="inline ">
                  <h1 class="mb-3 ">Specialties:</h1>
                </div>
                <li class="list-disc">
                  <h2 class="mb-2">Stress, Anxiety</h2>
                </li>

                <li class="list-disc">
                  <h2>Trauma and abuse</h2>
                </li>
                <li class="list-disc">
                  <h2>Grief</h2>
                </li>
                <li class="list-disc">
                  <h2>Depression</h2>
                </li>

                <button class="sm:m-2  sm:mt-4 sm:ml-2 md:m-8  md:ml-2 lg:mt-10 bg-transparent hover:bg-red-200 text-red-200 px-1 font-semibold hover:text-white py-2 border border-red-500 hover:border-transparent rounded">
                  Book A Time
                </button>
              </div>
            </span>
          </div>
        </li>
        <li>
          <div class="lg:flex  inline-grid grid-cols-3 sm:mt-0 col-gap-4 m-20 text-red-200 lg:w-62 lg:h-62  spacing-h-40 rounded-lg bg-blue-900">
            <div class="md:flex">
              <span class="lg:mb-6  md:mt-2 ">
                <img
                  src="https://source.unsplash.com/random "
                  class="inline-block sm:h-48 sm:w-full md:flex-1 lg:ml-12  md:m-6 lg:flex-1 lg:mt-6 sm:ml-0 sm:mb-0 mb-16 lg:mr-0 rounded-lg sm:w-full md:w-48 md:h-48"
                />
              </span>

              <span class="md:mt-2">
                <div class="inline-block sm:text-xs flex-1 md:flex-1 lg:mr-12 md:text-sm md:ml-18 md:mr-4 lg:text-sm mt-2 mr-10 ml-10  rounded-lg lg:w-40 h-auto md:w-40 md:h-auto">
                  <h2 class="inline sm:ml-6  md:ml-0  ">Beth Murphy </h2>
                  <h3 class="mb-2 sm:mt-3 md:mt-4">Bio:</h3>

                  <h2>
                    Hi I’m Elisabeth Davis. I’m a certified therapist with 3
                    years of experience.
                  </h2>
                  <div class="">
                    <h2 class="sm:mt-4 sm:mb-8 sm:ml-5 md:ml-0 lg:mb-8">
                      $10.00 Hourly
                    </h2>
                  </div>
                </div>
              </span>
            </div>
            <span>
              <div class="inline-block sm:text-xs sm:ml-12 lg:mr-0 lg:ml-5 md:ml-10 lg:flex-1 md:text-sm mt-2 rounded-lg lg:w-40 h-auto">
                <div class="inline ">
                  <h1 class="mb-3 ">Specialties:</h1>
                </div>
                <li class="list-disc">
                  <h2 class="mb-2">Stress, Anxiety</h2>
                </li>

                <li class="list-disc">
                  <h2>Trauma and abuse</h2>
                </li>
                <li class="list-disc">
                  <h2>Grief</h2>
                </li>
                <li class="list-disc">
                  <h2>Depression</h2>
                </li>

                <button class="sm:m-2  sm:mt-4 sm:ml-2 md:m-8  md:ml-2 lg:mt-10 bg-transparent hover:bg-red-200 text-red-200 px-1 font-semibold hover:text-white py-2 border border-red-500 hover:border-transparent rounded">
                  Book A Time
                </button>
              </div>
            </span>
          </div>
        </li>
      </ul>
    </body>
  );
}
