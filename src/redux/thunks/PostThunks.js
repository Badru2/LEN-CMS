import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts, createPost, deletePost, updatePost } from "../../api/postApi";

// Fetch all posts thunk
export const fetchPostsThunk = createAsyncThunk("data/fetchPosts", async () => {
  const data = await fetchPosts();

  return data;
});

// Create post thunk
export const createPostThunk = createAsyncThunk("data/createPost", async ({ title, content, thumbnail }, { dispatch }) => {
  try {
    // Send the post creation request
    const data = await createPost({ title, content, thumbnail });

    // Dispatch fetchPostsThunk to refresh the posts list after creating a post
    await dispatch(fetchPostsThunk());

    return data; // Return the created post data if needed
  } catch (error) {
    console.error(error);
    throw error; // Ensure the error is thrown so the rejected state is handled
  }
});

// Update post thunk
export const updatePostThunk = createAsyncThunk("data/updatePost", async ({ id, title, content, thumbnail }, { dispatch }) => {
  try {
    const data = await updatePost({ id, title, content, thumbnail });

    await dispatch(fetchPostsThunk());

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Delete post thunk
export const deletePostThunk = createAsyncThunk("data/deletePost", async ({ id }, { dispatch }) => {
  try {
    const data = await deletePost({ id });

    await dispatch(fetchPostsThunk());

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
