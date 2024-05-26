import { CarrouselItemInterface } from "@/interfaces/interface";
import CarrouselItemDialog from "./carrousel-item-dialog";
import { CarouselItem } from "./ui/carousel";

export default async function CarrouselItem({
  title,
  description,
  url,
  address,
  instagram,
  email,
  phone,
  media,
}: CarrouselItemInterface) {
  return (
    <CarouselItem className="pl-2 lg:basis-1/3 md:basis-1/2 w-full h-80">
      <div
        style={{
          background: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={`flex pl-2 items-end p-2 h-full group rounded-sm`}
      >
        <CarrouselItemDialog
          title={title}
          description={description}
          address={address}
          instagram={instagram}
          email={email}
          phone={phone}
          media={media}
        />
      </div>
    </CarouselItem>
  );
}
