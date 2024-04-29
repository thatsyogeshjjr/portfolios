import Draggable from "react-draggable";
import "../css/TaskBar.css";

export var TaskBar = (props) => {
  // in props
  // terminalRef, NotepadRef, CalcRef, Game1Ref, Game2Ref
  console.log("hello!!!!!");
  console.log(props);

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
          ±
        </div>
        <div id="calc-icon" className="icon">
          G
        </div>
      </div>
    </Draggable>
  );
};
