import styles from "./MovieItem.module.css";

function MovieItem({ onClick, poster, name }) {
  // console.log(id, poster, name, date, overview, vote);
  return (
    <li className={styles.movie_item} onClick={onClick}>
      <img
        className={styles.image_zoom}
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={name}
      />
    </li>
  );
}

export default MovieItem;
