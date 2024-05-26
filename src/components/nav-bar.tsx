export default function NavBar() {
  return (
    <div className="lg:flex md:flex sm:hidden hidden flex items-center justify-center lg:w-6/12 md:12/12 py-8">
      <ul className="flex w-full justify-between">
        <li className="py-2 px-4 border-bottom-1 text-slate-600 text-sm cursor-pointer">
          Nacional
        </li>
        <li className="py-2 px-4 border-bottom-1 text-slate-600 text-sm cursor-pointer">
          Internacional
        </li>
        <li className="py-2 px-4 border-bottom-1 text-slate-600 text-sm cursor-pointer">
          Diversos
        </li>
        <li className="py-2 px-4 border-bottom-1 text-slate-600 text-sm cursor-pointer">
          Institucional
        </li>
        <li className="py-2 px-4 border-bottom-1 text-slate-600 text-sm cursor-pointer">
          Estabelecimentos
        </li>
        <li className="py-2 px-4 border-bottom-1 text-slate-600 text-sm cursor-pointer">
          Contato
        </li>
      </ul>
    </div>
  );
}
