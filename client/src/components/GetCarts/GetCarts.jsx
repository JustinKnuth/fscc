import "./GetCarts.css";
import { Link } from "react-router-dom";

const GetCarts = (props) => {
  const deleteItem = (e) => {
    e.preventDefault();
    props.setToggleFetch((curr) => !curr)
  }
  return (
    <>
      {/* <img className="cart-item-image" src={props.imgURL} alt={props.name} /> */}
      <h2 className="cart-item-name">{props.name}</h2>
      <h2 className="cart-item-price">{props.price}</h2>
      <button onClick={deleteItem}>delete</button>
    </>
  );
};

export default GetCarts;
