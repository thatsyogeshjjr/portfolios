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
      detailViewRef.current.innerHTML = `
      <h1 id='project-name-desc'>${project.name}</h1>
      <p id='proj-sdesc-desc'>${project.desc}</p>
      <br/>
       <div class="weblinks">
         ${
           "" === project.website
             ? ""
             : `<div class='info-card link'><img src="/link_icon.png"></img><a href=${project.website} target="_blank">Website</a></div>`
         }
         <div class='info-card link'>${
           "" === project.github
             ? "Not available"
             : `<img src="/link_icon.png"></img><a href=${project.github} target="_blank">Github Repo</a>`
         }</div>
       </div>
       <br/>
     </tr>
  </tbody>

        <div class='image-section'>
        
        <img src=${
          project.images == undefined
            ? ""
            : project.images[0] == undefined
            ? ""
            : project.images[0]
        }></img>
        <img src=${
          project.images == undefined
            ? ""
            : project.images[1] == undefined
            ? ""
            : project.images[1]
        }></img>
        <img src=${
          project.images == undefined
            ? ""
            : project.images[2] == undefined
            ? ""
            : project.images[2]
        }></img>
        <img src=${
          project.images == undefined
            ? ""
            : project.images[3] == undefined
            ? ""
            : project.images[3]
        }></img>
        <img src=${
          project.images == undefined
            ? ""
            : project.images[4] == undefined
            ? ""
            : project.images[4]
        }></img>
        <img src=${
          project.images == undefined
            ? ""
            : project.images[5] == undefined
            ? ""
            : project.images[5]
        }></img>
        </div>
</table>
<br/>
<table>
   <tbody>
     <tr>
       <td class='info-card'>Role</td>
       <td>${project.role}</td>
     </tr>
     <tr><td></td></tr>
     <tr>
       <td class='info-card'>Tech</td>
       <td>${project.tech}</td>
     </tr>
     <tr>
     </tr>
  </tbody>
</table>

<h3 class='info-card'>About</h3>
<p>${project.about}</p>
      `;
      detailViewRef.current.scrollTop = 0;
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
    const hideLeftPane = () => {
      detailViewRef.current.style.display = "none";
    };
    hideLeftPane();
    fetchData();
  }, []);

  return (
    <>
      <div className="content-project">
        <div id="leftView" className="left" ref={detailViewRef}></div>
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
