import { db } from "../config/firebase.js";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import "../css/Projects.css";

export var PublicationsPage = () => {
  const [pubData, setPubData] = useState([]);
  const pubCollectionRef = collection(db, "publications");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocs(pubCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPubData(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="content-project">
        <div className="card-list right">
          {pubData.map((pub) => (
            <a href={pub.link} target="_blank" rel="noreferrer">
              <div className="card" key={pub.id}>
                <div className="empty-space"></div>
                <div className="card-data">
                  <h3 id="proj-name">{pub.name}</h3>
                  <p id="proj-desc">{pub.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
