import { useEffect, useState, useContext } from "react";

import styles from "./MovieInfo.module.css";

import MovieContext from "../../movies/MovieContext";

function MovieInfo({ movie }) {
  const [infoVideo, setInfoVideo] = useState("");
  const movieContext = useContext(MovieContext);

  // Lấy API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${movieContext.apikey}`
        );
        if (!response.ok) {
          setInfoVideo("");
        }
        const data = await response.json();
        const dataInfo = await data.results[1];
        setInfoVideo(dataInfo);
      } catch (error) {
        console.error("Lỗi là: ", error);
      }
    };

    fetchData();
  }, [movie]);

  return (
    <div className={styles.movie_info}>
      <div className={styles.content}>
        <h2>{movie.name || movie.original_title}</h2>
        <div className={styles.date}>
          Ngày phát hành: {movie.first_air_date || movie.release_date}
        </div>
        <div className={styles.vote}>Đánh giá: {movie.vote_average} / 10</div>
        <p>{movie.overview}</p>
      </div>

      {infoVideo ? (
        <div className={styles.video}>
          <iframe
            className={styles.video_item}
            src={`https://www.youtube.com/embed/${infoVideo.key}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img
          className={styles.image}
          src={
            movie.backdrop_path != null
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : "./images/image_error.webp"
          }
          alt=""
        />
      )}
    </div>
  );
}

export default MovieInfo;
