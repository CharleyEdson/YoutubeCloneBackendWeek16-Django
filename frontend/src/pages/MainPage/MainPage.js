import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { DATA } from "../../data";

import { KEY } from "../../localKey";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoMapper from "../../components/VideoMapper/VideoMapper";

const MainPage = () => {
  const [videoSearch, setVideoSearch] = useState(DATA[0]["items"]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      //fetchVideos()
    }
    return () => (mounted = false);
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=alex ovechkin&key=${KEY}&type=video&part=snippet&maxResults=7`
      );
      setVideoSearch(response.data);
      console.log('THis ran')
      console.log(response[0]["items"]);
    } catch (error) {
      console.log(error.response.items);
    }
  };

  console.log(videoSearch);

  return (
    <div>
      <div>
        <SearchBar />
        <VideoMapper videos={videoSearch} />
      </div>
    </div>
  );
};

export default MainPage;
