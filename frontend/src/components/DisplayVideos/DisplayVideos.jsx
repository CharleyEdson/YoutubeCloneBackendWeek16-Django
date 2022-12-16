import React from "react";
import { useEffect, useState } from "react";

const DisplayVideos = ({video, index}) => {
 return (
    <div>
      <li>{video.id.videoId}</li>
      <img src={video.snippet.thumbnails.default.url}/>
    </div>
 );

}
 
export default DisplayVideos;