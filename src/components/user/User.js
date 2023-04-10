import { useEffect } from "react";
import { getAxiosUserPosts } from "../../services/users.axios.service";
import Posts from "../posts/Posts";

function User({ userItem }) {
  useEffect(() => {
    getAxiosUserPosts(userItem.id).then(({ data }) => console.log(data));
  }, [userItem.id]);

  return (
    <div>
      <h2>
        {userItem.id} - {userItem.name}
      </h2>
      <Posts />
    </div>
  );
}

export default User;
