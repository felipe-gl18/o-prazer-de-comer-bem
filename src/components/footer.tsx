import { Separator } from "./ui/separator";

export default async function Footer() {
  return (
    <div className="lg:w-6/12 md:6/12 w-10/12 h-92 flex flex-col justify-center items-center py-12 gap-8">
      <Separator className="" />
      <p className="text-xs font-bold text-black/60">
        2005 - 2018 - Todos os direitos reservados - O Prazer de Comer Bem
      </p>
    </div>
  );
}
