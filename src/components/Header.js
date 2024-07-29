import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggeIn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img className="logo" src={LOGO_URL} />
        </div>
      </div>
      <div className="nav-items">
        <ul className="nav-items-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              isLoggedIn === "Login"
                ? setIsLoggeIn("Logout")
                : setIsLoggeIn("Login");
            }}>
            {isLoggedIn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
