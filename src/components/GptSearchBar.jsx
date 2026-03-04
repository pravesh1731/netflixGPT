import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constant";
import { appGptMoviesReslts } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDV = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log("GPT Search Clicked with query:", searchText.current.value);
    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me the name of 5 movies, comma separated like the example result given Ahead. Example result: Gadar, Don, Sholay, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      model: "stepfun/step-3.5-flash:free",
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
    });
    console.log(gptResults.choices[0].message.content);
    const recommendedMovies = gptResults.choices[0].message.content.split(",");

     const promisDataArray = recommendedMovies.map((movie) => 
      searchMovieTMDV(movie)
    );

    const movieData = await Promise.all(promisDataArray);
    console.log(movieData);
    dispatch(appGptMoviesReslts({movieNames: recommendedMovies, moveData:movieData}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        className=" w-1/2 bg-black-50 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-3 m-4 bg-white rounded-lg col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 py-2 px-4 m-4 bg-red-500 rounded-lg text-white"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
