import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SkillBox } from "@/components/SkillBox";
import {
  JavascriptIcon,
  ReactIcon,
  TypescriptIcon,
  NextjsIcon,
  NestjsIcon,
  SocketioIcon,
  NodejsIcon,
  ExpressjsIcon,
} from "@/components/svg/IconOne";
import {
  CypressIcon,
  FigmaIcon,
  GitIcon,
  MongodbIcon,
  PostgresqlIcon,
  SassIcon,
  StorybookIcon,
  TailwindcssIcon,
} from "@/components/svg/IconTwo";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Header />
      <Hero />
      <AboutMe />
      <div className="w-full flex flex-col justify-center gap-12 items-center py-24 px-8 md:py-32 md:px-16">
        <div className="container flex flex-col gap-8 px-4 md:px-16">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center items-center w-20 h-8 rounded-xl py-1 px-4 bg-gray-200 dark:bg-[#374151] dark:text-[#D1D5DB]">
              Skills
            </div>
            <p className="text-lg md:text-xl font-normal text-center dark:text-[#D1D5DB]">
              The skills, tools, and technologies I am really good at:
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-6 justify-items-center lg:grid-cols-8 lg:grid-rows-2 gap-6 md:gap-12 dark:text-[#D1D5DB]">
            <SkillBox iconComponents={<JavascriptIcon />} text="Javascript" />
            <SkillBox iconComponents={<TypescriptIcon />} text="Typescript" />
            <SkillBox iconComponents={<ReactIcon />} text="React" />
            <SkillBox iconComponents={<NextjsIcon />} text="Next.js" />
            <SkillBox iconComponents={<ExpressjsIcon />} text="Express.js" />
            <SkillBox iconComponents={<NodejsIcon />} text="Node.js" />
            <SkillBox iconComponents={<NestjsIcon />} text="Nest.js" />
            <SkillBox iconComponents={<SocketioIcon />} text="Socket.io" />
            <SkillBox iconComponents={<PostgresqlIcon />} text="PostgreSQL" />
            <SkillBox iconComponents={<MongodbIcon />} text="MongoDB" />
            <SkillBox iconComponents={<SassIcon />} text="Sass/Scss" />
            <SkillBox iconComponents={<TailwindcssIcon />} text="Tailwindcss" />
            <SkillBox iconComponents={<FigmaIcon />} text="Figma" />
            <SkillBox iconComponents={<CypressIcon />} text="Cypress" />
            <SkillBox iconComponents={<StorybookIcon />} text="Storybook" />
            <SkillBox iconComponents={<GitIcon />} text="Git" />
          </div>
        </div>
      </div>

      <div className="w-full h-max bg-gray-100">
        <Experience />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
