import { useState } from "react"
import axios from "axios"

function Comment({postId}){
    const[comment, setComment]= useState("")

   async function submiteHandler(e) {
        e.preventDefault()
       const res= await axios.post(`http://localhost:4001/post/${postId}/comment`,
            {content:comment}
        )
        console.log(res.data)
        setComment("")
    
   }

    return(
        <>
        <h3>comments</h3>
        <form onSubmit={submiteHandler}>
            <input 
            type="text" 
            placeholder="comment"
            value={comment} 
            onChange={e=> setComment(e.target.value)}
             />
            <button type="submite">Submite</button>
        </form>
        
        </>
    )
}

export default Comment