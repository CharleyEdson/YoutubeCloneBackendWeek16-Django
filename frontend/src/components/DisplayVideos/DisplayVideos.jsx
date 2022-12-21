import React from "react";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import { Link } from "react-router-dom";



const DisplayVideos = ({ video, index }) => {

 
  return (
    <div>
      
      <div>
        <ul>{video.snippet.title}</ul>
      </div>
      {/* <p>{video.id.videoId}</p> */}
      <Link to={`/${video.id.videoId}`}><img src={video.snippet.thumbnails.medium.url} />
      </Link>
      {/* <Comments videoId={video.id.videoId}/> */}
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default DisplayVideos;
