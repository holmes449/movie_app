import React from "react"; // Thư viện React

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Thư viện react router

// Gọi các component
import MovieProvider from "./movies/MovieProvider";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
