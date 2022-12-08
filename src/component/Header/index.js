import React from "react";
import "./style.css";
import logo from "../../images/boare_ai-logo_white.jpg";

export default function index({ setIsLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    setIsLoggedIn(false);
  };
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <button className="logout-container" onClick={() => handleLogout()}>
        Logout
        <label onClick={() => handleLogout()} title="Logout">
          <i className="fa fa-sign-out" aria-hidden="true"></i> 
          </label>     
      </button>
    </div>
  );
}
