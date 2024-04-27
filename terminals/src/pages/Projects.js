import { initializeApp } from "firebase/app";
import { db } from "../config/firebase.js";
import { getDocs, collection } from "firebase/firestore";
import { NavBar } from "../components/NavBar.js";
import { useEffect, useState } from "react";
import "../css/Projects.css";
import { useRef } from "react";

export var ProjectPage = () => {
  const [projData, setProjData] = useState([]);
  var detailViewRef = useRef();
  var oldProjectId;
  const projectCollectionRef = collection(db, "projects");

  function detailPane(project) {
    if (
      detailViewRef.current.style.display != "none" &&
      project.id === oldProjectId
    ) {
      detailViewRef.current.style.display = "none";
    } else {
      detailViewRef.current.style.display = "";
      oldProjectId = project.id;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocs(projectCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProjData(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="content-project">
        <div className="left" ref={detailViewRef}></div>
        <div className="card-list right">
          {projData.map((project) => (
            <div
              className="card"
              key={project.id}
              onClick={() => {
                detailPane(project);
              }}
            >
              <div className="empty-space"></div>
              <div className="card-data">
                <h3 id="proj-name">{project.name}</h3>
                <p id="proj-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
