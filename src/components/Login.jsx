import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
   setErrorMessage(message ? message.message : null);

   // SignIn / SignUp

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg"
          alt="banner"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black/80 w-3/12 my-36 mx-auto right-0 left-0 p-12">
        <h2 className="text-white text-2xl p-2 mt-4">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h2>
        {!isSignInForm && (
          <input
           ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-2 m-2 w-full bg-gray-800 text-white rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-800 text-white rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800 text-white rounded-lg"
        />
        <p className="text-red-500">{errorMessage}</p>

        <button className=" p-2 m-2 bg-red-500 text-white w-full rounded-lg " onClick={handleButtonClick}>
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-white p-3 mt-10">
          New to Netflix?{" "}
          <span 
            className="text-red-500 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {!isSignInForm ? "Sign In Here" : "Sign Up Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
