import { useRef, useState } from "react";
import "../css/Terminal.css";

export var Terminal = (props) => {
  var terminal_id = props.id;
  var default_dev_info = ">_ ";
  var [text, setText] = useState(default_dev_info);
  var terminal_class = `terminal ${props.type}`;
  var inputRef = useRef("");
  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div className={terminal_class} onClick={focusInput}>
      <div className="titlebar">
        <div id="title-content">{terminal_id}</div>
        <div className="title-buttons">
          <button className="t-btn"></button>
          <button className="t-btn"></button>
          <button className="t-btn"></button>
        </div>
      </div>
      <hr id="gap" />
      <div className="data">
        {text}
        <input type="text" ref={inputRef}></input>
      </div>
    </div>
  );
};
