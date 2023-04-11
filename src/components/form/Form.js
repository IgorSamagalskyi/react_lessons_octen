import { saveUser } from "../../services/user.api.service";

function Form() {
  let onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    let userToSave = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    saveUser(userToSave);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" name={"username"}></input>
        <input type="email" name={"email"}></input>
        <input type="password" name={"password"}></input>
        <button>save</button>
      </form>
    </div>
  );
}

export default Form;
