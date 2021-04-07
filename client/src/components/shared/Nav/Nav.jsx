import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { authenticatedOptions } from "../../../helpers/authOptions.js"
// import { unauthenticatedOptions } from "../../../helpers/unAuthOptions.js"
// import { alwaysOptions } from "../../../helpers/alwaysOptions.js"


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
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);
  

  const handleClick = (e) => {
    e.preventDefault()
    setVisible(!visible)
    setHamburger(!hamburger)
  }
  



  return (
    <div>
    <nav>
      

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          className="hamburger"
        alt="hamburger"
        onClick={handleClick}
          // onClick={() => setHamburger(!hamburger)}
        />
     
      
      


      <img className="logo" src="/fscclogolight.png" alt="logo" />

      <div className="nav">
        <NavLink to="/">
          <h1 className="nav-header">full stack coffee co.</h1>
        </NavLink>
        <div className="links">
          {/* If there is a user, render Welcome <user> */}
          {user && <div className="user-welcome">Welcome {user.username}</div>}
          {/* Always render this */}
          {alwaysOptions}

          {/* If there is user, render authenticatedOptions, 
          otherwise render unauthenticatedOptions */}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
      
      </nav>
      

      <div className="nav-items" style={{ display: hamburger && visible ? `flex` : `none` }}>
       
      <NavLink to="/">
         Home
        </NavLink>
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
        
      </div>

  </div>








  );
};

export default Nav;


  // return (
  //   <nav>
  //     
      
  //   </nav>
  // );
