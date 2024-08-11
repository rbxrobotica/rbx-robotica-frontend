import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CarouselDApi } from "../Carousel/carousel";
import Image from "next/image";
import { MapPin, PhoneOutgoing } from "lucide-react";
import ReactHtmlParser from "react-html-parser";

interface SheetPainelProps {
  imgSrc?: string[];
  logoSrc: any;
  title: string;
  description: string;
  about: string;
  phone: string;
  endereco: string;
}

export function SheetPainel({
  imgSrc,
  logoSrc,
  title,
  description,
  about,
  endereco,
  phone
}: SheetPainelProps) {
  // Destructure description from props
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-background font-semibold hover:text-primary">
          Ver Detalhes
        </Button>
      </SheetTrigger>
      <SheetContent className="h-4/5 overflow-auto space-y-9" side="bottom">
        <div className="flex items-center space-x-6 md:container">
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
        <div className="flex flex-col-reverse md:flex md:flex-row md:container md:justify-between md:items-center md:mt-6">
          <div className="md:w-3/5 space-y-4">
            <p className="text-3xl font-bold tracking-wide">Sobre o cliente</p>
            {ReactHtmlParser(about)}
          </div>
          <div className="md:mt-12">
            <CarouselDApi imgSrc={imgSrc} />
          </div>
        </div>
        <div className="md:container space-y-4">
          <p className="text-2xl md:text-3xl font-bold tracking-wide">
            Informações para contato
          </p>
          <div className="space-y-3 md:flex md:items-center md:space-x-6 md:space-y-0">
            <div className="flex space-x-2 items-center">
              <PhoneOutgoing className="mr-2 h-4 w-4 text-foreground dark:text-primary" />
              {phone}
            </div>
            <div className="flex space-x-2 items-center">
              <MapPin className="mr-2 h-4 w-4 text-foreground dark:text-primary" />
              {endereco}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
