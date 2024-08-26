import { HeadButton } from "./svg/HeadButton";
import { SunIcon } from "./svg/Sunicon";
import { useState, useEffect } from "react";
import { ToggleTheme } from "./ToggleTheme";
import { Menu } from "./Menu";
import Link from "next/link";


export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const scrollToBottom = (page) => {
    console.log(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  
  return (
    <main className="flex justify-center w-full dark:bg-black">
      <div className="container justify-center">
        <div className="flex w-full  justify-between gap-2 py-[16px] px-[80px]">
          <div className="text-[30px] dark:text-white">
            <strong>TOM</strong>
          </div>
          <div className="hidden md:flex gap-4 pt-[10px] dark:text-[#D1D5DB]">
            <p onClick={() => scrollToBottom('aboutMe')}>About</p>
            <p onClick={() => scrollToBottom('Work')}>Work</p>
            <p onClick={() => scrollToBottom('Experience')}>Testimonials</p>
            <p onClick={() => scrollToBottom('Contact')}>Contact</p>
            <div className="mb-3"> <ToggleTheme/> </div>
            <button className="flex justify-center items-center gap-2 w-[104px] h-[24px] py-[6px] px-[16px] rounded-xl bg-gray-900 text-white text-[11px] dark:bg-white dark:text-black">
              Download CV
            </button>
          </div>
          <button onClick={handleMenu} className="block md:hidden">
            <HeadButton />
          </button>
          <Menu handleMenu={handleMenu} isOpenMenu={isOpenMenu} />
          
        </div>
      </div>
    </main>
  );
};



