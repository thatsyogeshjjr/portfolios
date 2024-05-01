import { useRef, useState } from "react";
import "../css/Terminal.css";
import Draggable from "react-draggable";

export var ConsoleGame = (props) => {
  var gameRef = useRef();
  function removeApp() {
    gameRef.current.style.display = "none";
  }
  var Content = (
    <div id="consoleGame" className="main terminal" ref={gameRef}>
      <div className="titlebar">
        <div id="title-content">Console Game</div>
        <div className="title-buttons">
          <button className="t-btn" onClick={removeApp}></button>
        </div>
      </div>
      <hr id="gap" />
      <div className="data"></div>
    </div>
  );
  let isMobile =
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ) < 600;
  function displayContent() {
    if (!isMobile) {
      return <Draggable>{Content}</Draggable>;
    } else if (isMobile) {
      return Content;
    }
  }
  return displayContent();
};
