import React from "react";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";

const DisplayVideos = ({ video, index }) => {
  return (
    <div>
      <div>
        <ul>{video.snippet.title}</ul>
      </div>
      <img src={video.snippet.thumbnails.default.url} />
      <Comments videoId={video.id.videoId}/>
    </div>
  );
};

export default DisplayVideos;
