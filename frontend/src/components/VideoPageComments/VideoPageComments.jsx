import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const VideoPageComments = (props) => {
  const [comments, setComments] = useState([]);
  const [commentsText, setCommentsText] = useState([""]);
  const { videoId } = useParams();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);
  const [user, token] = useAuth();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchComments();
    }
    return () => (mounted = false);
  }, [videoId]);

  const fetchComments = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments?video_id=${videoId}`
      );
      setComments(response.data);
    } catch (error) {
      console.log(error.response);
      alert(error.response);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      video_id: { videoId }.videoId,
      likes: likes,
      dislikes: dislikes,
      text: commentsText,
    };
    //After I post a comment, can I remove the text to make it blank to post a new commnet?
    postComments(newComment);
  }

  const postComments = async (newComment) => {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/comments/post/",
        newComment,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 201) {
        await fetchComments();
      }
    } catch (error) {
      console.log(error.response);
      alert(error.response);
    }
  };

  return (
    <div>
      <br></br>
      <h1>Comments</h1>
      <div>
        <div>
          {user ? (
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={commentsText}
                  onChange={(event) => setCommentsText(event.target.value)}
                ></input>
                <button type="submit">Click Here to Post Your Comment</button>
              </form>
            </div>
          ) : (
            <div>You must be logged in to Post comments </div>
          )}
        </div>
      </div>
      <div>
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <div >
                <p>{comment.index}</p>
                <h1>{comment.user.username}</h1>
                <p>{comment.text}</p>
                <br></br>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoPageComments;
