import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CarouselDApi } from "../Carousel/carousel";
import Image from "next/image";

interface SheetPainelProps {
  imgSrc?: string[];
  logoSrc: any;
  title: string;
  description: string; // Define description prop
}

export function SheetPainel({ imgSrc, logoSrc, title, description }: SheetPainelProps) {
  // Destructure description from props
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-background font-semibold hover:text-primary">
          Ver Detalhes
        </Button>
      </SheetTrigger>
      <SheetContent className="h-4/5 overflow-auto space-y-9" side="bottom">
        <div className="flex items-center space-x-6">
          <Image
            src={logoSrc}
            className="bg-gray-400 shadow-sm rounded-lg p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            height={150}
            width={150}
            priority
            alt={`Logo of ${title}`}
            quality={100}
          />
          <div className="flex flex-col space-y-2">
            <SheetTitle>Detalhes do projeto - {title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </div>
        </div>
        <hr />
        <div className="flex container justify-between items-center mt-6">
          <div className="w-3/5 space-y-4">
            <p className="text-3xl font-bold tracking-wide">Sobre a {title}</p>
            <p className="text-justify leading-relaxed">
              Na Cromo Financiamentos, transformar sonhos em realidade é a sua
              paixão! Com ampla experiência no mercado, são especialistas em
              realizar o sonho de ter a casa própria, um carro novo, a moto de
              sua preferência, um caminhão que movimenta seu negócio ou um barco
              que te leva a momentos inesquecíveis. Missão e valores tarefa
              Oferece soluções financeiras personalizadas para cada cliente, com
              tarifas competitivas, parcelas acessíveis e atendimento
              excepcional. valores Confiança: Acredito na construção de
              relacionamentos duradouros e transparentes com os clientes.
              Agilidade: Buscam rapidez e eficiência em todos os processos para
              que os sonhos se tornem realidade o mais rápido possível.
              Inovação: Estou sempre em busca de novas soluções para atender as
              necessidades dos clientes de forma cada vez mais completa.
              Compromisso: Estamos comprometidos em fornecer a melhor
              experiência possível a cada cliente.
            </p>
          </div>
        <div className="mt-12">
            <CarouselDApi imgSrc={imgSrc}/>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
