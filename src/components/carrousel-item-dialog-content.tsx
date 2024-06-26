"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { DialogDescription } from "./ui/dialog";
import { CarrouselItemInterface } from "@/interfaces/interface";
export default function CarrouselItemDialogContent({
  description,
  address,
  instagram,
  email,
  phone,
  media,
}: CarrouselItemInterface) {
  return (
    <DialogDescription className="py-4">
      <section className="flex flex-col text-start justify-start items-start w-full">
        <p className="text-black">{phone}</p>
        <p className="text-black">{address}</p>
        <p className="text-black">{email}</p>
        <p className="text-black">{instagram}</p>
      </section>
      <Carousel plugins={[Autoplay({ delay: 1500 })]} className="w-full">
        <CarouselContent className="-ml-1 py-8">
          {media.map((mediaItem: any, index: number) => {
            return (
              <CarouselItem className="pl-1 h-52" key={index}>
                <div
                  style={{
                    background: `url(${mediaItem})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className={`flex items-end h-full group`}
                ></div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="lg:flex md:flex sm:hidden hidden" />
        <CarouselNext className="lg:flex md:flex sm:hidden hidden" />
      </Carousel>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black">Descrição</AccordionTrigger>
          <AccordionContent className="flex justify-start items-start text-start h-28 overflow-y-auto">
            {description}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </DialogDescription>
  );
}
