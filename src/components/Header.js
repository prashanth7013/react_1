import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const dataContext = useContext(UserContext);
  console.log(dataContext);

  const online = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="m-4">Online Status : {online ? "🟢" : "🔴"}</div>
      <div className="flex items-center">
        <ul className="flex space-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>{dataContext.loggedInUser}</li>
          <button
            className=" w-16 px-2 py-1 text-sm text-black rounded"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
