import "../css/NavBar.css";

export var NavBar = () => {
  return (
    <div id="header">
      <div className="title">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="nav">
        <ul id="nav-list">
          <li class="nav-item">Home</li>
          <li class="nav-item">My Projects</li>
          <li class="nav-item">Resume</li>
          <li class="nav-item">Publications</li>
          <li class="nav-item">Contact Me</li>
        </ul>
      </div>
    </div>
  );
};
