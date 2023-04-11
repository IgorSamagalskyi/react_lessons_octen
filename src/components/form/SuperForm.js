import { useState } from "react";
import { saveUser } from "../../services/user.api.service";

function SuperForm() {
  let [username, SetUsername] = useState("");
  let [email, SetEmail] = useState("");
  let [password, SetPassword] = useState("");

  let onUsernameChange = (e) => {
    console.log(e.target.value);
    SetUsername(e.target.value);
  };
  let onEmailChange = (e) => {
    console.log(e.target.value);
    SetEmail(e.target.value);
  };
  let onPasswordChange = (e) => {
    console.log(e.target.value);
    SetPassword(e.target.value);
  };

  let userToSave = { username: username, email: email, password: password };

  let save = (e) => {
    e.preventDefault();
    saveUser(userToSave);
  };

  return (
    <div>
      <h1>One</h1>
      <form onSubmit={save}>
        <input
          type="text"
          name={"username"}
          value={username}
          onChange={onUsernameChange}
        ></input>
        <input
          type="email"
          name={"email"}
          value={email}
          onChange={onEmailChange}
        ></input>
        <input
          type="password"
          name={"password"}
          value={password}
          onChange={onPasswordChange}
        ></input>
        <button>save</button>
      </form>
    </div>
  );
}

export default SuperForm;
