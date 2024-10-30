import { createAsyncThunk } from "@reduxjs/toolkit";
import { createLesson, deleteLesson, fetchLessons, updateLesson } from "../../api/LessonApi";

export const fetchLessonsThunk = createAsyncThunk("data/fetchLessons", async () => {
  const data = await fetchLessons();

  return data;
});

export const createLessonThunk = createAsyncThunk("data/createLesson", async ({ title, description }, { dispatch }) => {
  try {
    // Send the post creation request
    const data = await createLesson({ title, description });

    // Dispatch fetchPostsThunk to refresh the posts list after creating a post
    await dispatch(fetchLessonsThunk());

    return data; // Return the created post data if needed
  } catch (error) {
    console.error(error);
    throw error; // Ensure the error is thrown so the rejected state is handled
  }
});

// Update post thunk
export const updateLessonThunk = createAsyncThunk("data/updateLesson", async ({ id, title, description }, { dispatch }) => {
  try {
    const data = await updateLesson({ id, title, description });

    await dispatch(fetchLessonsThunk());

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Delete post thunk
export const deleteLessonThunk = createAsyncThunk("data/deleteLesson", async ({ id }, { dispatch }) => {
  try {
    const data = await deleteLesson({ id });

    await dispatch(fetchLessonsThunk());

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
