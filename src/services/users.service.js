let url = "https://jsonplaceholder.typicode.com/users";

const getUsers = () => {
  return fetch(url).then((value) => value.json());
};

const getPostsOfUser = async (id) => {
  if (+id < 0) {
    throw new Error("мусить бути id! id немає");
  }

  return await fetch(url + "/" + id + "/posts").then((value) => value.json());
};

export { getUsers, getPostsOfUser };
