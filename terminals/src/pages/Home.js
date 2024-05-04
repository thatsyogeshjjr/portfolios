import { Terminal } from "../components/Terminal.js";
import { TaskBar } from "../components/TaskBar.js";
import { Notepad } from "../components/Notepad.js";
import { useRef } from "react";
import "../css/HomePage.css";

export var HomePage = () => {
  var terminalRef = useRef();
  return (
    <>
      <div className="titlebar-container">{/* <TaskBar id="taskbar" /> */}</div>
      {/* <div className="content-terminal">
        <Terminal id="Terminal 1" type="main" ref={terminalRef} />
        <Notepad />
      </div> */}
      <div className="hero-home">
        <div id="img"></div>
        <div className="info-home">
          <div id="name">
            <h2>YOGESH JAJORIA</h2>

            <div id="titles">
              <h5>Student | Programmer</h5>
            </div>
          </div>

          <div id="about">
            <p>
              As a student and self-taught programmer, my journey in the world
              of technology has been one of continuous growth and exploration.
              From receiving a special award for excellence in computers in 8th
              grade to participating in the Inspire Manak Awards 2019 and
              leading a team to create a documentary for the CBSE IP Final
              Project, I've always strived to push the boundaries of my
              knowledge and creativity. My journey is characterized by a genuine
              curiosity and a humble dedication to honing my skills. I invite
              you to explore my projects and reach out to me to learn more about
              my work.
            </p>
            <button className="cta-btn">Check out my projects</button>
          </div>
        </div>
      </div>
    </>
  );
};
