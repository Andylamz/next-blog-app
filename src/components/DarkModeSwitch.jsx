"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted &&
        (theme === "dark" ? (
          <div onClick={() => setTheme("light")} className="w-full h-full">
            <FontAwesomeIcon
              icon={faSun}
              className="hover:text-amber-500 cursor-pointer text-[20px] mr-5 transition-colors duration-300 outline-0"
              tabIndex={0}
              aria-label="light mode button"
            />
          </div>
        ) : (
          <div onClick={() => setTheme("dark")} className="w-full h-full">
            <FontAwesomeIcon
              icon={faMoon}
              className="hover:text-yellow-400 cursor-pointer text-[20px] mr-5 transition-colors duration-300 outline-0 "
              tabIndex={0}
              aria-label="dark mode button"
            />
          </div>
        ))}
    </div>
  );
}

export default DarkModeSwitch;
