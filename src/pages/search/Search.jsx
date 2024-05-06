import React, { useState, useEffect, useContext } from "react"; // Thư viện React

// Movie data context
import MovieContext from "../../movies/MovieContext";

// Imporst các component
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/Search/SearchForm";
import ResultList from "../../components/ResultList/ResultList";

const Search = () => {
  // Lấy dữ liệu từ movie context
  const movieContext = useContext(MovieContext);

  // State Search
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // Fetch Api
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery.trim() !== "") {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${movieContext.apikey}&language=en-US&query=${searchQuery}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setMovies(data.results);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [searchQuery]);

  // Hàm lấy value input
  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <NavBar />
      <SearchForm onSubmit={handleSearchSubmit} />
      {error && <div>Error: {error}</div>}
      <ResultList movies={movies} />
    </div>
  );
};

export default Search;
