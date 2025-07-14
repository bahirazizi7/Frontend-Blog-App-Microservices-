import axios from "axios";
import { useEffect, useState } from "react";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  // Fetch comments when component mounts or postId changes
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/post/${postId}/comment`);
        console.log(`Comments for post ID ${postId}:`, res.data);
        setComments(res.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);

  const renderComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return <ul>{renderComments}</ul>;
}

export default CommentList;
