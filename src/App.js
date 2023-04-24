import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cohorts from "./components/Cohort/cohort"; 
import CohortForm from "./components/CohortForm/cohortform";
import Home from "./components/Home/home";
import AddProject from "./components/Addproject/addproject";
import Projects from "./components/Project/project";
import ProjectDetails from "./components/Single/projectdets";
import Login from "./components/Login/login";
import LogoutForm from "./components/Logout/logout";
import Contact from "./components/Contact/contact";
function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your routes with the Router component */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/cohortform" element={<CohortForm />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectdets" element={<ProjectDetails />} />
        <Route path="/cohorts" element={<Cohorts />} />{" "}
        <Route path="/logout" element={<LogoutForm />} />
      </Routes>
    </Router>
  );
}

export default App;
