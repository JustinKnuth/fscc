import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"

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
  const [hamburger, setHamburger] = useState(true);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleResize = (e) => {
      if (window.innerWidth > 425) {
        setHamburger(true);
        setVisible(true);
      } else if (window.innerWidth <= 425) {
        setHamburger(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  return (

    <nav>
      
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          className="hamburger"
          alt="hamburger"
          onClick={() => setHamburger(!hamburger)}
        />
    
      <img className="logo" src="/fscclogolight.png" alt="logo" />

      <div className="nav">
        <NavLink to="/">
          <h1 className="nav-header">full stack coffee co.</h1>
        </NavLink>
        <div className="links">
          {/* If there is a user, render Welcome <user> */}
          {user && <div className="user-welcome">Welcome, {user.username}</div>}
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

export default Nav;


  // return (
  //   <nav>
  //     
  //     <div className="nav-items" style={{ display: hamburger && visible ? `flex` : `none` }}>
  //       <Link to="/">
  //         Home
  //       </Link>
  //       <Link to="/new">
  //         New Sitcom
  //       </Link>
  //     </div>
  //   </nav>
  // );
