import Intro from "./sections/Intro";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// Mapping section ID to component
const sectionMap = {
  intro: Intro,
  about: About,
  projects: Projects,
  contact: Contact,
};

export default function Section({ id }) {
  const SectionComponent = sectionMap[id];

  if (!SectionComponent) return null;

  return (
    <section
      id={id}
      className="h-screen snap-start flex items-center justify-center bg-gray-100"
    >
      <SectionComponent />
    </section>
  );
}
