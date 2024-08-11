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
import { Suspense } from "react";

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
    className={`z-[-1] md:flex absolute ${position} ${bottom || ""} ${
      right || ""
    } ${left || ""} place-md:items-center`}
  >
    <div className="absolute h-[300px] w-full -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:via-[#00FFFF] dark:opacity-10 sm:w-[480px] lg:h-[360px]" />
    <div className="absolute -z-20 h-[180px] w-full translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0e7272] dark:opacity-40 sm:w-[240px]" />
  </div>
);

interface ProjectCardProps {
  imgSrc?: string[];
  logoSrc?: string;
  title: string;
  description: string;
  about: string;
  endereco: string;
  phone: string;
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
  description,
  about,
  endereco,
  phone,
  link,
}) => (
  <div className="h-auto bg-gray-400 p-5 space-y-5 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    {logoSrc && (
      <div className="flex justify-start items-center space-x-3">
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
          src={imgSrc[0]}
          height={500}
          className="rounded-md drop-shadow-2xl"
          width={500}
          priority
          alt={`Screenshot of ${title}`}
          quality={100}
        />
        <div
          className="bg-gray-400 h-28
         rounded-lg p-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 text-sm overflow-auto"
        >
          <ul className="list-disc ml-6 leading-loose">
            <li>Formulário de financiamento</li>
            <li>Mensageria via e-mail</li>
          </ul>
        </div>
        <div className="flex justify-between items-center mt-4">
          <SheetPainel
            imgSrc={imgSrc}
            logoSrc={logoSrc}
            title={title}
            description={description}
            about={about}
            endereco={endereco}
            phone={phone}
          />{" "}
          {/* Pass description here */}
          <Button variant="link" onClick={handleClick(link)}>
            <SquareArrowOutUpRight className="mr-2 h-4 w-4 text-foreground dark:text-primary" />{" "}
            <p className="tracking-wide text-foreground dark:text-primary">
              Visitar site
            </p>
          </Button>
        </div>
      </>
    )}
  </div>
);

const projects = [
  {
    imgSrc: [
      "/cromo/cromo-financiamento-tela-1.png",
      "/cromo/cromo-financiamento-tela-2.png",
      "/cromo/cromo-financiamento-tela-3.png",
      "/cromo/cromo-financiamento-tela-4.png",
    ],
    logoSrc:
      "https://www.cromofinanciamentos.com.br/logo-transparent-background.png",
    title: "Cromo Financiamentos",
    description: "Site de financiamento de automóveis",
    about: `<p className="text-justify leading-relaxed">
              Na Cromo Financiamentos, transformar sonhos em realidade é a sua
              paixão! Com ampla experiência no mercado, são especialistas em
              realizar o sonho de ter a casa própria, um carro novo, a moto de
              sua preferência, um caminhão que movimenta seu negócio ou um barco
              que te leva a momentos inesquecíveis. <br />
              Oferece soluções financeiras personalizadas para cada cliente, com
              tarifas competitivas, parcelas acessíveis e atendimento
              excepcional.
            </p>
            <ul className="list-disc ml-6 leading-loose">
              <li>
                <strong>Confiança</strong>: Acreditam na construção de
                relacionamentos duradouros e transparentes com os clientes.
                <br />
              </li>
              <li>
                <strong>Agilidade</strong>: Buscam rapidez e eficiência em todos
                os processos para que os sonhos se tornem realidade o mais
                rápido possível. <br />
              </li>
              <li>
                <strong>Inovação</strong>: Estou sempre em busca de novas
                soluções para atender as necessidades dos clientes de forma cada
                vez mais completa. Compromisso: Estamos comprometidos em
                fornecer a melhor experiência possível a cada cliente.
              </li>
            </ul>`,
    endereco: `Rua Vinte e Quatro de Maio, 188. Andar 5. Centro. 01041-903.
                  SãoPaulo, SP.`,
    phone: "0800 591 8723",
    link: "https://www.cromofinanciamentos.com.br",
  },
  {
    imgSrc: [
      "/AF/anthony-portifolio-1.png",
      "/AF/anthony-portifolio-2.png",
      "/AF/anthony-portifolio-3.png",
      "/AF/anthony-portifolio-4.png",
    ],
    logoSrc: "https://cdn-icons-png.flaticon.com/128/4139/4139981.png",
    title: "Anthony S Farias",
    description: "Portifólio",
    about:
      `<p className="text-justify leading-relaxed">
        Dedicando-se com paixão e expertise, trabalhando incansavelmente para transformar 
        habilidosamente linhas de código em soluções eficazes e eficientes que atendem às 
        necessidades e desafios de nossos clientes.
        Ele é um desenvolvedor apaixonado por transformar ideias em realidade 
        através da programação. Com uma mente criativa e uma sólida base técnica,
        ele está constantemente em busca de desafios que lhe permitam criar 
        soluções inovadoras. Sua jornada no mundo da tecnologia proporcionou-lhe 
        a oportunidade de trabalhar em vários projetos empolgantes e aprender 
        com cada um deles. <br/> Ele está determinado a continuar aperfeiçoando suas 
        habilidades e colaborando em projetos que promovam a inovação e o progresso 
        tecnológico. Bem-vindo ao seu portfólio, onde é possível explorar seu trabalho 
        e conhecer um pouco mais sobre quem ele é como desenvolvedor.
      </p>`,
    endereco: "Não informado",
    phone: "11 95468-4812",
    link: "https://anthonysfarias.vercel.app/",
  },
];

