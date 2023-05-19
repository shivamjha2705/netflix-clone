import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css"
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl , isLargeRow ,isRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl , setTrailerUrl] = useState("");

  useEffect(() => {
    // if [] run once , when the row loads and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  const handleClick = (mov) =>{
    if(trailerUrl){
      setTrailerUrl("");
    }
    else{
      movieTrailer(mov?.name || "" )
      .then((url) =>{
        const urlParams =  new URLSearchParams( new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      }).catch((error)=>console.log(error));
    }
  }

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`${isLargeRow?'active' : 'disable'}`}>
      <Swiper spaceBetween={10} slidesPerView={3} loop >
        {movies.map((mov) => (
          <SwiperSlide>
          <img
          key={mov.id}
          onClick={() => handleClick(mov)}
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            // className={`row_poster` ${isLargeRow && "row_poster_large"}}
            src={`${base_url}${isLargeRow? mov.poster_path :""}`}
            alt={mov.name}
          />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
      <div className={`${isRow?'row_posters' :'disable'}`}>
        {movies.map((mov) => (
          <img
          key={mov.id}
          onClick={() => handleClick(mov)}
          className={`row_poster ${isRow}`}
            src={`${base_url}${mov.backdrop_path}`}
            alt={mov.name}
          />
          
        ))}
        
      </div>
      {trailerUrl && <Youtube videoId = {trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
