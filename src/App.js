import "./App.css";
import SuperFormTree from "./components/form/SuperFoemTree";
// import Form from "./components/form/Form";
import SuperForm from "./components/form/SuperForm";
import SuperFormTwo from "./components/form/SuperFormTwo";

function App() {
  return (
    <div className="products">
      {/* <Form/> */}
      <SuperForm />
      <hr />
      <SuperFormTwo />
      <hr />
      <SuperFormTree />
    </div>
  );
}

export default App;
