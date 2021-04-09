import "./GetCarts.css";

const GetCarts = (props) => {
  
  return (
    <>
      
      <h2 className="cart-item-name">{props.name}</h2>
      <h2 className="cart-item-price">{props.price}</h2>
    </>
  );
};

export default GetCarts;
