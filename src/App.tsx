import styled from "styled-components";
import "./App.css";
import LogoImg from "./assets/OMDb-logo.svg";
import BackgroundImg from "./assets/hero_bg.jpg";
import Searchbar from "./components/Searchbar";
import MovieCard from "./components/MovieCard";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

const Background = styled.div`
  position: relative;
  height: 450px;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
  height: auto;
`;

const GetStarted = styled.p`
  color: #97a3b6;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 20%;
`;

function App() {
  const [searchbarValue, setSearchbarValue] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [movieDesc, setMovieDesc] = useState("");
  const [movieDirector, setMovieDirector] = useState("");
  const [movieWriters, setMovieWriters] = useState("");
  const [movieStars, setMovieStars] = useState("");
  const [rating, setMovieRating] = useState("");

  const handleSearchbarChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchbarValue(e.target.value);
  };

  useEffect(() => {
    if (searchbarValue) {
      axios
        .get(
          `http://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_OMDB_API_KEY
          }&t=${searchbarValue.replace(" ", "+")}`
        )
        .then((response) => {
          console.log(response.data);
          const data = response.data;
          setMovieTitle(data?.Title);
          setMovieDesc(data?.Plot);
          setMovieImg(data?.Poster);
          setMovieDirector(data?.Director);
          setMovieWriters(data?.Writer);
          setMovieStars(data?.Actors);
          setMovieRating(data?.imdbRating);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, [searchbarValue]);

  return (
    <>
      <Background>
        <Logo src={LogoImg}></Logo>
        <Searchbar
          value={searchbarValue}
          handleChange={handleSearchbarChange}
        ></Searchbar>
      </Background>
      {searchbarValue.length == 0 ? (
        <GetStarted>Please enter the name of a movie to get started</GetStarted>
      ) : (
        <MovieCard
          movieImg={movieImg}
          movieTitle={movieTitle}
          movieDesc={movieDesc}
          movieDirector={movieDirector}
          movieWriters={movieWriters}
          movieStars={movieStars}
          rating={rating}
        ></MovieCard>
      )}
    </>
  );
}

export default App;
