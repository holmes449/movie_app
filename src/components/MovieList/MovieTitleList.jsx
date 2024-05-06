import { useState } from "react";

import styles from "./MovieTitleList.module.css";

import MovieTitleItem from "./MovieTitleItem";
import MovieInfo from "./MovieInfo";

function MovieTitleList({ title, movies }) {
  // Data Movies
  const [selectedMovie, setSelectedMovie] = useState("");

  const toggleMovieInfo = (movie) => {
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
    }
  };

  {
    if (movies) {
      return (
        <section>
          <h2 className={styles.title_movie_title}>{title}</h2>
          <div className={styles.movie_title}>
            <ul className={styles.list_title}>
              {movies.map((movie, index) => (
                <MovieTitleItem
                  key={index}
                  onClick={() => toggleMovieInfo(movie)}
                  poster={movie.backdrop_path}
                  name={movie.name ? movie.name : movie.original_title}
                />
              ))}
            </ul>
          </div>
          {selectedMovie && <MovieInfo movie={selectedMovie} />}
        </section>
      );
    }
  }
}

export default MovieTitleList;
