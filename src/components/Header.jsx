import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),);
        navigator("/browse");
      } else {
        dispatch(removeUser());
        navigator("/");
      }
    });
    return () => unsubscribe();
  },[]);

  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-4">
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="w-10 h-10 rounded-full mr-4"
          />
          <button
            className="font-bold text-white cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
