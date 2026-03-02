import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies =() => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";

  const getNowPlayingMovies = async () => {
    const response = await fetch(url, API_OPTIONS);
    const json = await response.json();
    
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;