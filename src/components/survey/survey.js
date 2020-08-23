import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../regiterUser/toggleStyle.css';
import Navbar from './Navbar';
export default function Survey() {
  let history = useHistory();

  const [isListener, setIsListener] = useState(false);

  return (
    <>
      <section className="bg-beige w-screen h-screen overflow-hidden flex flex-col items-center justify-between">
        <Navbar />
        <div className="w-screen flex items-center h-full justify-center text-center">
          <div className="bg-darkP rounded-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-1/3 p-2 sm:p-6 self-center">
            <div className="text-orangeP font-sans font-light leading-relaxed ">
              <p className="text-3xl md:text-4xl mt-2">Before You Connect</p>
              <p className="text-beige text-lg mt-4 px-10 md:px-16">
                Select the issue that concerns you the most?
              </p>
            </div>
            <div className="text-left relative inline-block mt-6">
              <select
                type="select"
                className="bg-darkP text-beige rounded-md border-2 border-darkBeige px-4 py-2 leading-5 font-medium text-base  w-full"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <option value="Depression">Depression</option>
                <option value="Anxiety">Anxiety</option>
                <option value="Eating-Disorders">Eating Disorders</option>
                <option value="OCD">OCD</option>
                <option value="PTSD">PTSD</option>
                <option value="Bipolar-disorder">Bipolar disorder</option>
                <option value="Personality-disorders">
                  Personality disorders
                </option>
                <option value="Schizophrenia-and-other-psychoses">
                  Schizophrenia
                </option>
              </select>
            </div>
            <div className="flex items-center justify-center w-full mt-10 mb-10 text-lg">
              <label
                htmlFor="toogleA"
                className="flex items-center cursor-pointer"
              >
                <div className="mr-3 text-beige">Member </div>
                <div className="relative">
                  <input
                    onChange={() => {
                      isListener ? setIsListener(false) : setIsListener(true);
                    }}
                    id="toogleA"
                    type="checkbox"
                    className="hidden"
                  />
                  <div className="toggle__line w-8 h-3 bg-white rounded-full shadow-inner"></div>
                  <div className="toggle__dot absolute w-5 h-5 bg-orangeP rounded-full shadow "></div>
                </div>
                <div className="ml-3 text-beige">Listener</div>
              </label>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                history.push('/chatroom');
                setIsListener(false);
              }}
              className="bg-orangeP text-lg text-darkP rounded mb-5 py-2 px-4 "
            >
              Connect Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
