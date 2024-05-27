import { CarrouselItemInterface } from "@/interfaces/interface";
import CarrouselItem from "./carrousel-item";
export default async function CarrouselItems() {
  const response = await fetch("https://o-prazer-de-comer-bem.vercel.app/api", {
    method: "GET",
    next: {
      tags: ["get_restaurants"],
    },
  });
  const data: any = await response.json();
  const restaurants: Array<CarrouselItemInterface> = data.restaurants;
  return restaurants.map((item) => {
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
  });
}
