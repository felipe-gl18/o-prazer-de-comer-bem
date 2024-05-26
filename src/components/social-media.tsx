"use client";
import { useRouter } from "next/navigation";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
export default function SocialMedia() {
  const router = useRouter();
  return (
    <div className="lg:w-9/12 md:9/12 w-10/12 py-8">
      <p className="text-xl font-medium text-slate-400">Redes sociais</p>
      <Separator className="my-4" />
      <div className="flex items-center gap-8 text-red">
        <FaYoutube
          color="red"
          size={50}
          onClick={() =>
            router.push(
              "https://www.youtube.com/channel/UCMeZArxlkZtcT91Q5M0An8A"
            )
          }
        />
        <FaInstagram
          color="grey"
          size={42}
          onClick={() =>
            router.push("https://www.instagram.com/oprazerdecomerbem/")
          }
        />
      </div>
    </div>
  );
}
