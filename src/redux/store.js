import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slicers/PostSlicer";
import lessonReducer from "./slicers/LessonSlicer";

export default configureStore({
  reducer: {
    posts: postReducer,
    lessons: lessonReducer,
  },
});
