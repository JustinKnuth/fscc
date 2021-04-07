import { NavLink } from "react-router-dom"



export default function AuthenticatedOptions () {
  return (
     
    <>
      <NavLink className="link" to="/add-product">
        Add Product
      </NavLink>
      <NavLink className="link" to="/sign-out">
        Sign Out
      </NavLink>
    </>
  
   )
 }

 


//  export const alwaysOptions = (
//   <>
//     <NavLink className="link" to="/products">
//       Products
//     </NavLink>
//   </>
// );

