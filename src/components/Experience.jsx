import { Upwork } from "./svg/UpworkIcon";

export const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-12 py-12 px-4 sm:px-8 lg:px-16 xl:px-32 dark:bg-[#111827]" id="Experience">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center w-auto max-w-xs rounded-xl py-2 px-4 bg-gray-200 dark:bg-[#374151] ">
          <p className="text-sm font-medium text-gray-600 dark:text-[#D1D5DB]">Experience</p>
        </div>
        <p className="text-lg font-normal text-gray-600 text-center dark:text-[#D1D5DB]">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-12 w-full max-w-4xl ">
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full rounded-xl p-6 bg-white shadow-md dark:bg-[#1F2937]">
          <div className="mb-4 sm:mb-0">
            <Upwork />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-lg font-semibold dark:text-[#F9FAFB]">Sr. Frontend Developer</p>
            <ul className="list-disc list-inside text-base font-normal text-gray-600 dark:text-[#D1D5DB]">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <p className="text-base font-normal text-gray-700 mt-4 sm:mt-0 dark:text-[#E5E7EB]">
            Nov 2021 - Present
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full rounded-xl p-6 bg-white shadow-md dark:bg-[#1F2937]">
          <div className="mb-4 sm:mb-0">
            <Upwork />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-lg font-semibold dark:text-[#F9FAFB]">Team Lead</p>
            <ul className="list-disc list-inside text-base font-normal text-gray-600 dark:text-[#D1D5DB]">
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <p className="text-base font-normal text-gray-700 mt-4 sm:mt-0 dark:text-[#E5E7EB]">
            Jul 2017 - Oct 2021
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full rounded-xl p-6 bg-white shadow-md dark:bg-[#1F2937]">
          <div className="mb-4 sm:mb-0">
            <Upwork />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-lg font-semibold dark:text-[#F9FAFB]">Full Stack Developer</p>
            <ul className="list-disc list-inside text-base font-normal text-gray-600 dark:text-[#D1D5DB]">
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <p className="text-base font-normal text-gray-700 mt-4 sm:mt-0 dark:text-[#E5E7EB]">
            Jul 2017 - Oct 2021
          </p>
        </div>
      </div>
    </div>
  );
};
