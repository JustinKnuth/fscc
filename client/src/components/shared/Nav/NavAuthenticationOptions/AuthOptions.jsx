import { NavLink } from "react-router-dom"



export default function AuthenticatedOptions () {
  return (
     
    <>
      <NavLink className="link" to="/add-product">
        add product
      </NavLink>
      <NavLink className="link" to="/sign-out">
        sign out
      </NavLink>
      {/* <NavLink to="/users/:id/add-to-cart/:productId">
        <img src="https://www.flaticon.com/free-icon/shopping-cart_263142" alt="cart"/>
      </NavLink> */}
    </>
  
   )
 }

 


