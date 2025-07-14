import { useState } from "react"
import axios from "axios"

function Comment({ postId }) {
  const [comment, setComment] = useState("")

  async function submiteHandler(e) {
    e.preventDefault()
    const res = await axios.post(`http://localhost:4001/post/${postId}/comment`, {
      content: comment
    })
    console.log(res.data)
    setComment("")
  }

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <form onSubmit={submiteHandler}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Comment
