import { Link } from "react-router-dom";
import "./App.css";
import backgroundImg from "./assets/bg.png";
import GithubIcon from "./assets/github.png";
import LinkedInIcon from "./assets/linkedIn.png";
import TwitterIcon from "./assets/twitter.png";

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
            <div id="icons" className="flex justify-center gap-4 h-6 *:*:h-7">
              <a href="https://github.com/thatsyogeshjjr" target="_blank">
                <img src={GithubIcon} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/yogesh-jjr/" target="_blank">
                <img src={LinkedInIcon} alt="" />
              </a>
              <a href="https://twitter.com/thatsyogeshjjr" target="_blank">
                <img src={TwitterIcon} alt="" />
              </a>
            </div>
            <h2 className="font-semibold text-5xl ">Yogesh Jajoria</h2>
            <p className="text-md">
              <span>Your friendly neighbourhood</span>
              <br />
              <span>programmer</span>
              <span className="animate-pulse">_</span>
            </p>
            <Link to="/projects">
              <button className="bg-slate-200 font-semibold rounded-md p-1 text-slate-950 w-40">
                My Projects
              </button>
            </Link>
          </div>
        </div>

        <div id="empty"></div>
      </div>
    </>
  );
}

export default App;
