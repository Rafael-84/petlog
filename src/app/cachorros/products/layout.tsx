import dogAmarelo from "../../../../public/hero-dog.webp";
import { HeaderCategoria } from "../components/_headerCategoriaCachorro";
import { Recomendado } from "@/components/recomendados";
import { Container } from "@/components/container";
import Image from "next/image";
import { NossosServicos } from "../../components/home/servicos";
import { Marcas } from "../../components/home/marcas";
import { Footer } from "../../components/home/footer";


export default function LayoutCachorros({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <main>

                <section className="lg:bg-[url(../../public/hero-dog.webp)] lg:bg-contain lg:bg-no-repeat lg:bg-top-right bg-white  lg:bg-white/60 lg:bg-blend-overlay pb-2 z-10 relative">
                    <div>
                        <Image className="object-cover  opacity-40 lg:hidden" src={dogAmarelo} alt="Foto do cachorro" fill sizes="100vw" />

                        <div className="bg-white inset-0 absolute opacity-30 lg:hidden"></div>
                    </div>



                    <h1 className="bg-transparent text-center pt-12 text-[#BC721D] text-2xl font-bold relative">Cachorros</h1>


                    <div className=" z-50 relative">
                        <Recomendado categoria="cachorro" />
                    </div>
                </section>
                <>
                    <section className="bg-[#fafafa]">
                        <Container>
                            <HeaderCategoria color="#BC721D" />


                            <div className=" flex flex-wrap gap-6 mt-16 container pl-8 space-y-12 pb-4 ">
                                {children}

                            </div>
                        </Container>
                    </section>
                </>
                <NossosServicos />
                <Marcas />
                <Footer />

            </main>

        </section>
    )

}

