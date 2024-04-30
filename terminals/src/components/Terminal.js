import { useRef, useState } from "react";
import "../css/Terminal.css";
import Draggable from "react-draggable";

export var Terminal = (props) => {
  const terminal_id = props.id;
  const welcomeText = "sample-welcome-text";
  var terminalRef = useRef();
  const terminal_class = `terminal ${props.type}`;
  const commands = new Map([
    [
      "cat yogesh.jjr",
      "  <h2>Yogesh Jajoria</h2><h4>Tech Fanatic</h4><h4>Programmer (JS, React, Flutter, Python, ... )</h4><h4>Violin Student</h4>",
    ],
    ["ls", "<h5>yogesh.jjr</h5>"],
  ]);
  var inputRef = useRef("");
  var resultRef = useRef();
  function focusInput() {
    inputRef.current.focus();
  }

  function displayResult(e) {
    resultRef.current.innerHTML =
      commands.get(e.currentTarget.value) === undefined
        ? "Command not found"
        : commands.get(e.currentTarget.value);
  }

  function removeApp() {
    terminalRef.current.style.display = "none";
  }
  var Content = (
    <div
      id="terminal"
      className={terminal_class}
      onClick={focusInput}
      ref={terminalRef}
    >
      <div className="titlebar">
        <div id="title-content">{terminal_id}</div>
        <div className="title-buttons">
          <button className="t-btn" onClick={removeApp}></button>
        </div>
      </div>
      <hr id="gap" />
      <div className="data">
        {props.type === "main" ? <></> : welcomeText}
        <input
          type="text"
          ref={inputRef}
          defaultValue="cat yogesh.jjr"
          on
          onChange={(e) => displayResult(e)}
          onEnter
        ></input>
        <p id="result" ref={resultRef}>
          <h2>Yogesh Jajoria</h2>
          <h4>Tech Fanatic</h4>
          <h4>Programmer (JS, React, Flutter, Python, ... )</h4>
          <h4>Violin Student</h4>
        </p>
      </div>
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
