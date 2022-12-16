import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {DATA} from '../../data'
import DisplayVideos from "../../components/DisplayVideos/DisplayVideos";
import {KEY} from '../../localKey'

const MainPage = () => {
const [videoSearch, setVideoSearch] = useState(DATA[0]['items']);

useEffect(() => {
    let mounted = true;
    if(mounted) {
    //fetchVideos()
    }
    return () => mounted = false;
},[])

    const fetchVideos = async () => {
        try { 
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=alex ovechkin&key=${KEY}&type=video&part=snippet&maxResults=7`)
            setVideoSearch(response.data);
            console.log(response.data.items)
        }
        catch (error) {
            console.log(error.response.items)
        }
    };
 
console.log(videoSearch)


  return (
    <div>
      <div>
        <div>Search For Videos</div>
        <input></input>
        <div>
        {videoSearch && videoSearch.map(video => <DisplayVideos key={video.id.videoId} video={video}/>
            
            // video => {
            // return <li>{video.id.videoId}</li>}
            

        )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
