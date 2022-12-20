import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { KEY } from "../../localKey";
import axios from "axios";
import VideoMapper from "../../components/VideoMapper/VideoMapper";
import VideoPageComments from "../../components/VideoPageComments/VideoPageComments";

const VideoPage = (props) => {
  const [video, setVideo] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { videoId } = useParams();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getVideoInfo();
      getRelatedVideos();
      console.log(relatedVideos, 'use effect for video page');
    }
    return () => (mounted = false);
  }, []);

  

  async function getVideoInfo() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${KEY}`
    );

    setVideo(response["data"]["items"][0]);
  }

  //Insert function to call API for related videos
  async function getRelatedVideos() {
    const responses = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}`
    );
    console.log('test')
    console.log(responses)
    setRelatedVideos(responses['data']['items']);
  }

  return (
    <div>
      <div>
        {/* {video.snippet.title}  Can't get this to load after the first time. Something to do with axios. */}
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
        <VideoPageComments videoId={videoId}/>
      </div>
      <div>
        
        {/* <VideoMapper videos={relatedVideos} /> */}
        
      </div>
    </div>
  );
};

export default VideoPage;
