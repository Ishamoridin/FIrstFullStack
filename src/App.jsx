import React from "react";
import { useState } from "react";
import MovieCard from "./components/MovieCard";
const API_URL = "http://www.omdbapi.com/?apikey=46d6b1d2&";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   searchFilms(searchTerm)
  // }, [])
  // const checkResults = (response) => {
  //   switch (response.Response){
  //     case 'True': ;break;
  //     case 'False': ;break;
  //     default: ;break;
  //   }
  // }
  const searchFilms = async (title) => {
    const titleString = "s=" + title
    const request = await fetch(`${API_URL+titleString}`);
    const response = await request.json();
    // console.log(response);
    setMovies(response.Search)
    // checkResults(response)
  }
  return (
    <div
    className="app"
    >
      <h1>My Movie App</h1>
      <br/>
      <br/>
      <div
        className="searchInput"
      >
        <input
          placeholder="Search for a Film"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => searchFilms(searchTerm)}
        >
          Search
        </button>
      </div>

      {movies?.length > 0
        ? (
          <div
          className='container'
          >
            {movies.map((movie, index) => {
              return (
              <MovieCard
                movie={movie}
                key={index}
              />
              )
            })}
          </div>
        ) : (
          <div
          className='empty'
          >
            <h2>No movies found</h2>
          </div>
        )
      
      
      }

    </div>
  )
}