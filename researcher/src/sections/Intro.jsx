import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Typewriter from "../components/Typewriter";

export default function Home() {
  const data = {
    name: "Yogesh Jajoria",
    titles: [
      "Robotics Engineer.",
      "AI/ML Tinkerer.",
      "Full Stack Developer.",
      "Researcher.",
    ],
    image: "https://avatars.githubusercontent.com/u/69074180?v=4",
    description:
      "I'm an undergrad persuing Robotics and AI. Researching biped dynamics and while making my processor question it's existence everytime I open a terminal.",
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [data.titles.length]);

  return (
    <div className="home w-screen h-screen flex justify-center items-center">
      <div className="home_container flex flex-row justify-between gap-8">
        <div className="home_left flex flex-col">
          <h1 className="text-5xl font-bold">{data.name}</h1>

          <Typewriter titles={data.titles} speed={120} pause={1200} />

          <p className="mt-4 max-w-md">{data.description}</p>
        </div>

        <div className="home_right w-48 h-48 overflow-hidden rounded-full">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
