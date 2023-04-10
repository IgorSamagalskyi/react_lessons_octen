function User({ items }) {
  return (
    <div>
      {items.id}-{items.name}
      <button onClick={()=>{
				console.log(items);
			}}>click me</button>
      <hr />
    </div>
  );
}

export default User;
