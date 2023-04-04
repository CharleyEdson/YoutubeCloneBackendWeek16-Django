import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./SearchBar.css";

const SearchBar = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div className="searchbar">
        <div className="searchmessage"> Search For Videos</div>
        <div className="searchbarform">
          <input
            type="text"
            value={props.search}
            onChange={(event) => props.setSearch(event.target.value)}
          ></input>
          <br></br>
          <div>
            <button onClick={() => props.fetchVideos()}>
              Click Here To Search
            </button>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
