import Post from "../post/Post";

function Posts({ items }) {
  return (
    <div>
      {items.map((value) => (
        <Post key={value.id} item={value} />
      ))}
    </div>
  );
}

export default Posts;
