import "./App.css";
import backgroundImg from "./assets/bg.png";

function App() {
  return (
    <>
      <div className="flex flex-col align-middle justify-between h-screen">
        <h1 className="font-bold text-xl p-5">Portfolio</h1>
        <div
          id="content"
          className="flex flex-col items-center text-start *:m-2 w-screen"
        >
          <img src={backgroundImg} alt="" className="w-min justify-center" />
          <div className="*:m-6">
            <h2 className="font-semibold text-5xl ">Yogesh Jajoria</h2>
            <p className="text-md">
              <span>Your friendly neighbourhood</span>
              <br />
              <span>programmer_</span>
            </p>
            <button className="bg-slate-200 font-semibold rounded-md p-1 text-slate-950 w-40">
              My Projects
            </button>
          </div>
        </div>

        <div id="empty"></div>
      </div>
    </>
  );
}

export default App;
