import "../css/LinkTab.css";

export var LinkTab = (props) => {
  return (
    <div class="tab">
      <div className="circle"></div>
      <div className="text">
        <p>{props.name}</p>
      </div>
    </div>
  );
};
