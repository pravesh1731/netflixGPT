import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?`;

    const getMovieVideo = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    const filterDate = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterDate.length ? filterDate[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));

  };

  useEffect(() => {
    getMovieVideo();
  }, []);
}

export default useMovieTrailer;