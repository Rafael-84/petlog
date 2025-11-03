import { Footer } from "@/app/components/home/footer";
import { Marcas } from "@/app/components/home/marcas";
import { NossosServicos } from "@/app/components/home/servicos";



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