
import { HeaderCategoria } from "../aves/_components/_headerCategoriaAves"
import { Recomendado } from "@/components/recomendados";
import Image from "next/image";
import passaro from "../../../public/passaro-bg.png"; import { Container } from "@/components/container";
import { NossosServicos } from "../components/home/servicos";
import { Marcas } from "../components/home/marcas";
import { Footer } from "../components/home/footer";


export default function AvesLayout({ children }: { children: React.ReactNode }) {


    return (
        <main>

            <section className="lg:bg-[url(../../public/passaro-bg.png)] lg:bg-contain lg:bg-no-repeat lg:bg-top-right bg-white  lg:bg-white/60 lg:bg-blend-overlay pb-2 z-10 relative">
                <div>
                    <Image className="object-cover  opacity-40 lg:hidden" src={passaro} alt="Foto do cachorro" fill sizes="100vw" />

                    <div className="bg-white inset-0 absolute opacity-30 lg:hidden"></div>
                </div>



                <h1 className="bg-transparent text-center pt-12 text-[#BC34D8] text-2xl font-bold relative">Aves</h1>


                <div className=" z-10 relative">
                    <Recomendado />
                </div>
            </section>
            <main>
                <section className="bg-[#fafafa]">
                    <Container>
                        <HeaderCategoria color="#BC34D8" />

                        <div className=" flex flex-wrap gap-6 mt-16 container pl-8 space-y-12 pb-4 ">
                            {children}
                        </div>


                    </Container>
                </section>
            </main>
            <NossosServicos />
            <Marcas />
            <Footer />

        </main>

    );
}