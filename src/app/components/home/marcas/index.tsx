import Image from "next/image";
import golden from "../../../../../public/golden.png";
import natural from "../../../../../public/natural.png";
import premier from "../../../../../public/primier.png";
import royal from "../../../../../public/royal.png";
import whiskas from "../../../../../public/whiskas.png";
import special from "../../../../../public/special-dog.png";

export function Marcas() {
    return (
        <section className=" bg-[url(../../public/bg-hero.png)] bg-[#F8B71A] bg-blend-overlay">
            <div className="container mx-auto flex  py-16">
                <div className="w-full max-w-7xl flex items-center justify-center flex-col mx-auto">
                    <h3 className="text-center text-gray-800 font-bold text-2xl w-full pb-8">Marcas que trabalhamos</h3>
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
                        <div className="bg-white w-52 lg:w-72 h-auto flex items-center justify-center rounded-lg">
                            <Image src={golden} alt="Golden" className=" w-44 lg:w-64 h-auto" priority quality={100} />
                        </div>
                        <div className="bg-white w-52 lg:w-72 h-auto flex items-center justify-center rounded-lg">
                            <Image src={natural} alt="Natural" className=" w-44 lg:w-64 h-auto" priority quality={100} />
                        </div>
                        <div className="bg-white w-52 lg:w-72 h-auto flex items-center justify-center rounded-lg">
                            <Image src={premier} alt="Natural" className=" w-44 lg:w-64 h-auto" priority quality={100} />
                        </div>
                        <div className="bg-white w-52 lg:w-72 h-auto flex items-center justify-center rounded-lg">
                            <Image src={royal} alt="Natural" className=" w-44 lg:w-64 h-auto" priority quality={100} />
                        </div>
                        <div className="bg-white w-52 lg:w-72 h-auto flex items-center justify-center rounded-lg">
                            <Image src={whiskas} alt="Natural" className=" w-44 lg:w-64 h-auto" priority quality={100} />
                        </div>
                        <div className="bg-white w-52 lg:w-72 h-auto flex items-center justify-center rounded-lg">
                            <Image src={special} alt="Natural" className=" w-44 lg:w-40 h-auto" priority quality={100} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}