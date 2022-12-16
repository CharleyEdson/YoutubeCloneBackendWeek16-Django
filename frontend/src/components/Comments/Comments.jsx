import axios from "axios";
import React, { useState, useEffect } from 'react';


const Comments = ({videoId}) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async (videoId) => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/comments?video_id=${videoId}`);
     
            setComments(response.data)
        }
        catch (error) {
            console.log(error.response)
            alert(error.response)
        }
    };
    const handleButton = () => {
        fetchComments(videoId);
    };

    return ( 
        <div>
            {comments.length !== 0 ? (
                comments.map((comment) => {
                    return (
                        <div>
                            <h3>{comment.user.username}</h3>
                            <p>{comment.text}</p>
                            <br></br>
                            </div>
                            
                    );
                })
            ) : (
                <button onClick={handleButton}>Click Here To See Comments</button>
            )}
        </div>

     );
}
 
export default Comments;