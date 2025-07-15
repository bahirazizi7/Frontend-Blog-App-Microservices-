import axios from "axios";

function CommentList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>

          <ul>
            {comment.comments.map((c) => (
              <li key={c.id}>{c.content}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
