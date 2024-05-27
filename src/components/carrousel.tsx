"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarrouselItems from "./carrousel-items";
export default async function Carrousel() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 1500 })]}
      className="lg:w-9/12 md:9/12 sm:w-10/12 w-11/12"
    >
      <CarouselContent className="px-2">
        <CarrouselItems />
      </CarouselContent>
      <CarouselPrevious className="lg:flex md:flex sm:hidden hidden" />
      <CarouselNext className="lg:flex md:flex sm:hidden hidden" />
    </Carousel>
  );
}
