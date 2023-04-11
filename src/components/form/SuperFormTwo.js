import { useState } from "react";
import { saveUser } from "../../services/user.api.service";

function SuperFormTwo() {
  let [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  let onFormInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  let save = (e) => {
    e.preventDefault();
    console.log(formState);
    saveUser(formState);
  };

  return (
    <div>
      <h1>Two</h1>
      <form onSubmit={save}>
        <input
          type="text"
          name={"username"}
          value={formState.username}
          onChange={onFormInputChange}
        ></input>
        <input
          type="email"
          name={"email"}
          value={formState.email}
          onChange={onFormInputChange}
        ></input>
        <input
          type="password"
          name={"password"}
          value={formState.password}
          onChange={onFormInputChange}
        ></input>
        <button>save</button>
      </form>
    </div>
  );
}

export default SuperFormTwo;
