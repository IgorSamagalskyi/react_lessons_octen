import { useEffect, useState } from "react";
import User from "../user/User";
import { getUsers } from "../../services/users.service";
import "./Users.css";

function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers([...res]));
  }, []);

  return (
    <div className={"wrap"}>
      <div className={"users-box"}>
        {users.map((value) => (
          <User key={value.id}  items={value}/>
        ))}
      </div>
      <div className={"choosen-one"}>Da</div>
    </div>
  );
}

export default Users;
