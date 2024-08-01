import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggeIn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <div className="w-36 mb-4 rounded-2xl">
          <img className="logo" src={LOGO_URL} />
        </div>
      </div>
      <div className="nav-items">
        <ul className="flex m-8 text-slate-700 ">
          <li className="p-2 m-4 border-2 rounded-md">
            {onlineStatus === true ? "✔" : "🚩"}
          </li>
          <li className="p-2 m-4 border-2 rounded-md hover:bg-slate-300 ">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-4 border-2 rounded-md hover:bg-slate-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 m-4 border-2 rounded-md hover:bg-slate-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2 m-4 border-2 rounded-md hover:bg-slate-300">
            Cart
          </li>
          <button
            className="p-2 m-4 bg-slate-300 rounded-md"
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
