function User({ items, choseUser }) {
  const onClickChoseUser = () => {
    choseUser(items);
  };

  return (
    <div>
      {items.id}-{items.name}
      <button onClick={onClickChoseUser}>click me</button>
      <hr />
    </div>
  );
}

export default User;
