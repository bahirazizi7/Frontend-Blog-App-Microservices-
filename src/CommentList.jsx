import axios from "axios";

function CommentList({ comments }) {
  console.log("commnet portion",comments);
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <strong>{comment.content}</strong>
        </li>   
      ))}
    </ul>
  );
}

export default CommentList;
