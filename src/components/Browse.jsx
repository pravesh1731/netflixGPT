import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // fetch the data from the TMDB api and update the store 
  useNowPlayingMovies();
    
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
