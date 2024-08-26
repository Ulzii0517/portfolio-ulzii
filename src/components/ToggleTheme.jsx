import { useState } from "react";
import { SunIcon } from "./svg/Sunicon";

export const ToggleTheme = () => {
    const [dark, setDark] = useState(false);
   
    const toggleTheme = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
    };
   
    return (
      <div className="flex flex-col items-center justify-center text-black bg-white dark:bg-neutral-900 dark:text-white ">
        {dark ? (
          <button onClick={toggleTheme}>
            <SunIcon />
          </button>
        ) : (
          <button onClick={toggleTheme}>
            <SunIcon />
          </button>
        )}
      </div>
    );
  };