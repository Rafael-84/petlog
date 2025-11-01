import { HeaderCategoria } from "../_components/_headerCategoriaGatos"
import { Recomendado } from "@/components/recomendados";
import Image from "next/image";
import gato from "../../../../public/gato-bg.png";
import { Container } from "@/components/container";
import { NossosServicos } from "../../components/home/servicos";
import { Marcas } from "../../components/home/marcas";
import { Footer } from "../../components/home/footer";




export default function LayoutCats({ children }: { children: React.ReactNode }) {



    return (
        <main>

            <section className="lg:bg-[url(../../public/gato-bg.png)] lg:bg-contain lg:bg-no-repeat lg:bg-top-right bg-white  lg:bg-white/60 lg:bg-blend-overlay pb-2 z-10 relative">
                <div>
                    <Image className="object-cover  opacity-40 lg:hidden" src={gato} alt="Foto do cachorro" fill sizes="100vw" />

                    <div className="bg-white inset-0 absolute opacity-30 lg:hidden"></div>
                </div>

                <h1 className="bg-transparent text-center pt-12 text-[#00937A] text-2xl font-bold relative">Gatos</h1>

                <div className=" z-50 relative">
                    <Recomendado categoria="gato" />
                </div>
            </section>
            <>
                <section className="bg-[#fafafa]">
                    <Container>
                        <HeaderCategoria color="#00937A" />

                        <div className="  flex flex-wrap gap-6 mt-16 container pl-8 space-y-12 pb-4 ">
                            {children}
                        </div>
                    </Container>
                </section>
            </>
            <NossosServicos />
            <Marcas />
            <Footer />
        </main>
    )
}