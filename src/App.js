import "./App.css";
import Product from "./components/product/Product";
// let hello = "Hello All";  глобальна функція

function App() {
  return (
    <div className="products">
      <Product title={"milk"} price={"20uah"} />
      <Product title={"jus"} price={"40uah"} />
    </div>
  );
}

export default App;
