export var ProjectCard = (props) => {
  /*
    
    // Return Card UI for Project Card
    
    Required Params:
    * link: link to project website / github
    * name: name of the project
    * desc: short description of the project
    * bgImg: background image for the project card


  */

  return (
    <>
      <a href={props.link} target="_blank">
        <div
          // style={{ backgroundImage: `url("${props.bgImg}")` }}
          className="border rounded-lg border-solid border-white w-80 h-40 hover:border-slate-400 hover:text-slate-400 *:m-2"
        >
          <div id="content" className="flex flex-col">
            <h2 className="font-bold text-xl p-6 text-center">{props.name}</h2>
            <p className="text-md text-start mb-0 p-3">{props.desc}</p>
          </div>
        </div>
      </a>
    </>
  );
};
