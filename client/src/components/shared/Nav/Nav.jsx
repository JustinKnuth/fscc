import "./Nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthOptions from "./NavAuthenticationOptions/AuthOptions";
import UnAuthOptions from "./NavAuthenticationOptions/UnAuthOptions";
import AlwaysOptions from "./NavAuthenticationOptions/AlwaysOptions";

const Nav = ({ user }) => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);

  // Set windowDimension to figure out which layout to render
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  // If screen is resized, reset windowDimension
  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Control whether hamburger links are visible through handleClick
  const handleClick = (e) => {
    e.preventDefault();
    setVisible(!visible);
    setHamburger(!hamburger);
  };

  // Use isMobile to determine which layout to render
  const isMobile = windowDimension <= 640;

  return (
    <nav>
      {isMobile ? (
        <div className="mobile-nav">
          <Link to="/">
            <img className="mobile-logo" src="/fscclogolight.png" alt="logo" />
          </Link>
          {/* I got the hamburger icon code snippet here: https://css-tricks.com/snippets/svg/svg-hamburger-menu/ */}
          <svg
            viewBox="0 0 200 160"
            width="40"
            height="40"
            className="hamburger"
            onClick={handleClick}
          >
            <rect width="200" ry="20" height="30"></rect>
            <rect y="50" ry="20" width="200" height="30"></rect>
            <rect y="100" ry="20" width="200" height="30"></rect>
          </svg>
          <div
            className="hamburger-links"
            style={{ display: hamburger && visible ? "flex" : "none" }}
          >
            <Link to="/">Home</Link>
            <AlwaysOptions />
            {user ? <AuthOptions /> : <UnAuthOptions />}
          </div>
        </div>
      ) : (
        <div className="desktop-nav">
          <Link to="/" className="nav-header-container">
            <h1 className="nav-header">full stack coffee co.</h1>
          </Link>
          <img className="desktop-logo" src="/fscclogolight.png" alt="logo" />
          <div className="desktop-console">
            {user && (
              <div className="user-welcome">Welcome, {user.username}!</div>
            )}
            <div className="desktop-links">
              <AlwaysOptions />
              {user ? <AuthOptions /> : <UnAuthOptions />}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
