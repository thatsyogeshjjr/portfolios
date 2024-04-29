import { useEffect, useRef, useState } from "react";
import "../css/Terminal.css";
import Draggable from "react-draggable";

export var Notepad = () => {
  var terminalRef = useRef();
  var textDataRef = useRef();

  function removeApp() {
    terminalRef.current.style.display = "none";
  }

  function saveTextData() {
    localStorage.setItem("NotepadData", textDataRef.current.value);
  }

  function setTextData() {
    textDataRef.current.value = localStorage.getItem("NotepadData");
    console.log(localStorage.getItem("NotepadData"));
  }

  useEffect(() => {
    setTextData();
  }, [textDataRef]);
  return (
    <Draggable>
      <div id="notepad" className="terminal" ref={terminalRef}>
        <div className="titlebar">
          <div id="title-content">Notepad</div>
          <div className="title-buttons">
            <button className="t-btn" onClick={removeApp}></button>
          </div>
        </div>
        <hr id="gap" />
        <div className="data notepad">
          <button id="save-btn" onClick={saveTextData}>
            Save
          </button>
          <textarea
            name="textData"
            ref={textDataRef}
            id="textData"
            cols="46"
            rows="23"
          ></textarea>
        </div>
      </div>
    </Draggable>
  );
};
