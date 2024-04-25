import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get } from "firebase/database";
import { NavBar } from "../components/NavBar.js";
import { useEffect, useState } from "react";

export var ProjectPage = () => {
  const [projData, setProjData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      var data;
      const appSettings = {
        databaseURL: process.env.REACT_APP_databaseURL,
      };

      const app = initializeApp(appSettings);
      const projects = ref(getDatabase(app), "projects");
      onValue(projects, (snapshot) => {
        data = snapshot.val();
      });
      setProjData(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      {projData.map((item) => {
        return <h2>{item.proj_name}</h2>;
      })}
    </>
  );
};

function getData() {}
