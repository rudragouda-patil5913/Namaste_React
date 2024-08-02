import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggeIn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg rounded-lg mx-14 my-6">
      <div className="logo-container">
        <div className="w-36 mb-4 rounded-2xl">
          <img className="logo" src={LOGO_URL} />
        </div>
      </div>
      <div className="nav-items">
        <ul className="flex m-8 text-slate-700">
          <li className="p-2 m-4 border-0 rounded-lg shadow-lg">
            {onlineStatus === true ? "✔" : "🚩"}
          </li>
          <li className="p-2 m-4 border-0 rounded-lg hover:bg-slate-300 shadow-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-4 border-0 rounded-lg hover:bg-slate-300 shadow-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 m-4 border-0 rounded-lg hover:bg-slate-300 shadow-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2 m-4 border-0 rounded-lg hover:bg-slate-300 shadow-lg">
            Cart
          </li>
          <button
            className="p-2 m-4 border-0  hover:bg-slate-300 rounded-lg shadow-lg"
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
