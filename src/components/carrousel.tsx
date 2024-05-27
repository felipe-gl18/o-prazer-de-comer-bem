import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarrouselItem from "./carrousel-item";
import { CarrouselItemInterface } from "@/interfaces/interface";
export default async function Carrousel() {
  const response = await fetch("https://o-prazer-de-comer-bem.vercel.app/api", {
    method: "GET",
    next: {
      tags: ["get_restaurants"],
    },
  });
  const data: any = await response.json();
  const restaurants: Array<CarrouselItemInterface> = data.restaurants;
  return (
    <Carousel className="lg:w-9/12 md:9/12 sm:w-10/12 w-11/12">
      <CarouselContent className="px-2">
        {restaurants.map((item) => {
          const {
            id,
            title,
            description,
            url,
            address,
            instagram,
            email,
            phone,
            media,
          } = item;
          return (
            <CarrouselItem
              key={id}
              title={title}
              description={description}
              url={url}
              address={address}
              instagram={instagram}
              email={email}
              phone={phone}
              media={media}
            />
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="lg:flex md:flex sm:hidden hidden" />
      <CarouselNext className="lg:flex md:flex sm:hidden hidden" />
    </Carousel>
  );
}
