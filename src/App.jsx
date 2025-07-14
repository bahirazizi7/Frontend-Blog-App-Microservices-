import Post from "./Post"
import PostList from "./PostList"

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <Post />
      <hr />
      <PostList />
    </div>
  )
}

export default App
