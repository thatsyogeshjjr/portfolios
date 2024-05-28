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
          style={{ backgroundImage: `url("${props.bgImg}")` }}
          className="border-solid hover:border-double border-slate-50"
        >
          <h2>{props.name}</h2>
          <p>{props.desc}</p>
        </div>
      </a>
    </>
  );
};
