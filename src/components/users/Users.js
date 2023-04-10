// import { usersList } from "../../data-file";
import { useEffect, useState } from "react";
import User from "../user/User";
import { getAxiosUsers } from "../../services/users.axios.service";
// import { getUsers } from "../../services/users.service";

function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    // getUsers().then((response) => setUsers([...response]));

    getAxiosUsers().then(({ data }) => setUsers([...data]));
  }, []);

  return (
    <div>
      {users.map((userItem) => (
        <User key={userItem.id} userItem={userItem} />
      ))}
    </div>
  );
}

export default Users;
