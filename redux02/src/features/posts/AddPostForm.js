import { useState } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postsAdded } from "./postsSlice";

const AddPostForm = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const handleSubmit = () => {
      if (title && content){
        dispatch(
          postsAdded({ 
            id: nanoid(), 
            title, 
            content 
          }))
          
        setTitle('');
        setContent('');
        } else {
          alert("Please fill all fields")   
      }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button" onClick={handleSubmit}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm