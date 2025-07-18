import { useState } from "react"
import axios from "axios"

const Post = () => {
  const [title, setTitle] = useState("")

  async function submitHandler(e) {
    e.preventDefault()
    if (!title.trim()) return alert("Please enter a title")

    try {
      const response = await axios.post("http://localhost:4000/post", { title })
      console.log("Post is created", response.data)
      setTitle("")
    } catch (error) {
      console.error("Failed to create post:", error)
    }
  }

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <h1>Post</h1>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Post
