// component
import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // Rows 컴포넌트가 rendering 될 때 해당 내용이 출력됨
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]); // if [], -> 1번만 실행.
  // fetchUrl을 넣었으므로, 새로고침마다 정보를 업데이트해준다.

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* row__poster */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={`${base_url}${movie.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
