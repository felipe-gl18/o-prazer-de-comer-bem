import { highlightsItemInterface } from "@/interfaces/interface";
import { Separator } from "./ui/separator";
export default async function HighLight() {
  const response = await fetch("https://o-prazer-de-comer-bem.vercel.app/api", {
    method: "GET",
    next: {
      tags: ["highlights"],
    },
  });
  const data: any = await response.json();
  const highlights: Array<highlightsItemInterface> = data.highlights;
  return (
    <div className="lg:w-9/12 md:w-10/12 w-11/12 py-8">
      <p className="text-xl font-medium text-slate-400">Destaques</p>
      <Separator className="my-4" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-y-2 w-full">
        {highlights.map((item, index) => {
          return (
            <div
              className="flex items-center justify-center h-96 rounded-xl cursor-pointer"
              key={index}
            >
              <div
                style={{
                  background: `url(${item.url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="h-96 hover:h-80 w-96 hover:w-80 rounded-xl duration-500"
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
