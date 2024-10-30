import { createSlice } from "@reduxjs/toolkit";
import { fetchLessonsThunk } from "../thunks/LessonThunks";

const LessonSlicer = createSlice({
  name: "lessons",
  initialState: {
    lessons: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessonsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLessonsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.lessons = action.payload;
      })
      .addCase(fetchLessonsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default LessonSlicer.reducer;
