import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import './Banner.css'
function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchdata();
  }, []);
  // console.log(movie);

  function truncate(str , n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage:`url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center" ,}}>
             
             {/* ? is for handling error or currupt file if there is no movie data found     */}
      
      <div className="banner_contents">
        {/* bg img */}
      {/* title */}

      <h1 className="banner_title">
      {/* shorthand for long if else condition */}
        {movie?.title || movie?.name || movie?.original_name} 
      </h1>
      
      {/* div > 2 buutons */}
      <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>

      {/* desc */}
      <h1 className="banner_description">
        {truncate( movie?.overview , 150)}
      </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
