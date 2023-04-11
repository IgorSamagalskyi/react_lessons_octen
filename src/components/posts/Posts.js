function Posts({ posts: { body, title } }) {
  return (
    <div>
      <h2>{title}</h2>
      <p> {body}</p>

      <hr />
    </div>
  );
}

export default Posts;
