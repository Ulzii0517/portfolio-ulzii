import { LocIcon } from "./svg/Location-icon";
import { CatIcon } from "./svg/CatIcon";
import { TwitterIcon } from "./svg/TwitterIcon";
import { UnIcon } from "./svg/UnIcon";

export const Hero = () => {
  return (
    <main className="flex justify-center w-full">
      <div className="container md:flex justify-between py-[96px] px-[80px]">
        <div className="flex flex-col h-auto gap-[48px] ">
          <div className=" flex flex-col items-center justify-center  w-full md:hidden">
            <img
              className="max-w-[384px] max-h-[320px] rounded-[8px] "
              src="./MobilePic.png"
              alt=""
            />
          </div>
          <div className="flex flex-col  max-w-[600px] gap-[8px]">
            <h1 className="text-[60px] font-bold dark:text-white">Hi, I’m Tom 👋</h1>
            <p className="text-[16px] font-normal text-gray-600 dark:text-[#D1D5DB]">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className=" flex flex-col">
            <div className="flex gap-2">
              <LocIcon />
              <p className="text-gray-600 text-base dark:text-[#D1D5DB]">Ulaanbaatar, Mongolia</p>
            </div>
            <div className="flex gap-4">
              <div className="flex-col w-[8px] h-[8px] rounded-[20px] bg-[#10B981] mt-[9px] ml-[7px]"></div>
              <p className="text-gray-600 text-base dark:text-[#D1D5DB]">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <CatIcon />
            <TwitterIcon />
            <UnIcon />
          </div>
        </div>
        <div className=" flex-col items-end justify-center hidden min-w-[500px] md:flex">
          <img
            className=" max-w-[384px] max-h-[320px] "
            src="./ProfilePic.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};
