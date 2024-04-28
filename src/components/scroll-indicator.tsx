import React, { useState } from "react";

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScrollProgress = () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (window.scrollY / scrollHeight) * 100;
    setScrollProgress(percentage);
  };

  window.addEventListener("scroll", handleScrollProgress);

  return (
    <section
      className="fixed top-28 z-40 h-1 bg-blue-500 lg:top-36"
      style={{ width: scrollProgress + "%" }}
    ></section>
  );
};

export default ScrollIndicator;