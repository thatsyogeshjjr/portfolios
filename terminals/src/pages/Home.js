import { NavBar } from "../components/NavBar.js";
import { Terminal } from "../components/Terminal.js";
import "../css/HomePage.css";

export var HomePage = () => {
  return (
    <>
      <div className="content-terminal">
        <Terminal id="Terminal 2" type="bg" />
        <Terminal id="Terminal 1" type="main" />
      </div>
    </>
  );
};
