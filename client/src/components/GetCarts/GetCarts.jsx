import "./GetCarts.css";
import { Link } from "react-router-dom"

const GetCarts = (props) => {
  
  return (
    <>
      

   
      <tr>
        <td>
          <Link to={`/products/${props._id}`}>
      <img className="cart-item-image" src={props.image} alt={props.name} />
            
          </Link>

        </td>
        <td>
        <Link to={`/products/${props._id}`}>


      <h2 className="cart-item-name">{props.name}</h2>
    </Link>
        </td>
        <td>
      <h2 className="cart-item-price">${props.price}</h2>

        </td>

      </tr>
          
    
    </>
  );
};

export default GetCarts;
