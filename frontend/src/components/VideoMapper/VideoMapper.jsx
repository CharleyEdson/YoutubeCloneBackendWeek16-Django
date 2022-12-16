import DisplayVideos from "../../components/DisplayVideos/DisplayVideos";
import React, { useState, useEffect } from 'react';



const VideoMapper = ({videos}) => {
    return ( <div>
        
        {videos && videos.map(video => <DisplayVideos key={video.id.videoId} video={video}/>          
        )}
        </div> );
}
 
export default VideoMapper;