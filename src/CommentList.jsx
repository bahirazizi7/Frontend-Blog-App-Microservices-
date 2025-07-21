import axios from "axios";

function CommentList({ comments }) {

  
  const renderComments = comments.map((comment) => {
    let content;
    let color
  switch (comment.status) {
    case 'approved':
      content = comment.content;
      color = 'green';
      break;
    case 'pending':
      content = 'This comment is awaiting moderation';
      color = 'orange';
      break;
    case 'rejected':
      content = 'This comment has been rejected';
      color = 'red';
      break;
    default:
      content = 'Unknown status';
      color = 'gray';
  }
    return <li key={comment.id} style={{color:color}} >{content}</li>;

  })
  return (
    <ul>{renderComments} </ul>
  );


}

export default CommentList;
