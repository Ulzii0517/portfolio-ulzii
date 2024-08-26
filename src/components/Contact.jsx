import { BoxIcon } from "./svg/BoxIcon";
import { CatIcon } from "./svg/CatIcon";
import { EtIcon } from "./svg/EtIcon";
import { PhoneIcon } from "./svg/PhoneIcon";
import { TextIcon } from "./svg/TextIcon";
import { TwitterIcon } from "./svg/TwitterIcon";
import { UnIcon } from "./svg/UnIcon";

export const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-12 pt-[96px] px-[80px] md:px-[40px] " id="Contact">
      <div className="flex justify-center items-center w-[122px] h-[28px] rounded-xl py-[4px] px-[20px] bg-gray-200 dark:bg-[#374151]">
        <p className="text-[14px] font-medium text-gray-500 dark:text-[#D1D5DB]">Get in touch</p>
      </div>
      <p className="max-w-xl items-stretch text-[20px] font-normal text-center dark:text-[#D1D5DB]">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div>
        <div className="flex justify-center items-center gap-5 md:gap-10">
          <TextIcon />
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold dark:text-[#F9FAFB]">
            tom@pinecone.mn
          </p>
          <BoxIcon />
        </div>
        <div className="flex justify-center items-center gap-5 md:gap-10">
          <PhoneIcon />
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold dark:text-[#F9FAFB]">
            tom@pinecone.mn
          </p>
          <BoxIcon />
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <p className="text-[16px] font-normal text-gray-600 dark:text-[#D1D5DB]">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center items-center gap-4">
          <CatIcon />
          <TwitterIcon />
          <UnIcon />
        </div>
      </div>

    </div>
  );
};
