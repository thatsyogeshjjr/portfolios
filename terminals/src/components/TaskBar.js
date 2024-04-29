import Draggable from "react-draggable";
import "../css/TaskBar.css";

export var TaskBar = () => {
  function toggleShow(appId) {
    var app = document.getElementById(appId);
    app.style.display = app.style.display === "none" ? "" : "none";
  }
  return (
    <Draggable>
      <div id="taskbar">
        <div
          id="notepad-icon"
          className="icon"
          onClick={() => {
            toggleShow("notepad");
          }}
        >
          N
        </div>
        <div
          id="terminal-icon"
          className="icon"
          onClick={() => {
            toggleShow("terminal");
          }}
        >
          {">"}_
        </div>
        <div id="web-browser-icon" className="icon">
          Web
        </div>
        <div id="game-icon" className="icon">
          G
        </div>
        <div
          id="calc-icon"
          className="icon"
          onClick={() => {
            toggleShow("calculator");
          }}
        >
          ±
        </div>
      </div>
    </Draggable>
  );
};
