import React from "react";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import { Link } from "react-router-dom";
import "./DisplayVideos.css";

const DisplayVideos = ({ video }) => {
  return (
    <div className="videosbox">
      <div className="videoframe">
      <div className="videobox">
        <ul >{video.snippet.title}</ul>
      {/* </div>
      <div> */}
        <Link to={`/${video.id.videoId}`}>
          <div className="image">
          <img className='image' src={video.snippet.thumbnails.medium.url} />
          </div>
        </Link>
      </div>
      <br></br>
      <br></br>
      </div>
    </div>
  );
};

export default DisplayVideos;
