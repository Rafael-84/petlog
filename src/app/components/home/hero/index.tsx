import Link from "next/link";
import dogHero from "../../../../../public/foto-hero.webp"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";


export function HeroHome() {
    return (
        <>
            <section className="bg-[url(../../public/bg-hero.png)] bg-[#ff1d09]/85 bg-blend-overlay relative">

                <div className="absolute inset-0 h-full w-full">
                    <Image className="object-cover opacity-60 lg:hidden" src={dogHero} alt="Imagem do cachorrinho" fill priority quality={100} />

                    <div className="absolute inset-0 bg-black opacity-40 lg:hidden"></div>
                </div>

                <div className="container mx-auto relative pt-16 pb-16 px-4 md:pb-0 ">
                    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-5">
                        <div className="space-y-6 lg:pb-5 lg:flex-1 ">
                            <h1 className="text-3xl text-white font-bold leading-10 font-mali">Seu pet merece todo o cuidado, carinho e atenção do mundo.</h1>
                            <p className="text-xl text-white font-medium font-mali">Por isso, oferecemos o melhor para garantir seu bem-estar e felicidade todos os dias.</p>
                            <Link href="https://wa.me/5511940028922?text=Olá gostaria de mais informações" target="_blank" rel="noopener noreferrer" className="bg-green-500 px-5 py-2 rounded w-fit text-white font-bold flex items-center gap-2 font-roboto hover:bg-green-600 duration-300"><WhatsappLogoIcon size={24} color="#fff" />Contato via whatssap</Link>
                        </div>
                        <div className="hidden z-30 relative h-full lg:flex lg:items-center lg:justify-center lg:pr-28 ">
                            <Image className="w-64 h-64 top-2 absolute object-contain" src={dogHero} alt="Imagem do cachorrinho" priority quality={100} />
                        </div>
                    </article>
                </div>
            </section >
        </>
    )
}