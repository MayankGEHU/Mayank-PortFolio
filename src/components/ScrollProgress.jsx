import React, { useState, useEffect } from "react";
import "./ScrollProgress.css"; 

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = document.documentElement.scrollTop;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;
      setScrollWidth(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress-bar" style={{ width: `${scrollWidth}%` }} />
  );
};

export default ScrollProgress;
