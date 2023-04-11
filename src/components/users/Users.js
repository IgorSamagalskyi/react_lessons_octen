import { useEffect, useState } from "react";
import User from "../user/User";
import { getUsers } from "../../services/users.service";
import "./Users.css";

function Users() {
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState(null);
  useEffect(() => {
    getUsers().then((res) => setUsers([...res]));
  }, []);

  const choseUser = (u) => {
    setUser({ ...u });
  };

  return (
    <div className={"wrap"}>
      <div className={"users-box"}>
        {users.map((value) => (
          <User key={value.id} items={value} choseUser={choseUser} />
        ))}
      </div>
      {user && (
        <div className={"choosen-one"}>{JSON.stringify(user.username)}</div>
      )}
    </div>
  );
}

export default Users;
