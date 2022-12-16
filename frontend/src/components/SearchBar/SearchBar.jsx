import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SearchBar = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
  }



  
  return (
    <div>
      <div> Search For Videos</div>
      <div>
        <input
          type="text"
          value={props.search}
          onChange={(event) => props.setSearch(event.target.value)}
          
        ></input>
        <div>
        <button onClick={()=> props.fetchVideos()}>
            <b>Click Here To Search</b>
          
        </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
