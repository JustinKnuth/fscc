import "./GetCarts.css";
import { Link } from "react-router-dom";

const GetCarts = (props) => {
  console.log(props);
  return (
    <>
      <img className="cart-item-image" src={props.imgURL} alt={props.name} />
      <h2 className="cart-item-name">{props.name}</h2>
      <h2 className="cart-item-price">{props.price}</h2>
    </>
  );
};

export default GetCarts;
