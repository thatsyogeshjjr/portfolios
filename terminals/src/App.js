import "./css/App.css";
import { NavBar } from "./components/NavBar.js";
import { Terminal } from "./components/Terminal.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Terminal id="Terminal 1" />
    </div>
  );
}

export default App;
