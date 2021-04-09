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
      
    </>
  
   )
 }

 


