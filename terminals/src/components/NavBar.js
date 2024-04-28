import "../css/NavBar.css";
import { Outlet, Link } from "react-router-dom";

export var NavBar = () => {
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="title">
            <h1>PORTFOLIO</h1>
          </div>
          <div className="nav">
            <ul id="nav-list">
              <li class="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/projects">My Projects</Link>
              </li>
              <li class="nav-item">
                <Link to="/resume">Resume</Link>
              </li>
              <li class="nav-item">
                <Link to="/publications">Publications</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
