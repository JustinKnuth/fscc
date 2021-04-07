import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"
import AuthOptions from "./NavAuthenticationOptions/AuthOptions"
import UnAuthOptions from "./NavAuthenticationOptions/UnAuthOptions"
import AlwaysOptions from "./NavAuthenticationOptions/AlwaysOptions"


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
        />

        <img className="logo" src="/fscclogolight.png" alt="logo" />

        <div className="nav">
          <NavLink to="/">
            <h1 className="nav-header">full stack coffee co.</h1>
          </NavLink>

          <div className="links">
            {user && <div className="user-welcome">Welcome, {user.username}</div>}

            <AlwaysOptions />

            {user ? <AuthOptions /> : <UnAuthOptions />}
          </div>
        </div>

      </nav>


      <div className="nav-hamburger" style={{ display: hamburger && visible ? `flex` : `none` }}>

        <NavLink to="/">
          Home
        </NavLink>

        <AlwaysOptions />

        {user ? <AuthOptions /> : <UnAuthOptions />}

      </div>

    </div>

  );
};

export default Nav;



