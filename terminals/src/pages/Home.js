import { Terminal } from "../components/Terminal.js";
import { TaskBar } from "../components/TaskBar.js";
import "../css/HomePage.css";
import { Notepad } from "../components/Notepad.js";
import { useRef, useEffect } from "react";

export var HomePage = () => {
  var terminalRef = useRef();
  return (
    <>
      <div className="titlebar-container">
        <TaskBar id="taskbar" />
      </div>
      <div className="content-terminal">
        <Terminal id="Terminal 1" type="main" ref={terminalRef} />
        <Notepad />
      </div>
    </>
  );
};
