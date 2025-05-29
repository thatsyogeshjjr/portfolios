import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Typewriter({ titles, speed = 100, pause = 1000 }) {
  const [index, setIndex] = useState(0); // Which title
  const [subIndex, setSubIndex] = useState(0); // Character typing
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (subIndex < current.length) {
            setSubIndex((prev) => prev + 1);
          } else {
            setDeleting(true);
          }
        } else {
          if (subIndex > 0) {
            setSubIndex((prev) => prev - 1);
          } else {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, titles, speed]);

  return (
    <motion.div
      className="text-2xl font-semibold whitespace-nowrap text-black "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {titles[index].substring(0, subIndex)}
      <motion.span
        className="inline-block w-1 bg-black ml-1"
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </motion.div>
  );
}
