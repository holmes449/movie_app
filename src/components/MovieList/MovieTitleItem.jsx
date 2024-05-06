import styles from "./MovieTitleItem.module.css";

function MovieTitleItem({ onClick, poster, name }) {
  // console.log(`https://image.tmdb.org/t/p/w500${poster}`);
  return (
    <li className={styles.movie_item} onClick={onClick}>
      <img
        className={styles.image_zoom}
        src={
          poster != null
            ? `https://image.tmdb.org/t/p/w500${poster}`
            : "./images/image_error.webp"
        }
        alt={name}
      />
    </li>
  );
}

export default MovieTitleItem;
