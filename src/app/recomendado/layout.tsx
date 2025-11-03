import { Footer } from "../components/home/footer";
import { Marcas } from "../components/home/marcas";
import { NossosServicos } from "../components/home/servicos";


export default function LayoutRecomendados({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
            <NossosServicos />
            <Marcas />
            <Footer />
        </main>
    )
}