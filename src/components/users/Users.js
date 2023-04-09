import { usersList } from "../../data-file";
import User from "../user/User";

function Users() {
  return (
    <div>
      {usersList.map((userItem) => (
        <User key={userItem.id} userItem={userItem} />
      ))}
    </div>
  );
}

export default Users;
