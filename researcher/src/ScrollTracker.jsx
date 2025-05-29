import React, { useEffect, useState } from "react";

export default function ScrollTracker({ sectionIds }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {sectionIds.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`transition-all duration-300 bg-black rounded-sm ${
            active === id ? "w-6 h-0.5" : "w-3 h-0.5 opacity-60"
          }`}
        />
      ))}
    </div>
  );
}
