import { NavBar } from "../components/NavBar.js";
import { LinkTab } from "../components/LinkTab.js";
import "../css/Contact.css";

export var ContactPage = () => {
  return (
    <>
      <div className="content">
        <div className="contact-left fade-in">
          <img
            src={process.env.PUBLIC_URL + "/char.png"}
            alt="Anime character waving/ on phone TK"
          />
        </div>
        <div className="contact-right move-up">
          <a href="mailto:yogeshjajoria2019@gmail.com">
            <LinkTab name="Email" />
          </a>
          <a href="https://www.linkedin.com/in/yogesh-jjr/" target="_blank">
            <LinkTab name="LinkedIn" />
          </a>
          <a href="https://github.com/thatsyogeshjjr" target="_blank">
            <LinkTab name="Github" />
          </a>
          <a href="https://twitter.com/thatsyogeshjjr" target="_blank">
            <LinkTab name="Twitter" />
          </a>
        </div>
      </div>
    </>
  );
};
