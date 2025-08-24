import Image from "next/image";
import dogCuidados from "../../../../../public/hero-dog.webp"
import imgCuidados1 from "../../../../../public/cuidado1.png"
import imgCuidados2 from "../../../../../public/cuidado2.jpg"


export function Cuidados() {
    return (
        <>
            <section className="bg-[#FFDE21] relative">

                <div>
                    <Image className="object-cover opacity-20 lg:hidden" src={dogCuidados} alt="Imagem do cachorrinho" fill priority sizes="100vw" quality={100} />

                    <div className="absolute inset-0 bg-black opacity-10 lg:hidden"></div>
                </div>

                <div className="container mx-auto relative pt-16 pb-16 px-1 md:pb-0 ">
                    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-5">
                        <div className="space-y-6 lg:pb-5 lg:flex-1 ">
                            <h2 className="py-8  font-bold text-2xl text-gray-800">Cuidados essenciais</h2>
                            <p className=" font-medium text-lg text-gray-800 flex-wrap">"Garantimos todos os cuidados essenciais para a saúde, o conforto e a felicidade do seu pet." 🐾</p>
                            <div className="grid grid-cols-2 gap-4 mt-5 py-2">
                                <Image src={imgCuidados1} alt="Foto cachorro" className="w-fit h-full rounded-lg" />

                                <Image src={imgCuidados2} alt="Foto cachorro" className="w-fit h-full rounded-lg" />
                            </div>
                        </div>
                        <div className="hidden z-30 relative h-full lg:flex lg:items-center lg:justify-center lg:pr-28 ">
                            <Image src={dogCuidados} alt="Foto cachorro" className="w-fit h-[484px] object-cover" />
                        </div>
                    </article>
                </div>
            </section >
        </>
    )
}