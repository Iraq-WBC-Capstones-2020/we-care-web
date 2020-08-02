import React from 'react';
import profileImg from '../Images/Profile.png';
import QuoteIcon from '../Images/QuoteIcon.svg';

const Quotes = () => {
  return (
    <>
      <div className="bg-beige flex flex-col">
        <section className="text-darkP body-font">
          <div className="container px-5 pt-2 py-20 mx-auto">
            <div
              className="flex flex-col w-full mb-20"
              style={{ fontFamily: 'Roboto' }}
            >
              <h1 className="sm:text-3xl text-2xl title-font text-darkP font-semibold">
                Today&apos;s Quotes.
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                  <div className="flex items-center mb-3 pb-4 border-b border-darkP">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <img src={profileImg} alt="profile"></img>
                    </div>
                    <h2 className=" text-lg title-font font-medium">
                      Shooting Stars
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <img
                      src={QuoteIcon}
                      alt="quote"
                      className="ml-auto mr-2"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                  <div className="flex items-center mb-3 pb-4 border-b border-darkP">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <img src={profileImg} alt="profile"></img>
                    </div>
                    <h2 className=" text-lg title-font font-medium">
                      The Catalyzer
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <img
                      src={QuoteIcon}
                      alt="quote"
                      className="ml-auto mr-2"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                  <div className="flex items-center mb-3 pb-4 border-b border-darkP">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <img src={profileImg} alt="profile"></img>
                    </div>
                    <h2 className=" text-lg title-font font-medium">Neptune</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <img
                      src={QuoteIcon}
                      alt="quote"
                      className="ml-auto mr-2"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Quotes;
