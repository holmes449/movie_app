import { useState } from "react"; // Thw viện React

import styles from "./ResultList.module.css"; // Css

// Inport component
import ResultItem from "./ResultItem";
import MovieInfo from "../MovieList/MovieInfo";
import Modal from "../UI/Modal";

function ResultList({ movies }) {
  // Data Movies
  const [selectedMovie, setSelectedMovie] = useState("");

  // Hàm hiện modal
  const toggleMovieInfo = (movie) => {
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
    }
  };

  if (movies) {
    return (
      <section className={styles.result}>
        <h2>Kết quả tìm kiếm</h2>

        <div className={styles.result_list}>
          {movies.map((movie, index) => (
            <ResultItem
              key={index}
              onClick={() => toggleMovieInfo(movie)}
              movie={movie}
            />
          ))}
        </div>
        {/* <MovieInfo /> */}
        {selectedMovie && (
          <Modal onClick={() => toggleMovieInfo(selectedMovie)}>
            <MovieInfo movie={selectedMovie} />
          </Modal>
          // <Modal>Hello</Modal>
        )}
      </section>
    );
  }
}

export default ResultList;
