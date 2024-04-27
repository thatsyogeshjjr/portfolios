import { initializeApp } from "firebase/app";
import { db } from "../config/firebase.js";
import { getDocs, collection } from "firebase/firestore";
import { NavBar } from "../components/NavBar.js";
import { useEffect, useState } from "react";
import "../css/Projects.css";

export var ProjectPage = () => {
  const [projData, setProjData] = useState([]);
  const projectCollectionRef = collection(db, "projects");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocs(projectCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
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
      <div className="card-list">
        {projData.map((project) => (
          <div className="card" key={project.id}>
            <div className="empty-space"></div>
            <div className="card-data">
              <h3 id="proj-name">{project.name}</h3>
              <p id="proj-desc">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
