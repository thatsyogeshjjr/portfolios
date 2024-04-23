import { NavBar } from "../components/NavBar.js";
import { LinkTab } from "../components/LinkTab.js";
import "../css/Contact.css";

export var ContactPage = () => {
  return (
    <>
      <NavBar />
      <div className="content">
        <div className="left">
          <img
            src={process.env.PUBLIC_URL + "/char.png"}
            alt="Anime character waving/ on phone TK"
          />
        </div>
        <div className="right">
          <LinkTab name="Email" />
          <LinkTab name="LinkedIn" />
          <LinkTab name="Github" />
          <LinkTab name="Twitter" />
        </div>
      </div>
    </>
  );
};
