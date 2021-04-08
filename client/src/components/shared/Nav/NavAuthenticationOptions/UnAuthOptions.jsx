import { NavLink } from "react-router-dom";



export default function UnauthenticatedOptions() {
  return (
    <>
      <NavLink className="link" to="/sign-up">
        sign up
        </NavLink>

      <NavLink className="link" to="/sign-in">
        sign in
    </NavLink>
    </>


  )





}
;
