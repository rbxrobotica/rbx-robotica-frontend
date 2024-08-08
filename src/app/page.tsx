"use client";
import { NavigationMenuBar } from "@/components/system/Navigation/navbar";
import { SheetPainel } from "@/components/system/Sites-description/sheet";
import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

// Definição das props para BackgroundPattern
interface BackgroundPatternProps {
  position: string;
  bottom?: string;
  right?: string;
  left?: string;
}

// Componente BackgroundPattern
const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  position,
  bottom,
  right,
  left,
}) => (
  <div
    className={`z-[-1] flex absolute ${position} ${bottom || ""} ${
      right || ""
    } ${left || ""} place-items-center`}
  >
    <div className="absolute h-[300px] w-full -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:via-[#00FFFF] dark:opacity-10 sm:w-[480px] lg:h-[360px]" />
    <div className="absolute -z-20 h-[180px] w-full translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0e7272] dark:opacity-40 sm:w-[240px]" />
  </div>
);

interface ProjectCardProps {
  imgSrc?: string;
  logoSrc?: string;
  title: string;
  description: string; // Add description here
  link: string;
}
const handleClick = (link: string) => () => {
  window.open(link, "_blank", "noopener,noreferrer");
};
// Componente ProjectCard
const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  logoSrc,
  title,
  description, // Add description here
  link
}) => (
  <div className="h-auto bg-gray-400 p-5 space-y-5 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    {logoSrc && (
      <div className="flex justify-center items-center space-x-3">
        <Image
          src={logoSrc}
          className="bg-gray-400 shadow-sm rounded-full p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
          height={70}
          width={70}
          priority
          alt={`Logo of ${title}`}
          quality={100}
        />
        <p className="text-base font-semibold">{title}</p>
      </div>
    )}
    {imgSrc && (
      <>
        <Image
          src={imgSrc}
          height={500}
          className="rounded-md drop-shadow-2xl"
          width={500}
          priority
          alt={`Screenshot of ${title}`}
          quality={100}
        />
        <div className="flex justify-between items-center mt-4">
          <SheetPainel description={description} />{" "}
          {/* Pass description here */}
          <Button variant="link" onClick={handleClick(link)}>
            <SquareArrowOutUpRight className="mr-2 h-4 w-4" /> Visitar site
          </Button>
        </div>
      </>
    )}
  </div>
);

const projects = [
  {
    imgSrc: "/cromo-financiamento-tela.png",
    logoSrc:
      "https://www.cromofinanciamentos.com.br/logo-transparent-background.png",
    title: "Cromo Financiamentos",
    description: "Description of Cromo Financiamentos",
    link: "https://www.cromofinanciamentos.com.br"
  },
  {
    imgSrc: "/cromo-financiamento-tela.png",
    logoSrc:
      "https://www.cromofinanciamentos.com.br/logo-transparent-background.png",
    title: "Cromo Financiamentos",
    description: "Description of Cromo Financiamentos",
    link: "https://www.cromofinanciamentos.com.br"
  },
  {
    imgSrc: "/cromo-financiamento-tela.png",
    logoSrc:
      "https://www.cromofinanciamentos.com.br/logo-transparent-background.png",
    title: "Cromo Financiamentos",
    description: "Description of Cromo Financiamentos",
    link: "https://www.cromofinanciamentos.com.br"
  },
  {
    imgSrc: "/cromo-financiamento-tela.png",
    logoSrc:
      "https://www.cromofinanciamentos.com.br/logo-transparent-background.png",
    title: "Cromo Financiamentos",
    description: "Description of Cromo Financiamentos",
    link: "https://www.cromofinanciamentos.com.br"
  },
  {
    imgSrc: "/cromo-financiamento-tela.png",
    logoSrc:
      "https://www.cromofinanciamentos.com.br/logo-transparent-background.png",
    title: "Cromo Financiamentos",
    description: "Description of Cromo Financiamentos",
    link: "https://www.cromofinanciamentos.com.br"
  },
  {
    imgSrc: "/cromo-financiamento-tela.png",
    logoSrc:
      "https://www.cromofinanciamentos.com.br/logo-transparent-background.png",
    title: "Cromo Financiamentos",
    description: "Description of Cromo Financiamentos",
    link: "https://www.cromofinanciamentos.com.br"
  },
  {
    imgSrc: "/cromo-financiamento-tela.png",
    logoSrc:
      "https://www.cromofinanciamentos.com.br/logo-transparent-background.png",
    title: "Cromo Financiamentos",
    description: "Description of Cromo Financiamentos",
    link: "https://www.cromofinanciamentos.com.br"
  },
  {
    imgSrc: "/cromo-financiamento-tela.png",
    logoSrc:
      "https://www.cromofinanciamentos.com.br/logo-transparent-background.png",
    title: "Cromo Financiamentos",
    description: "Description of Cromo Financiamentos",
    link: "https://www.cromofinanciamentos.com.br"
  },
];

const Home: React.FC = () => {
  return (
    <div className="w-screen flex">
      <div className="flex flex-col ml-8 justify-center items-center space-y-4">
        <span className="w-0.5 h-1/6 bg-foreground"></span>
        <div className="space-y-3">
          <InstagramLogoIcon className="h-5 w-5 cursor-pointer hover:text-primary" />
          <LinkedInLogoIcon className="h-5 w-5 cursor-pointer hover:text-primary" />
          <GitHubLogoIcon className="h-5 w-5 cursor-pointer hover:text-primary" />
        </div>
      </div>
      <div>
        <NavigationMenuBar />
        <BackgroundPattern position="top-40" left="left-40" />
        <BackgroundPattern position="bottom-48" right="right-80" />
        <main className="container mt-16">
          <div className="space-y-3">
            <p className="text-3xl font-bold tracking-wide">Nossos projetos</p>
            <p className="tracking-wide">
              Descubra uma seleção de sites que desenvolvemos. Cada projeto é um
              exemplo do nosso compromisso com a inovação e a excelência em
              design e funcionalidade. Saiba como transformamos conceitos em
              experiências digitais personalizadas e impactantes para nossos
              clientes.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-12">
            {projects.map((project, index): any => (
              <ProjectCard
                key={index}
                imgSrc={project.imgSrc}
                logoSrc={project.logoSrc}
                title={project.title}
                description={project.description} // Ensure description is passed
                link={project.link}
              />
            ))}
          </div>
        </main>
      </div>
      <div className="flex flex-col mr-8 justify-center items-center space-y-4">
        <p className="vertical-text text-xl tracking-[.9rem]">Projetos</p>
      </div>
    </div>
  );
};

export default Home;
