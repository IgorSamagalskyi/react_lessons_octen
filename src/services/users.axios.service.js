import axios from "axios";

let config = {
  baseURL: "https://jsonplaceholder.typicode.com/users",
};

let axiosInstance = axios.create(config);

const getAxiosUsers = () => {
  return axiosInstance.get("");
};

const getAxiosUserId = (id) => {
  return axiosInstance.get("/" + id);
};

const getAxiosUserPosts = (id) => {
  return axiosInstance.get("/" + id + "/posts");
};

export { getAxiosUsers, getAxiosUserId, getAxiosUserPosts };
