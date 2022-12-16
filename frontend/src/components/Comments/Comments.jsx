import axios from "axios";
import React, { useState, useEffect } from 'react';


const Comments = ({videoId}) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async (videoId) => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/comments?video_id=${videoId}`);
            console.log('Comments:', response.data);
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
            {console.log(comments)}
            {comments.length !== 0 ? (
                comments.map((comment) => {
                    return (
                        <div>
                            <h1>{comment.user.username}</h1>
                            <p>{comment.text}</p>
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