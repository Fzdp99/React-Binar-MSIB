import axios from "axios";

export const getUsers = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return res.data;
};

export const getUser = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return res.data;
};

export const createUser = async () => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/users/", {
    name: "Fred",
    username: "Flintstone",
    email: "Flintstone@gmail.com",
    phone: "0923002302",
    website: "Flintstone.org",
  });
  return res.status;
};

export const updateUser = async (id) => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      name: "Fred",
      username: "Flintstone",
      email: "Flintstone@gmail.com",
      phone: "0923002302",
      website: "Flintstone.org",
    }
  );
  return res.status;
};
