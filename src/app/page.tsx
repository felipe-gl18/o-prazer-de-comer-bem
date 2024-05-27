import Carrousel from "@/components/carrousel";
import HighLight from "@/components/highlights";
import SocialMedia from "@/components/social-media";
export default async function Home() {
  return (
    <main className="flex flex-col gap-12 items-center w-full h-full justify-between">
      <Carrousel />
      <SocialMedia />
      <HighLight />
    </main>
  );
}
