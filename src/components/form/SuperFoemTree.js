import { createRef } from "react";
import { saveUser } from "../../services/user.api.service";

function SuperFormTree() {
  let refObject = createRef();

  let save = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    let userToSave = {
      username: refObject.current.username.value,
      email: refObject.current.email.value,
      password: refObject.current.password.value,
    };

    saveUser(userToSave);
  };

  return (
    <div>
      <h1>Tree</h1>
      <form onSubmit={save} ref={refObject}>
        <input type="text" name={"username"}></input>
        <input type="email" name={"email"}></input>
        <input type="password" name={"password"}></input>
        <button>save</button>
      </form>
    </div>
  );
}

export default SuperFormTree;
