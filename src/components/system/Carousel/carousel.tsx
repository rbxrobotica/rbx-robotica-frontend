import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselDApiProps {
  imgSrc?: string[]; // Make imgSrcs optional
}

export function CarouselDApi({ imgSrc = [] }: CarouselDApiProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-md"
    >
      <CarouselContent className="h-[250px] md:-mt-1 md:h-[300px]">
        {imgSrc.map((src, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image
                    src={src}
                    height={150}
                    className="rounded-md drop-shadow-2xl"
                    width={400}
                    priority
                    alt={`Image ${index + 1}`}
                    quality={100}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex lg:flex"/>
      <CarouselNext className="hidden md:flex lg:flex" />
    </Carousel>
  );
}
