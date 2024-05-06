import styles from "./Banner.module.css";

// Import lấy database
import { useContext, useEffect, useState } from "react";
import MovieContext from "../../movies/MovieContext";

function Banner() {
  const MovieValue = useContext(MovieContext);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${MovieValue.url}${MovieValue.requests.fetchNetflixOriginals}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);

        setRandomMovie(data.results[randomIndex]);
        // setRandomMovie(data.results[9]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const backgroundStyle = {
    backgroundImage: randomMovie
      ? `linear-gradient(to top, rgba(0,0,0,0.8), rgba(255,255,255,0)), url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`
      : "none",
    backgroundSize: "cover",
    backgroundPosition: "top",
    width: "100%",
    height: "450px", // Thiết lập kích thước mong muốn
  };

  {
    if (randomMovie != null) {
      return (
        <header className={styles.banner} style={backgroundStyle}>
          {/* Content */}
          <div className={styles.content}>
            <h1>{randomMovie.name}</h1>
            <div className={styles.control}>
              <button>Play</button>
              <button>My List</button>
            </div>
            <p>{randomMovie.overview}</p>
          </div>
        </header>
      );
    }
  }
}

export default Banner;
