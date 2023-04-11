import { useEffect, useState } from "react";
import User from "../user/User";
import { getPostsOfUser, getUsers } from "../../services/users.service";
import "./Users.css";
import Posts from "../posts/Posts";

function Users() {
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState(null);
  let [posts, setPosts] = useState(null);
  useEffect(() => {
    getUsers().then((res) => setUsers([...res]));
  }, []);

  const choseUser = (u) => {
    setUser({ ...u });
    getPostsOfUser(u.id).then((value) => setPosts([...value]));
  };

  return (
    <div className={"wrap"}>
      <div className={"users-box"}>
        {users.map((value) => (
          <User key={value.id} items={value} choseUser={choseUser} />
        ))}
      </div>
      {user && (
        <div className={"choosen-one"}>
          {JSON.stringify(user.username)}
          {posts &&
            posts.map((posts) => <Posts key={posts.id} posts={posts} />)}
        </div>
      )}
    </div>
  );
}

export default Users;
