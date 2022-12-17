import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import axios from "axios";

const VideoPage = (props) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getSongInfo();
  }, []);

//     let mounted = true;
//     if (mounted) {
//     getSongInfo();
//     }
//     return () => (mounted = false);
// }, []);

  const { videoId } = useParams();

  async function getSongInfo() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${KEY}`
    );
    
    console.log(video)
    setVideo(response['data']['items'][0]);

  }

  return (
    <div>
      {/* {video.id}
      <div>
      {video.snippet.title}
      </div> */}
    </div>
  );
};

export default VideoPage;
