let url = "https://jsonplaceholder.typicode.com/users";

const getUsers = () => {
  return fetch(url).then((value) => value.json());
};

const getUser = async (id) => {
  if (+id < 0) {
    throw new Error("мусить бути id! id не має");
  }

  return await fetch(url + "/" + id).then((value) => value.json());
};

export { getUsers, getUser };