const Home: React.FC = () => {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className="max-w-screen flex">
        <div className="hidden md:flex md:flex-col md:ml-8 md:mr-2 md:justify-center md:items-center md:space-y-4 lg:flex lg:flex-col lg:ml-8 lg:mr-2 lg:justify-center lg:items-center lg:space-y-4">
          <span className="md:w-0.5 md:h-1/6 md:mb-52 md:fixed md:-bottom-11 md:bg-foreground lg:w-0.5 lg:h-1/6 lg:mb-52 lg:fixed lg:-bottom-11 lg:bg-foreground"></span>
          <div className="md:space-y-3 md:fixed md:bottom-14 md:z-20 lg:space-y-3 lg:fixed lg:bottom-14 lg:z-20">
            <InstagramLogoIcon className="cursor-pointer md:h-5 md:w-5 lg:h-5 lg:w-5 hover:text-primary" />
            <LinkedInLogoIcon className="cursor-pointer md:h-5 md:w-5 lg:h-5 lg:w-5 hover:text-primary" />
            <GitHubLogoIcon className="cursor-pointer md:h-5 md:w-5 lg:h-5 lg:w-5 hover:text-primary" />
          </div>
        </div>
        <div>
          <NavigationMenuBar />
          <BackgroundPattern position="top-40 top-40" left="left-40 left-40" />
          <BackgroundPattern
            position="bottom-48 bottom-52"
            right="right-80 right-80"
          />
          {/* <BackgroundPattern position="-bottom-10" left="left-80" /> */}
          <BackgroundPattern
            position="top-120 top-120"
            right="right-80 right-80"
          />
          {/* <BackgroundPattern position="-bottom-80" right="right-80" /> */}

          <main className="container mt-16">
            <div className="space-y-3">
              <p className="text-3xl font-bold tracking-wide">
                Nossos projetos
              </p>
              <p className="tracking-wide">
                Descubra uma seleção de sites que desenvolvemos. Cada projeto é
                um exemplo do nosso compromisso com a inovação e a excelência em
                design e funcionalidade. Saiba como transformamos conceitos em
                experiências digitais personalizadas e impactantes para nossos
                clientes.
              </p>
            </div>
            <hr className="flex my-10 md:hidden lg:hidden" />
            <div className="grid gap-4 md:grid-cols-4 mt-12 lg:grid lg:grid-cols-4 lg:gap-4 lg:mt-12">
              {projects.map((project, index): any => (
                <ProjectCard
                  key={index}
                  imgSrc={project.imgSrc}
                  logoSrc={project.logoSrc}
                  title={project.title}
                  description={project.description}
                  about={project.about}
                  endereco={project.endereco}
                  phone={project.phone}
                  link={project.link}
                />
              ))}
            </div>
          </main>
        </div>
        <div className="md:flex md:flex-col md:mr-8 md:justify-center md:items-center md:space-y-4 lg:flex lg:flex-col lg:mr-8 lg:justify-center lg:items-center lg:space-y-4">
          <p className="vertical-text text-xl tracking-[.9rem]">Projetos</p>
        </div>
      </div>

      <footer className="text-sx text-center md:bg-gray-400 md:h-auto mt-24 md:mt-0 md:p-2 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-10 lg:bg-gray-400 lg:h-auto lg:mt-24 lg:p-2 lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-lg lg:bg-opacity-10">
        © 2024 RBX Robótica.{" "}
        <span className="underline underline-offset-2 text-primary">
          Todos os direitos reservados.
        </span>
      </footer>
      <br className="flex md:hidden lg:hidden" />
    </Suspense>
  );
};

export default Home;
