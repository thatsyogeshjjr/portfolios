import "./App.css";
import backgroundImg from "./assets/bg.png";

function App() {
  return (
    <>
      <div className="flex-col justify-center items-center">
        <h1 className="font-bold">Portfolio</h1>
        <img src={backgroundImg} alt="" />
        <h2 className="font-xl">Yogesh Jajoria</h2>
        <p>Your friendly neighbourhood programmer.</p>
        <button>My Projects</button>
      </div>
    </>
  );
}

export default App;
