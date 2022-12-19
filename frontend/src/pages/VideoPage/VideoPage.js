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
    
    setVideo(response['data']['items'][0]);
    console.log(video)

    

  }


  return (
    <div>
      {video.id}
      <div>
      {/* {video.snippet.title} */}
      <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&origin=http://example.com`}
  frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default VideoPage;
