import axios from "axios";

// Fetch all posts (get posts by latest created)
export const fetchPosts = async () => {
  const response = await axios.get("/api/posts/get");

  return response.data.data;
};

// Create post
export const createPost = async ({ title, content, thumbnail }) => {
  try {
    const response = await axios.post(
      "/api/posts/create",
      {
        title,
        content,
        thumbnail,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    fetchPosts();

    return response.data.data;
  } catch (error) {
    return console.log(error);
  }
};

export const updatePost = async ({ id, title, content, thumbnail }) => {
  try {
    const response = await axios.put(
      `/api/posts/update/${id}`,
      {
        title,
        content,
        thumbnail,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data.data;
  } catch (error) {
    return console.log(error);
  }
};

export const deletePost = async ({ id }) => {
  try {
    const response = await axios.delete(`/api/posts/delete/${id}`);
    return response.data.data;
  } catch (error) {
    return console.log(error);
  }
};
