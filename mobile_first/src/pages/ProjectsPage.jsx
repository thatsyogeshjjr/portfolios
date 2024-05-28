import { ProjectCard } from "../components/ProjectCard.jsx";

export var ProjectsPage = () => {
  return (
    <>
      <div className="flex flex-col align-middle justify-between h-screen">
        <div className="flex">
          <h1 className="font-bold text-xl pr-0 p-5">Portfolio</h1>
          <p className="font-bold text-lg pl-2 p-5 text-slate-400">/projects</p>
        </div>
        <div>
          <ProjectCard
            link="https://thatsyogeshjjr.github.io/keylogger/"
            name="Keylogger"
            desc="A complex-sish keylogger application"
            bgImg=""
          />
        </div>

        <div id="empty"></div>
      </div>
    </>
  );
};
