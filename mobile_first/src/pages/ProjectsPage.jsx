import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard.jsx";

export var ProjectsPage = () => {
  return (
    <>
      <div className="flex flex-col align-middle justify-between h-screen">
        <div className="flex">
          <Link to="/">
            <h1 className="font-bold text-xl pr-0 p-5">Portfolio</h1>
          </Link>
          <p className="font-bold text-lg pl-2 p-5 text-slate-400">/projects</p>
        </div>
        <div className="flex flex-col items-center w-screen gap-8 pt-20">
          <ProjectCard
            link="https://thatsyogeshjjr.github.io/keylogger/"
            name="Keylogger"
            desc="An application to understand standard keyloggers and their functions."
            bgImg=""
          />
          <ProjectCard
            link="https://github.com/thatsyogeshjjr/socket_projects"
            name="PomoFocus"
            desc="A Pomodoro Timer app built in ElectronJS."
            bgImg=""
          />
          <ProjectCard
            link="https://github.com/thatsyogeshjjr/socket_projects"
            name="Socket Adventures"
            desc="Exploring networking capabilities of python with sockets."
            bgImg=""
          />
          <ProjectCard
            link="https://github.com/thatsyogeshjjr/create-cmd"
            name="Create cmd"
            desc="Automate your gitub repository creation with powershell."
            bgImg=""
          />
        </div>

        <div id="empty"></div>
      </div>
    </>
  );
};
