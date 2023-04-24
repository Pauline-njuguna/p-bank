import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./project.css"; // Import the CSS file for styling
import Navbar from "../Home/navbar";
const Project = () => {
  // Get the navigate function from useNavigate
  const navigate = useNavigate();

  // State to store added projects
  const [projects, setProjects] = useState([]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      title: event.target.title.value,
      description: event.target.description.value,
      id: new Date().getTime(),
    };
    setProjects([...projects, newProject]);
    event.target.title.value = "";
    event.target.description.value = "";
  };

  // Function to handle "Add Project" button click
  const handleAddProject = () => {
    // Add logic to handle "Add Project" button click
    // You can perform any action here, such as displaying a modal, navigating to a different page, etc.
    navigate("/login");
  };

  return (
    <div className="project-form-container">
        <Navbar/>
      <form onSubmit={handleSubmit} className="project-form">
        <h2>Projects</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input-field"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input-field"
        />
        
      </form>
      <button onClick={handleAddProject} className="add-project-button">
        Add Project
      </button>
    </div>
  );
};

export default Project;
