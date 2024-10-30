import axios from "axios";

export const fetchLessons = async () => {
  const response = await axios.get("/api/lessons/get");

  return response.data.data;
};

export const createLesson = async ({ title, description }) => {
  try {
    const response = await axios.post("/api/lessons/create", {
      title,
      description,
    });

    return response.data.data;
  } catch (error) {
    return console.log(error);
  }
};

export const updateLesson = async ({ id, title, description }) => {
  try {
    const response = await axios.put(`/api/lessons/update/${id}`, {
      title,
      description,
    });

    return response.data.data;
  } catch (error) {
    return console.log(error);
  }
};

export const deleteLesson = async ({ id }) => {
  try {
    const response = await axios.delete(`/api/lessons/delete/${id}`);

    return response.data.data;
  } catch (error) {
    return console.log(error);
  }
};
