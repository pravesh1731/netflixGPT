import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { moviesResults, moveNames } = useSelector((store) => store.gpt);
  if(!moviesResults) return null;

  return (
   
    <div>
      <div className="p-4 m-4 bg-black text-white bg-opacity-90 rounded-lg">
        {moveNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={moviesResults[index]}
          />
        ))}
      </div>
    </div>
  
);
};

export default GptMovieSuggestions;
