import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const usePopularMovies =() => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/popular?page=1";

  const getPopularMovies = async () => {
    const response = await fetch(url, API_OPTIONS);
    const json = await response.json();
    
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default usePopularMovies;