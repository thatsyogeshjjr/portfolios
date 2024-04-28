import { Link } from "react-router-dom";
import "../css/Resume.css";

export var ResumePage = () => {
  return (
    <div className="resume-content">
      <h1>coming soon... </h1>
      <h4>
        Check out my <Link to="../projects">projects</Link> or{" "}
        <Link to="../contact">LinkedIn</Link> in that time...
      </h4>
    </div>
  );
};
