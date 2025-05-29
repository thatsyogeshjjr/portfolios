import "./App.css";
import Section from "./Section";
import ScrollTracker from "./ScrollTracker";

const sections = ["intro", "about", "projects", "contact"];

function App() {
  return (
    <div className="relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {sections.map((s, i) => (
        <Section key={i} id={s} />
      ))}
      <ScrollTracker sectionIds={sections} />
    </div>
  );
}

export default App;
