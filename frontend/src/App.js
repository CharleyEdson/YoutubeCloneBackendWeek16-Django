// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {



  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route exact path ="/" element={<MainPage />}>
          <Route path="searches" element={<SearchResultsPage />} >
          <Route path=":videoId" element={<VideoPage />} />
          </Route>
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* /* <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        /> */}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;


//To Dos
//Add Search component to the following pages: Main Page, Search Results Pages.
//Make search bar Link to the searches page, and pass in props and data so it populates the searches page.
//Add in clickability to the search results to then link to the videoPage. <iform> tags.
// Need to add in ability to login and post comments
