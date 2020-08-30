import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './../../assets/main.css';
import Navbar from './navbar-signUp';
import { Link, useHistory } from 'react-router-dom';
import heart from './imgs/signup.svg';
import './toggleStyle.css';
import firebase from '../../firebase/firebase';
import { Route, Switch } from 'react-router-dom';
import CounslerSignUp from '../Counseling SignUp/counselor-signUp-page';

const SignUp = () => {
  let history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = () => {
    console.log(username);
    if (isTherapist) {
      history.push('/signUp/counsellor-signUp');
      setIsTherapist(false);
    } else {
      onRegister();
    }
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTherapist, setIsTherapist] = useState(false);

  if (firebase.getCurrentUsername()) {
    history.push('/profile');
    return null;
  }
  return (
    <>
      <Switch>
        <Route exact path="/signUp/counsellor-signUp">
          <CounslerSignUp
            username={username}
            email={email}
            password={password}
          />
        </Route>

        <Route exact path="/signUp">
          <section className="body-font bg-darkP h-screen overflow-hidden flex flex-col items-center justify-between">
            <Navbar />
            <div className="container flex flex-col xl:flex-row items-center h-full justify-center w-full">
              <div className="text-beige hidden md:block">
                <h1 className="title-font md:w-2/3 leading-relaxed font-bold text-2xl md:text-4xl mx-auto items-center text-orangeP">
                  Join Our Community
                </h1>
                <p className="md:w-2/3 leading-relaxed text-sm md:text-base text-beige mx-auto pt-1">
                  We care community will always be there for you. Whether you
                  are going through something or you just want to connect with
                  kind human beings.
                </p>
                <img
                  className="w-2/3 sm:w-1/2 my-10 hidden lg:block mx-auto"
                  src={heart}
                  alt="girl with heart"
                ></img>
              </div>
              <div className="bg-orangeP rounded-lg xl:w-2/6 lg:w-1/2 md:w-8/12 w-11/12 flex justify-center py-10 xl:my-0 my-5 px-10 mx-auto">
                <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col justify-evenly items-center">
                  <h2 className="text-darkP text-center text-4xl font-sans font-bold title-font mb-5">
                    Sign Up
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      minLength="4"
                      name="username"
                      className="bg-white w-full text-darkP placeholder-darkP rounded border border-white focus:outline-none focus:border-darkP text-base px-4 py-2 "
                      placeholder="Username"
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      ref={register({
                        reequired: 'Rquired',
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: 'Invalid User Name',
                        },
                      })}
                    />
                    <p className="error-color text-xs">
                      {errors.username && errors.username.message}
                    </p>

                    <input
                      required
                      name="email"
                      ref={register({
                        required: 'Required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'invalid email address',
                        },
                      })}
                      className="bg-white w-full text-darkP placeholder-darkP rounded border border-white focus:outline-none focus:border-darkP text-base px-4 py-2 mt-4"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="error-color">
                      {errors.email && errors.email.message}
                    </p>
                    <input
                      className="bg-white w-full text-darkP placeholder-darkP rounded border border-white focus:outline-none focus:border-darkP text-base px-4 py-2  mt-4"
                      placeholder="Password"
                      type="password"
                      minLength="6"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex items-center justify-center w-full mb-8 mt-8 text-sm">
                      <label
                        htmlFor="toogleA"
                        className="flex items-center cursor-pointer"
                      >
                        <div className="mr-3 text-darkP font-medium">
                          Member
                        </div>
                        <div className="relative">
                          <input
                            onChange={() => {
                              isTherapist
                                ? setIsTherapist(false)
                                : setIsTherapist(true);
                            }}
                            id="toogleA"
                            type="checkbox"
                            className="hidden"
                          />
                          <div className="toggle__line w-8 h-3 bg-white rounded-full shadow-inner"></div>
                          <div className="toggle__dot absolute w-5 h-5 bg-darkP rounded-full shadow "></div>
                        </div>
                        <div className="ml-3 text-darkP font-medium">
                          Therapist
                        </div>
                      </label>
                    </div>
                    <button className="w-full text-darkP bg-white font-bold border-0 py-2 px-8 focus:outline-none  rounded text-lg">
                      Sign Up
                    </button>
                  </form>
                  <p className="text-xs text-white mt-3">
                    Already have an acount?
                    <Link
                      to="/login"
                      className="text-base ml-2 text-darkP font-bold"
                    >
                      Sign In.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Route>
      </Switch>
    </>
  );

  async function onRegister() {
    try {
      await firebase.register(username, email, password);
      await firebase.addUser(username, isTherapist, email);
      history.push('/profile');
    } catch (error) {
      alert(error.message);
    }
  }
};
export default SignUp;
