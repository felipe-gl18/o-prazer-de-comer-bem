import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FaAlignJustify } from "react-icons/fa";
export default async function MenuBar() {
  return (
    <div className="lg:hidden md:hidden sm:flex flex w-11/12 flex items-start">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <FaAlignJustify />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Nacional</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Internacional</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Diversos</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Institucional</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Estabelecimentos</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Contato</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
