import MovieContext from "./MovieContext";

const API_KEY = "351e93f7d7d07a5ecfc826c46e77df85";
const API_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

const MovieValue = {
  apikey: API_KEY,
  url: API_URL,
  requests: requests,
};

function MovieProvider({ children }) {
  return (
    <MovieContext.Provider value={MovieValue}>{children}</MovieContext.Provider>
  );
}

export default MovieProvider;
