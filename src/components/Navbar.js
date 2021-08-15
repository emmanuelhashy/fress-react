import React, { useRef } from "react";


const Navbar = () => {
  const mainNav = useRef(null);
  const navBarToggle = useRef(null);

  const onNavBarToggleClick = () => {
    mainNav.current.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <span
        className="navbar-toggle"
        ref={navBarToggle}
        onClick={onNavBarToggleClick}
      >
        <i className="fas fa-bars"></i>
      </span>
      <a href="/" className="logo">
        <img src={"../images/Vector.png"} alt="Fress logo" />
      </a>
      <ul className="main-nav" ref={mainNav}>
        <li>
          <a href="/" className="nav-links">
            Become a Cook
          </a>
        </li>
        <li>
          <a href="/" className="nav-links">
            Join as Foodie
          </a>
        </li>
        <li>
          <a href="/" className="nav-links login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
