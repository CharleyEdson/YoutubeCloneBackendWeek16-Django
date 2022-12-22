import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import axios from "axios";
import VideoMapper from "../../components/VideoMapper/VideoMapper";
import VideoPageComments from "../../components/VideoPageComments/VideoPageComments";
import "./VideoPage.css";

const VideoPage = (props) => {
  const [video, setVideo] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { videoId } = useParams();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getVideoInfo();
      getRelatedVideos();
    }
    return () => (mounted = false);
  }, [videoId]);

  async function getVideoInfo() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${KEY}`
    );
    console.log(response)
    setVideo(response["data"]["items"][0]);
  }

  async function getRelatedVideos() {
    const responses = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}&part=snippet`
    );
    setRelatedVideos(responses["data"]["items"]);
  }

  return (
    <div>
      <div>
        <div className="videocontainer">
          <div>
            {/* {video.snippet.title} */}
            <div>
              <br></br>
            </div>

            <iframe
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&origin=http://example.com`}
              //   src={`https://www.youtube.com/embed/${video.id}?autoplay=1&origin=http://example.com`}
              frameBorder="0"
            ></iframe>
            <VideoPageComments videoId={video.id} />
          </div>
          <VideoMapper videos={relatedVideos} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default VideoPage;
