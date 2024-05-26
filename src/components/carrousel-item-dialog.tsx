import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { CarrouselItemInterface } from "@/interfaces/interface";
import CarrouselItemDialogContent from "./carrousel-item-dialog-content";
export default function CarrouselItemDialog({
  title,
  description,
  address,
  instagram,
  email,
  phone,
  media,
}: CarrouselItemInterface) {
  return (
    <Dialog>
      <DialogTrigger className="lg:hidden md:hidden sm:block block lg:group-hover:block md:group-hover:block py-2 px-6 bg-slate-900 rounded-md text-white text-xs font-bold shadow-xl">
        Detalhes
      </DialogTrigger>
      <DialogContent className="w-11/12 rounded-md">
        <DialogHeader>
          <DialogTitle className="flex items-start">{title}</DialogTitle>
          <CarrouselItemDialogContent
            description={description}
            address={address}
            instagram={instagram}
            email={email}
            phone={phone}
            media={media}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
