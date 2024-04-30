import Draggable from "react-draggable";
import "../css/TaskBar.css";

export var TaskBar = () => {
  var currentApp = "terminal";
  function toggleShow(appId) {
    let isMobile =
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      ) < 600;

    if (isMobile) {
      var oldApp = document.getElementById(currentApp);
      if (appId != currentApp) {
        oldApp.style.display = "none";
      }

      currentApp = appId;
    }
    var app = document.getElementById(appId);
    app.style.display = app.style.display === "none" ? "" : "none";
  }
  return (
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
    </div>
  );
};
