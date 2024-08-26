import { SunIcon } from "./svg/Sunicon";
import { Xicon } from "./svg/Xicon";
import { ToggleTheme } from "./ToggleTheme";

export const Menu = ({ handleMenu, isOpenMenu }) => {
  const scrollToBottom = (page) => {
    console.log(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
    return (
      <div className={`absolute  transition-all duration-500  ease-in-out z-50 ${ isOpenMenu ? "right-0" : "right-[-100%]" }
      flex flex-col items-start shrink-0 w-full h-full bg-white rounded-md dark:bg-black dark:text-white `}>
        <div className="flex justify-between items-start self-stretch py-[16px] px-[16px]">
            <p className="text-[30px] font-normal text-center">Tom</p>
            <div onClick={handleMenu}><Xicon/></div>
        </div>
        <div className="flex flex-col gap-4 py-[16px] px-[16px]">
            <p onClick={() => scrollToBottom('aboutMe')}>About</p>
            <p onClick={() => scrollToBottom('Work')}>Work</p>
            <p onClick={() => scrollToBottom('Experience')}>Testimonials</p>
            <p onClick={() => scrollToBottom('Contact')}>Contact</p>
        </div>
        <div className="flex flex-col justify-between py-[16px] px-[16px] gap-4">
          <div className="flex justify-between">
            <p className="text-[16px] font-normal text-gray-600">Switch Theme</p>
            <div><ToggleTheme/></div>
            </div>
            <button className=" w-full flex justify-center items-center gap-2 py-[6px] px-[16px] bg-gray-900 text-gray-50 rounded-xl">Download CV</button>
            
        </div>

      </div>
    );
  };