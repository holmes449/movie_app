// Thư viện React
import { useState } from "react";

// Css
import styles from "./MovieList.module.css";

// Components
import MovieItem from "./MovieItem";
import MovieInfo from "./MovieInfo";

function MovieList({ movies }) {
  // Data Movies
  // const [selectedMovie, setSelectedMovie] = useState("");

  // const toggleMovieInfo = (movie) => {
  //   if (selectedMovie && selectedMovie.id === movie.id) {
  //     setSelectedMovie(null);
  //   } else {
  //     setSelectedMovie(movie);
  //   }
  // };

  {
    if (movies) {
      return (
        <section className={styles.movie_list}>
          <ul className={styles.list_origin}>
            {movies.map((movie, index) => (
              <MovieItem
                key={index}
                // onClick={() => toggleMovieInfo(movie)}
                poster={movie.poster_path}
                name={movie.name}
              />
            ))}
          </ul>
          {/* {selectedMovie && <MovieInfo movie={selectedMovie} />} */}
          {/* <MovieInfo /> */}
        </section>
      );
    }
  }
}

export default MovieList;
