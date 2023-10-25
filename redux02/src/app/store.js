import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
       posts: postsReducer,
       counter: counterSlice
    }
})