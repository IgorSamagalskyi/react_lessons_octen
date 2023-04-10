import { useEffect, useState } from "react";
import { getAxiosUserPosts } from "../../services/users.axios.service";
import Posts from "../posts/Posts";
import Address from "../address/Address";

function User({ userItem }) {
  let { address } = userItem;
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getAxiosUserPosts(userItem.id).then(({ data }) => setPosts([...data]));
  }, [userItem.id]);
  return (
    <div>
      <h2>
        {userItem.id} - {userItem.name}
      </h2>
      <Address address={address} />
      <hr />
      <Posts items={posts} />
    </div>
  );
}

export default User;
