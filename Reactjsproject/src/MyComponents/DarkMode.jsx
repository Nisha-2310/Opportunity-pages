import React, { useState, useEffect } from "react";

import DarkPng from "../assets/darkmode.png";
import LightPng from "../assets/lightmode.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative w-20 h-12">
      {theme === "light" ? (
        <img
          src={LightPng}
          alt="Light Mode"
          className="w-full h-full cursor-pointer drop-shadow transition-all duration-300"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <img
          src={DarkPng}
          alt="Dark Mode"
          className="w-full h-full cursor-pointer drop-shadow transition-all duration-300"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default DarkMode;
