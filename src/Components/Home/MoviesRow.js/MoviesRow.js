import React from "react";
import "./MoviesRow.css";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Link } from "react-router-dom";
const base_url = "https://image.tmdb.org/t/p/original";

function MoviesRow({ img, id, title, type, release_date, rate }) {
  const year = new Date(release_date);


  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };

  return (
    <>
      <div className="moviesRow" key={id}>
        <Link to={`/${type}/${id}`}>
          <img src={`${base_url}${img}`} />
        </Link>

        <div className="movie__info">
          <div className="movie__name">
            <h3>{truncate(title, 18)}</h3>
          </div>
          <div className="movie__other">
            <p>
              {year?.getFullYear()}
              <span>
                {rate}
                <StarIcon />
              </span>
            </p>
            <p>{type}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviesRow;
