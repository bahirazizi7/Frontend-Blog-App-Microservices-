import axios from "axios"
import { useEffect, useState } from "react"
import Comment from "./Comment"
import CommentList from "./CommentList"

function PostList() {
  const [posts, setPosts] = useState({})

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4002/posts")
    setPosts(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  const renderPost = Object.values(posts).map(post => (
    <div className="post-card" key={post.id}>
      <h2>{post.title}</h2>
      <CommentList comments={post.comments} />
      <Comment postId={post.id} />
    </div>
  ))

  return (
    <div className="postlist">
      {renderPost}
    </div>
  )
}

export default PostList
