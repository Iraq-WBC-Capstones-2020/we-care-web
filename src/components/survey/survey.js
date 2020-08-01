import React from 'react';
export default function Survey() {
  return (
    <>
      <nav className="flex justify-around items-center py-6 bg-beige text-darkP text-sm">
        <h1 className="text-lg">
          <a href={'#'} style={{ fontFamily: 'Pacifico' }}>
            We Care
          </a>
        </h1>
        <ul className="flex">
          <li className="mr-10">
            <a href={'#'}>Home</a>
          </li>
          <li className="mr-10">
            <a href={'#'}>For you</a>
          </li>
          <li className="mr-10">
            <a href={'#'}>Counseling</a>
          </li>
        </ul>
      </nav>
      <main class="bg-beige flex row justfy-center h-screen ">
        <div class="bg-darkP   max-w-lg    justfy-center  rounded  overflow-hidden  shadow-lg  m-auto ">
          <div class=" max-w-sm rounded  color-red text-center ">
            <div class="text-orangeP font-sans font-light px-6 py-5  text-center not-italic  text-4xl mb-2 mt-2">
              <p class="font-sans">Before you connect</p>
            </div>
            <div>
              <p class="text-beige text-l font-sans text-center  py-5">
                select the issue you want help with
              </p>
            </div>
            <div class="relative inline-block text-left ">
              <div>
                <span class="rounded-md shadow-sm text-beige float-right">
                  <button
                    type="button"
                    class="bg-darkP text-beige justify-center  rounded-md border-2 border-orangeP px-20 py-4   leading-5 font-medium  text-xs "
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    Options
                    <svg
                      class="justify-center  text-orangeP fill-current float-right -mr-1 ml-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor\"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>

            <div class="flex items-center justify-center w-full mt-10 mb-10">
              <label for="toogleA" class="flex items-center cursor-pointer">
                <div class="mr-3 text-beige font-medium">Member </div>

                <div class="relative">
                  <input id="toogleA" type="checkbox" class="hidden" />

                  <div class="toggle__line w-10  h-5 bg-orangeP rounded-full shadow-inner"></div>

                  <div class="toggle__dot absolute border-2 border-orangeP w-5 h-5 bg-darkP rounded-full shadow inset-y-0 left-0"></div>
                </div>

                <div class="ml-3 text-beige font-medium">Listner</div>
              </label>
            </div>
            <button class="bg-orangeP text-xs  text-darkP   mb-5  py-2 px-4 ">
              Connect
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
