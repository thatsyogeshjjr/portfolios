import "./css/App.css";
import { NavBar } from "./components/NavBar.js";
import { ContactPage } from "./pages/Contact.js";
import { HomePage } from "./pages/Home.js";
import { ProjectPage } from "./pages/Projects.js";
import { PublicationsPage } from "./pages/Publications.js";
import { ResumePage } from "./pages/Resume.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="publications" element={<PublicationsPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
