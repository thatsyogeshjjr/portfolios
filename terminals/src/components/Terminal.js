import { useState } from "react";
import "../css/Terminal.css";

export var Terminal = (props) => {
  var terminal_id = props.id;
  var text,
    setText = useState("hello world");

  return (
    <div className="terminal">
      <div className="titlebar">
        <div id="title-content">{terminal_id}</div>
        <div className="title-buttons">
          <button className="t-btn green"></button>
          <button className="t-btn orange"></button>
          <button className="t-btn red"></button>
        </div>
      </div>
      <hr id="gap" />
      <div className="data">{text}</div>
    </div>
  );
};
