import { EtIcon } from "./svg/EtIcon";

export const Footer = () => {
    return (
        <div className="flex justify-center items-center py-[24px] dark:bg-[#111827]">
        <EtIcon />
        <p className="text-[14px]  font-normal text-gray-600 dark:text-[#D1D5DB]">
          2024 | Greetings with ❤️️ from Ulaanbaatar
        </p>
      </div>
    );
};