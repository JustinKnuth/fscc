import "./Nav.css"
import { NavLink } from "react-router-dom"

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">
      Add Product
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/products">
      Products
    </NavLink>
  </>
);


const Nav = ({ user }) => {
  return (
    <nav>
      <img className="logo" src="/fscclogolight.png" alt="logo" />

      <div className="nav">
        <NavLink to="/">
          <h1 className="nav-header">full stack coffee co.</h1>

        </NavLink>
        <div className="links">
          {/* If there is a user, render Welcome <user> */}
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {/* Always render this */}
          {alwaysOptions}
          {/* If there is user, render authenticatedOptions, 
          otherwise render unauthenticatedOptions */}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav





