import React from "react";
import Navbar from './navbar.js'
import './home.css'
const Home = () => {
  return (
    <div>
      <Navbar />{" "}
      <div className="card-container">
        <div className="card">
          <img
            src="../Assets/full-stack-web-.jpg"
            alt="Full stack"
            className="card-image"
          />
          <h3>Full-stack Development</h3>
        </div>
        <div className="card">
          <img
            src="../Assets/Data-science.jpg"
            alt="Data science"
            className="card-image"
          />
          <h3>Data Science</h3>
        </div>
        <div className="card">
          <img
            src="../Assets/Android-development-services.jpg"
            alt="Android development"
            className="card-image"
          />
          <h3>Android Development</h3>
        </div>
        <div className="card">
          <img
            src="../Assets/images.jpg"
            alt="Cybersecurity"
            className="card-image"
          />
          <h3>Cyber Security</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
