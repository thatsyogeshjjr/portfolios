import { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import "../css/Calculator.css";
import "../css/Terminal.css";

export var Calculator = () => {
  var terminalRef = useRef();
  var CalcDisplayRef = useRef();

  function removeApp() {
    terminalRef.current.style.display = "none";
  }

  function handleClick(val) {
    if ("1234567890+-/×√".includes(val)) {
      if (CalcDisplayRef.current.innerHTML === "0") {
        CalcDisplayRef.current.innerHTML = val;
      } else {
        CalcDisplayRef.current.innerHTML =
          CalcDisplayRef.current.innerHTML + val;
      }
    } else if (val === "²") {
      CalcDisplayRef.current.innerHTML =
        parseFloat(CalcDisplayRef.current.innerHTML) ** 2;
    } else if (val === "⌫") {
      var newVal = CalcDisplayRef.current.innerHTML.slice(
        0,
        CalcDisplayRef.current.innerHTML.length - 1
      );
      if (newVal === "") {
        CalcDisplayRef.current.innerHTML = "0";
      } else {
        CalcDisplayRef.current.innerHTML = newVal;
      }
    } else if (val === "clear") {
      CalcDisplayRef.current.innerHTML = "0";
    } else if (val === "=") {
      CalcDisplayRef.current.innerHTML = eval(CalcDisplayRef.current.innerHTML);
    }
  }
  useEffect(() => {
    CalcDisplayRef.current.innerHTML = "0";
  }, [CalcDisplayRef]);

  return (
    <Draggable>
      <div
        id="calculator"
        className="terminal"
        ref={terminalRef}
        style={{ display: "" }}
      >
        <div className="titlebar">
          <div id="title-content">Calculator</div>
          <div className="title-buttons">
            <button className="t-btn" onClick={removeApp}></button>
          </div>
        </div>
        <hr id="gap" />
        <div className="data notepad">
          <div id="display" name="textData" ref={CalcDisplayRef}></div>
          <table>
            <tr>
              <td onClick={() => handleClick("%")}>%</td>
              <td onClick={() => handleClick("clear")} colSpan={2}>
                Clear
              </td>
              <td onClick={() => handleClick("⌫")} id="backs">
                ⌫
              </td>
            </tr>
            <tr>
              <td onClick={() => handleClick("1")}>1/x</td>
              <td onClick={() => handleClick("²")}>x²</td>
              <td onClick={() => handleClick("√")}>√</td>
              <td onClick={() => handleClick("/")}>/</td>
            </tr>
            <tr>
              <td onClick={() => handleClick("1")}>1</td>
              <td onClick={() => handleClick("2")}>2</td>
              <td onClick={() => handleClick("3")}>3</td>
              <td onClick={() => handleClick("×")}>×</td>
            </tr>
            <tr>
              <td onClick={() => handleClick("4")}>4</td>
              <td onClick={() => handleClick("5")}>5</td>
              <td onClick={() => handleClick("6")}>6</td>
              <td onClick={() => handleClick("-")}>-</td>
            </tr>
            <tr>
              <td onClick={() => handleClick("7")}>7</td>
              <td onClick={() => handleClick("8")}>8</td>
              <td onClick={() => handleClick("9")}>9</td>
              <td onClick={() => handleClick("+")}>+</td>
            </tr>
            <tr>
              <td onClick={() => handleClick("0")}>0</td>
              <td onClick={() => handleClick(".")}>.</td>
              <td id="equal" colSpan={2} onClick={() => handleClick("=")}>
                =
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Draggable>
  );
};
