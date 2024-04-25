import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getDatabase,
  ref,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { NavBar } from "../components/NavBar.js";

export var ProjectPage = () => {
  setupDatabase();
  return <NavBar />;
};

function setupDatabase() {
  const appSettings = {
    databaseURL: process.env.REACT_APP_databaseURL,
  };

  const app = initializeApp(appSettings);
  const database = getDatabase(app);
  const projects = ref(database, "projects");

  console.log(projects);
}
