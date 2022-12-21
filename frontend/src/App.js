// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";

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
        <Route exact path ="/" element={<MainPage />}/>

        <Route path="/:videoId" element={<VideoPage />} />
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


//KNOWN BUGS

//1) Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received
//Happens when I leave it on one page for too long.
