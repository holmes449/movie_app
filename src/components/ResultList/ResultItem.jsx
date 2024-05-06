import styles from "./ResultItem.module.css";

function ResultItem({ onClick, movie }) {
  return (
    <div className={styles.result_item} onClick={onClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.name || movie.original_title}
      />
    </div>
  );
}

export default ResultItem;
