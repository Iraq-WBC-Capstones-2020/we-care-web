import React, { useState, useEffect } from 'react';
import QuoteIcon from '../Images/QuoteIcon.svg';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuotes(data);
      });
  }, []);
  function runOncePerDay() {
    if (localStorage.getItem('randomNumber') === null) {
      localStorage.setItem('appDate', new Date().toLocaleDateString());
      localStorage.setItem(
        'randomNumber',
        Math.floor(Math.random() * (1634 - 0 + 1) + 0)
      );
    }
    if (!isitStillToday()) return false;
    localStorage.setItem(
      'randomNumber',
      Math.floor(Math.random() * (1634 - 0 + 1) + 0)
    );
  }
  runOncePerDay();
  function isitStillToday() {
    let date = new Date().toLocaleDateString();
    if (localStorage.getItem('appDate') === date) return false;
    else {
      localStorage.setItem(
        'randomNumber',
        Math.floor(Math.random() * (1634 - 0 + 1) + 0)
      );
      localStorage.setItem('appDate', date);
      return true;
    }
  }
  let num = parseInt(localStorage.getItem('randomNumber'));
  return (
    <>
      <div className="bg-beige flex flex-col">
        <section className="text-darkP">
          <div className="container px-5 pt-2 py-32 mx-auto">
            <div
              className="flex flex-col w-full mb-20"
              style={{ fontFamily: 'Roboto' }}
            >
              <h1 className="sm:text-3xl text-2xl title-font text-darkP font-semibold">
                Today&apos;s Quotes.
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              {quotes.slice(num, num + 3).map((quote, index) => {
                // eslint-disable-next-line react/jsx-key
                return (
                  <>
                    <div className="p-4 md:w-1/3" key={index}>
                      <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                        <div className="flex items-center mb-3 pb-4 border-b border-darkP">
                          <h2 className=" text-lg title-font font-medium">
                            {quote.author === null ? 'Unknown' : quote.author}
                          </h2>
                        </div>
                        <div className="flex-grow">
                          <p className="leading-relaxed text-base">
                            {quote.text === null ? 'Unknown' : quote.text}
                          </p>
                          <img
                            src={QuoteIcon}
                            alt="quote"
                            className="ml-auto mr-2"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Quotes;
