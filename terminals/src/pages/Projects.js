import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get } from "firebase/database";
import { NavBar } from "../components/NavBar.js";

export var ProjectPage = () => {
  const projectsInDB = setupDatabase();
  return (
    <>
      <NavBar />
    </>
  );
};

function setupDatabase() {
  const appSettings = {
    databaseURL: process.env.REACT_APP_databaseURL,
  };

  const app = initializeApp(appSettings);
  const projects = ref(getDatabase(app), "projects");

  return projects;
}
