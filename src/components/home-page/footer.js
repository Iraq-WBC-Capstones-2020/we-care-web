import React, { useRef } from 'react';
import Facebook from './image/facebook.png';
import Twitter from './image/twitter.png';
import Instagram from './image/instagram.png';
import Quotes from './image/quotes.svg';
import Logo from './image/Logo.svg';
import { useTranslation } from 'react-i18next';
import firebase from '../../firebase/firebase';

export default function Footer() {
  const { t } = useTranslation();
  const feedbackInput = useRef('');

  async function addFeedback(body) {
    try {
      await firebase.sendFeedback(body);
    } catch {
      alert('not working');
    }
  }

  return (
    <footer className="text-darkP bg-darkBeige">
      <div className="border-b border-darkP py-8">
        <div className="container flex flex-col md:flex-row md:justify-between px-5 mx-auto">
          <div className="flex flex-wrap lg:text-left text-center mx-auto md:mx-0">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center items-center">
              <div className="leading-relaxed w-56 font-medium">
                <p>
                  {t(
                    'What mental health needs are more sunlight, more candor, and more unashamed conversation'
                  )}
                </p>
                <img src={Quotes} className="ml-auto mr-2" alt="Quotes" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 items-center justify-center flex flex-col md:flex-row">
              <div>
                <h2 className="title-font font-medium text-darkP tracking-widest text-sm mb-3">
                  {t('Your Feedback')}
                </h2>
                <textarea
                  ref={feedbackInput}
                  className="w-40 sm:w-auto bg-beige rounded sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-darkP text-sm py-2 px-4 resize-none"
                  placeholder={t('Send Us Your Feedback')}
                  type="text"
                ></textarea>
              </div>
              <div>
                <button
                  onClick={() => {
                    if (feedbackInput.current.value !== '') {
                      addFeedback(feedbackInput.current.value);
                      feedbackInput.current.value = '';
                    } else {
                      alert('the text is empty');
                    }
                  }}
                  className="md:mt-5 flex-shrink-0 text-darkP bg-orangeP py-2 px-6 rounded-lg font-medium"
                >
                  {t('Submit')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-4 items-center">
        <p>© 2020 We Care </p>
        <div>
          <img src={Logo} className="w-16 h-16" alt="logo" />
        </div>
        <div className="flex flex-row justify-around w-24 ">
          <div>
            <img src={Facebook} className="w-6 h-6" alt="Facebook" />
          </div>
          <div>
            <img src={Instagram} className="w-6 h-6" alt="Instagram" />
          </div>
          <div>
            <img src={Twitter} className="w-6 h-6" alt="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
}
