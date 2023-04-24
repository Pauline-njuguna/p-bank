import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./logout.css"; 
const LogoutForm = ({ handleLogout }) => {
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof handleLogout === "function") {
      handleLogout(event);
      navigate("/"); // Redirect to homepage after logout
    }
  };

  return (
    <div className="logout-form-container">
      <div className="form-container">
        <h2>Logout</h2>
        <form onSubmit={handleSubmit} className="logout-form">
          <p>Are you sure you want to logout?</p>
          <button type="submit">Logout</button>
        </form>
      </div>
    </div>
  );
};

export default LogoutForm;
