import React, { useContext, useEffect, useState } from "react";

// Import các components
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import MovieList from "../../components/MovieList/MovieList";
import MovieTitleList from "../../components/MovieList/MovieTitleList";

// Movie data context
import MovieContext from "../../movies/MovieContext";

function Browse() {
  // Lấy dữ liệu từ movie context
  const movieContext = useContext(MovieContext);
  const [moviesOriginal, setMovieOriginal] = useState([]); // Khởi tạo danh sách phim nguyên bản
  const [movieTrending, setMovieTrending] = useState([]); // Khởi tạo danh sách phim xu hướng
  const [movieTopRate, setMovieTopRate] = useState([]); // Khởi tạo danh sách phim đứng đầu
  const [movieAction, setMovieAction] = useState([]); // Khởi tạo danh sách phim hành động
  const [movieComedy, setMovieComedy] = useState([]); // Khởi tạo danh sách phim hài
  const [movieHorror, setMovieHorror] = useState([]); // Khởi tạo danh sách phim kinh dị
  const [movieRomance, setMovieRomance] = useState([]); // Khởi tạo danh sách phim lãng mạn
  const [movieDocument, setMovieDocument] = useState([]); // Khởi tạo danh sách phim tài liệu

  // Hàm fetch data
  const fetchData = async (status) => {
    try {
      // Nguyên bản
      if (status === "Original") {
        const response = await fetch(
          `${movieContext.url}${movieContext.requests.fetchNetflixOriginals}`
        );
        const data = await response.json();
        const first10Movies = data.results.slice(0, 10);
        setMovieOriginal(first10Movies);
        // console.log(first10Movies);
      }

      // Xu hướng
      if (status === "Trending") {
        const response = await fetch(
          `${movieContext.url}${movieContext.requests.fetchTrending}`
        );
        const data = await response.json();
        const firstMovies = data.results;
        setMovieTrending(firstMovies);
        // console.log(data.results);
      }

      // Xếp hạng cao
      if (status === "TopRate") {
        const response = await fetch(
          `${movieContext.url}${movieContext.requests.fetchTopRated}`
        );
        const data = await response.json();
        const firstMovies = data.results;
        setMovieTopRate(firstMovies);
      }

      // Hành động
      if (status === "Action") {
        const response = await fetch(
          `${movieContext.url}${movieContext.requests.fetchActionMovies}`
        );
        const data = await response.json();
        const firstMovies = data.results;
        setMovieAction(firstMovies);
      }

      // Hài
      if (status === "Comedy") {
        const response = await fetch(
          `${movieContext.url}${movieContext.requests.fetchComedyMovies}`
        );
        const data = await response.json();
        const firstMovies = data.results;
        setMovieComedy(firstMovies);
      }

      // Kinh dị
      if (status === "Horror") {
        const response = await fetch(
          `${movieContext.url}${movieContext.requests.fetchHorrorMovies}`
        );
        const data = await response.json();
        const firstMovies = data.results;
        setMovieHorror(firstMovies);
      }

      // Lãng mạn
      if (status === "Romance") {
        const response = await fetch(
          `${movieContext.url}${movieContext.requests.fetchRomanceMovies}`
        );
        const data = await response.json();
        const firstMovies = data.results;
        setMovieRomance(firstMovies);
      }

      // Hành động
      if (status === "Document") {
        const response = await fetch(
          `${movieContext.url}${movieContext.requests.fetchDocumentaries}`
        );
        const data = await response.json();
        const firstMovies = data.results;
        setMovieDocument(firstMovies);
      }
    } catch (error) {
      console.log("Lỗi là: ", error);
    }
  };

  // Fecth Api
  useEffect(() => {
    fetchData("Original");
    fetchData("Trending");
    fetchData("TopRate");
    fetchData("Action");
    fetchData("Comedy");
    fetchData("Horror");
    fetchData("Romance");
    fetchData("Document");
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Banner />
      <MovieList movies={moviesOriginal} />
      <MovieTitleList title={"Xu hướng"} movies={movieTrending} />
      <MovieTitleList title={"Xếp hạng cao"} movies={movieTopRate} />
      <MovieTitleList title={"Hành động"} movies={movieAction} />
      <MovieTitleList title={"Hài"} movies={movieComedy} />
      <MovieTitleList title={"Kinh dị"} movies={movieHorror} />
      <MovieTitleList title={"Lãng mạn"} movies={movieRomance} />
      <MovieTitleList title={"Tài liệu"} movies={movieDocument} />
    </div>
  );
}

export default Browse;
