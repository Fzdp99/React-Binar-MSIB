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

export const createPost = async () => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    userId: 1,
    id: 1,
    title: "Fred",
    body: "Flintstone",
  });
  return res.status;
};

export const updatePost = async (id) => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${id}
  `,
    {
      title: "Fred",
      body: "Flintstone",
    }
  );
  return res.status;
};
