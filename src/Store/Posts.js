import axios from "axios";

export const getPosts = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts
  `);
  return res.data;
};

export const getPost = async (id) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}
  `);
  return res.data;
};

export const deletePost = async (id) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}
  `);
  return res.status;
};
