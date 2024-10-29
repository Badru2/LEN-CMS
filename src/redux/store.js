import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slicers/PostSlicer";

export default configureStore({
  reducer: {
    posts: postReducer,
  },
});
