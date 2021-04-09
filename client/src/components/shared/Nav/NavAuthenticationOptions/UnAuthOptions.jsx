import { NavLink } from "react-router-dom";



export default function UnauthenticatedOptions() {
  return (
    <>
      <NavLink className="link" to="/sign-up">
        Sign Up
        </NavLink>

      <NavLink className="link" to="/sign-in">
        Sign In
    </NavLink>
    </>


  )





}
;
