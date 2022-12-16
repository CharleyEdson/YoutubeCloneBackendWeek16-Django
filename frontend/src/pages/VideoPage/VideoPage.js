import { useParams } from "react-router-dom";

const VideoPage = (props) => {

    const {videoId} = useParams();

    return ( <div>
        <div>Hello</div>
        <div>{videoId}</div>
    </div> );
}
 
export default VideoPage;