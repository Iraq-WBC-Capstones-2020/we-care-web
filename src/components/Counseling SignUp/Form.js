import React from 'react';

function Form() {
  return (
    <>
      {/* placeholder-darkBeige if I want to change  */}
      <div className="w-1/3 sm:w-auto md:w-1/3 lg:w-1/3 xl:w-1/3 bg-white rounded md:flex md:justify-center ml-10">
        <form
          className="w-full max-w-sm my-16 text-darkP"
          style={{ fontFamily: 'Roboto' }}
        >
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/5">
              <label className="block md:text-right mb-1 md:mb-0 pr-4">
                Full Name:
              </label>
            </div>
            <div className="md:w-3/4">
              <input
                className="border border-darkP rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
                id="inline-full-name"
                type="text"
                placeholder="Your Name"
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/5">
              <label className="block md:text-right mb-1 md:mb-0 pr-4">
                Profile Picture:
              </label>
            </div>
            <div className="md:w-3/4">
              <div className="md:flex md:items-center mb-6">
                <button className="border border-darkP rounded w-full pl-2 mt-5 leading-tight focus:outline-none focus:bg-white focus:border-darkBeige inline-flex items-center">
                  <span>Attach Here </span>
                  <svg
                    className="mr-0 ml-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="38"
                    viewBox="0 0 44 48"
                    fill="none"
                  >
                    <rect width="44" height="48" rx="3" fill="#383E56" />
                    <g clipPath="url(#clip0)">
                      <path
                        d="M32.8935 15.8292L32.0878 15.0235C30.6125 13.5482 28.2207 13.5482 26.7454 15.0234C26.7454 15.0234 26.7454 15.0234 26.7454 15.0235L16.4492 25.3196C15.406 26.3628 15.406 28.0541 16.4492 29.0973L16.9863 29.6345C18.0489 30.6298 19.7015 30.6298 20.764 29.6345L28.366 22.0324C28.5481 21.8565 28.5531 21.5664 28.3773 21.3843C28.2014 21.2023 27.9113 21.1972 27.7292 21.3731C27.7254 21.3768 27.7216 21.3805 27.7179 21.3843L20.1159 28.9864C19.4177 29.6396 18.3326 29.6396 17.6345 28.9864L17.0973 28.4492C16.4121 27.764 16.412 26.6531 17.0971 25.9679C17.0972 25.9679 17.0973 25.9678 17.0973 25.9677L27.3934 15.6715C28.5264 14.5925 30.3068 14.5925 31.4397 15.6715L32.2454 16.4773C33.3623 17.5948 33.3623 19.406 32.2454 20.5235L20.764 32.005C19.2144 33.554 16.7026 33.554 15.153 32.005L14.0786 30.9315C12.5296 29.3819 12.5296 26.8701 14.0786 25.3205L22.866 16.5332C23.048 16.3574 23.0531 16.0672 22.8772 15.8851C22.7013 15.7031 22.4112 15.698 22.2291 15.8739C22.2253 15.8776 22.2215 15.8813 22.2178 15.8851L13.4305 24.6715C11.5232 26.5789 11.5232 29.6713 13.4305 31.5787C13.4305 31.5787 13.4305 31.5787 13.4305 31.5787L14.5049 32.6531C16.4122 34.5604 19.5047 34.5605 21.412 32.6532C21.412 32.6531 21.4121 32.6531 21.4121 32.6531L32.8935 21.1716C34.3688 19.6964 34.3688 17.3045 32.8935 15.8292C32.8936 15.8292 32.8936 15.8292 32.8935 15.8292Z"
                        fill="#EEDAD1"
                      />
                      <path
                        d="M17.9581 34.084C16.6619 34.0869 15.4184 33.5717 14.504 32.6531L13.4306 31.5796C11.5232 29.6723 11.5231 26.5799 13.4305 24.6725L13.4306 24.6725L22.2179 15.8851C22.3938 15.7031 22.6839 15.698 22.866 15.8739C23.0481 16.0497 23.0531 16.3399 22.8773 16.522C22.8736 16.5258 22.8698 16.5295 22.866 16.5332L14.0787 25.3196C12.5296 26.8692 12.5296 29.381 14.0787 30.9306L15.153 32.005C16.7026 33.554 19.2144 33.554 20.764 32.005L32.2455 20.5235C33.3624 19.406 33.3624 17.5948 32.2455 16.4773L31.4397 15.6716C30.3068 14.5925 28.5264 14.5925 27.3935 15.6716L17.0973 25.9677C16.412 26.6528 16.4119 27.7637 17.0971 28.449C17.0971 28.449 17.0972 28.4491 17.0973 28.4491L17.6344 28.9863C18.3326 29.6396 19.4177 29.6396 20.1159 28.9863L27.7179 21.3843C27.8938 21.2022 28.1839 21.1971 28.366 21.373C28.5481 21.5489 28.5531 21.839 28.3773 22.0211C28.3736 22.0249 28.3698 22.0287 28.366 22.0324L20.764 29.6345C19.7015 30.6298 18.0489 30.6298 16.9864 29.6345L16.4492 29.0973C15.406 28.0541 15.406 26.3628 16.4492 25.3196L26.7454 15.0235C28.2207 13.5482 30.6125 13.5482 32.0878 15.0234C32.0878 15.0234 32.0878 15.0234 32.0878 15.0235L32.8936 15.8292C34.3689 17.3045 34.3689 19.6963 32.8936 21.1716C32.8936 21.1716 32.8936 21.1716 32.8936 21.1717L21.4121 32.6531C20.4977 33.5717 19.2542 34.0869 17.9581 34.084Z"
                        fill="#EEDAD1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(12 13)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <input
                  className="cursor-pointer absolute block opacity-0 pin-r pin-t  placeholder-darkP"
                  type="file"
                  name="vacancyImageFiles"
                  multiple
                ></input>
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/5">
              <label className="block md:text-right mb-1 md:mb-0 pr-4">
                About(Optional):
              </label>
            </div>
            <div className="md:w-3/4">
              <textarea
                className="border border-darkP rounded w-full py-4 px-4 resize-none leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
                name="body"
                placeholder="Type Your Comment"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/5">
              <label className="block md:text-right mb-1 md:mb-0 pr-4">
                Expertise:
              </label>
            </div>
            <div className="md:w-3/4">
              <input
                className="border border-darkP rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
                id="inline-full-name"
                type="text"
                placeholder="Field of Expertise"
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/5">
              <label className="block md:text-right mb-1 md:mb-0 pr-4">
                Certificate:
              </label>
            </div>
            <div className="md:w-3/4">
              <div className="md:flex md:items-center mb-6">
                <button className="border border-darkP rounded w-full pl-2 mt-5 leading-tight focus:outline-none focus:bg-white focus:border-darkBeige inline-flex items-center">
                  <span>Attach Here </span>
                  <svg
                    className="mr-0 ml-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="38"
                    viewBox="0 0 44 48"
                    fill="none"
                  >
                    <rect width="44" height="48" rx="3" fill="#383E56" />
                    <g clipPath="url(#clip0)">
                      <path
                        d="M32.8935 15.8292L32.0878 15.0235C30.6125 13.5482 28.2207 13.5482 26.7454 15.0234C26.7454 15.0234 26.7454 15.0234 26.7454 15.0235L16.4492 25.3196C15.406 26.3628 15.406 28.0541 16.4492 29.0973L16.9863 29.6345C18.0489 30.6298 19.7015 30.6298 20.764 29.6345L28.366 22.0324C28.5481 21.8565 28.5531 21.5664 28.3773 21.3843C28.2014 21.2023 27.9113 21.1972 27.7292 21.3731C27.7254 21.3768 27.7216 21.3805 27.7179 21.3843L20.1159 28.9864C19.4177 29.6396 18.3326 29.6396 17.6345 28.9864L17.0973 28.4492C16.4121 27.764 16.412 26.6531 17.0971 25.9679C17.0972 25.9679 17.0973 25.9678 17.0973 25.9677L27.3934 15.6715C28.5264 14.5925 30.3068 14.5925 31.4397 15.6715L32.2454 16.4773C33.3623 17.5948 33.3623 19.406 32.2454 20.5235L20.764 32.005C19.2144 33.554 16.7026 33.554 15.153 32.005L14.0786 30.9315C12.5296 29.3819 12.5296 26.8701 14.0786 25.3205L22.866 16.5332C23.048 16.3574 23.0531 16.0672 22.8772 15.8851C22.7013 15.7031 22.4112 15.698 22.2291 15.8739C22.2253 15.8776 22.2215 15.8813 22.2178 15.8851L13.4305 24.6715C11.5232 26.5789 11.5232 29.6713 13.4305 31.5787C13.4305 31.5787 13.4305 31.5787 13.4305 31.5787L14.5049 32.6531C16.4122 34.5604 19.5047 34.5605 21.412 32.6532C21.412 32.6531 21.4121 32.6531 21.4121 32.6531L32.8935 21.1716C34.3688 19.6964 34.3688 17.3045 32.8935 15.8292C32.8936 15.8292 32.8936 15.8292 32.8935 15.8292Z"
                        fill="#EEDAD1"
                      />
                      <path
                        d="M17.9581 34.084C16.6619 34.0869 15.4184 33.5717 14.504 32.6531L13.4306 31.5796C11.5232 29.6723 11.5231 26.5799 13.4305 24.6725L13.4306 24.6725L22.2179 15.8851C22.3938 15.7031 22.6839 15.698 22.866 15.8739C23.0481 16.0497 23.0531 16.3399 22.8773 16.522C22.8736 16.5258 22.8698 16.5295 22.866 16.5332L14.0787 25.3196C12.5296 26.8692 12.5296 29.381 14.0787 30.9306L15.153 32.005C16.7026 33.554 19.2144 33.554 20.764 32.005L32.2455 20.5235C33.3624 19.406 33.3624 17.5948 32.2455 16.4773L31.4397 15.6716C30.3068 14.5925 28.5264 14.5925 27.3935 15.6716L17.0973 25.9677C16.412 26.6528 16.4119 27.7637 17.0971 28.449C17.0971 28.449 17.0972 28.4491 17.0973 28.4491L17.6344 28.9863C18.3326 29.6396 19.4177 29.6396 20.1159 28.9863L27.7179 21.3843C27.8938 21.2022 28.1839 21.1971 28.366 21.373C28.5481 21.5489 28.5531 21.839 28.3773 22.0211C28.3736 22.0249 28.3698 22.0287 28.366 22.0324L20.764 29.6345C19.7015 30.6298 18.0489 30.6298 16.9864 29.6345L16.4492 29.0973C15.406 28.0541 15.406 26.3628 16.4492 25.3196L26.7454 15.0235C28.2207 13.5482 30.6125 13.5482 32.0878 15.0234C32.0878 15.0234 32.0878 15.0234 32.0878 15.0235L32.8936 15.8292C34.3689 17.3045 34.3689 19.6963 32.8936 21.1716C32.8936 21.1716 32.8936 21.1716 32.8936 21.1717L21.4121 32.6531C20.4977 33.5717 19.2542 34.0869 17.9581 34.084Z"
                        fill="#EEDAD1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(12 13)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <input
                  className="cursor-pointer absolute block opacity-0 pin-r pin-t"
                  type="file"
                  name="vacancyImageFiles"
                  multiple
                ></input>
              </div>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-2/5 mx-2">
              <button
                className="shadow w-full bg-transparent focus:shadow-outline focus:outline-none text-darkP py-2 px-4 rounded"
                type="button"
              >
                Cancel
              </button>
            </div>
            <div className="md:w-2/5 mx-2">
              <button
                className="shadow bg-darkP w-full focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
