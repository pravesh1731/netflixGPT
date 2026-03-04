import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const usePopularMovies =() => {
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/popular";

  const getPopularMovies = async () => {
    const response = await fetch(url, API_OPTIONS);
    const json = await response.json();
    
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
}

export default usePopularMovies;