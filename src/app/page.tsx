import { HeroHome } from "./components/home/hero";
import { Recomendado } from "@/components/recomendados";
import { Cuidados } from "./components/home/cuidados";
import { NossosServicos } from "./components/home/servicos";
import { Marcas } from "./components/home/marcas";
import { Footer } from "./components/home/footer";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <Recomendado categoria="all" />
      <Cuidados />
      <NossosServicos />
      <Marcas />
      <Footer />
    </main>
  );
}
