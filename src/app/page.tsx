import { NavigationMenuBar } from "@/components/system/Navigation/navbar";
import { SheetPainel } from "@/components/system/Sites-description/sheet";
import { Button } from "@/components/ui/button";
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
}

// Componente ProjectCard
const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  logoSrc,
  title,
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
      <Image
        src={imgSrc}
        height={500}
        className="rounded-md drop-shadow-2xl"
        width={500}
        priority
        alt={`Screenshot of ${title}`}
        quality={100}
      />
    )}
     <div className="flex justify-between items-center">
      <SheetPainel />
      <Button variant="link">
        {" "}
        <SquareArrowOutUpRight className="mr-2 h-4 w-4" /> Visitar site
      </Button>
    </div>
    <div className="flex justify-between items-center">
    
    </div>
  </div>
);

const projects = [
  {
    imgSrc: "/cromo-financiamento-tela.png",
    logoSrc:
      "https://www.cromofinanciamentos.com.br/logo-transparent-background.png",
    title: "Cromo Financiamentos",
  },
  { title: "Nossos projetos" },
  { title: "Nossos projetos" },
  { title: "Nossos projetos" },
];

const Home: React.FC = () => {
  return (
    <div className="w-screen">
      <NavigationMenuBar />
      <BackgroundPattern position="top-40" left="left-40" />
      <BackgroundPattern position="bottom-48" right="right-80" />
      <main className="container mt-16">
        <div>
          <p className="text-3xl underline underline-offset-3 font-bold">
            Nossos projetos
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              logoSrc={project.logoSrc}
              title={project.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
