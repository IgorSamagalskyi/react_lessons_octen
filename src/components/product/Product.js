import "./Product.css";

function Product({ title, price }) {
  //let { title, price } = props;
  let classNameTitle = "product"; // локальна тут пишеться функція
  return (
    <div className={classNameTitle}>
      <h2 className={"title"}> {title}</h2>
      <h3>price is - {price}</h3>
      <hr />
    </div>
  );
}

export default Product;
