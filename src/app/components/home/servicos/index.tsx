"use client"
import useEmblaCarousel from "embla-carousel-react";
import { CaretCircleLeftIcon, CaretCircleRightIcon, ScissorsIcon, ClockIcon, TaxiIcon, SyringeIcon, StethoscopeIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { useState } from "react";
import Link from "next/link";



export function NossosServicos() {
    const [lista, setLIsta] = useState([
        { icon: <ScissorsIcon size={24} color="#FFF" />, name: "Banho e tosa completo", description: "Banho com shampoo hipoalergênico e tosa personalizada para o conforto do seu pet.", duration: "1h 30min" },
        { icon: <TaxiIcon size={24} color="#FFF" />, name: "Transporte Pet", description: "Serviço de transporte seguro para levar seu pet até o petshop e devolver com todo cuidado.", duration: "Sob Consulta" },
        { icon: <SyringeIcon size={24} color="#FFF" />, name: "Medicamentos ", description: "Temos os medicamentos certos para cuidar da saúde do seu pet com segurança e confiança.", duration: "Sob Consulta" },
        { icon: <StethoscopeIcon size={24} color="#FFF" />, name: "Consulta Veterinária", description: "Atendimento clínico completo para diagnóstico, prevenção e tratamento de doenças.", duration: "1h 30min" }
    ]);


    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 1024px)": { slidesToScroll: 3 }
        }
    })



    function scrollNext() {
        emblaApi?.scrollNext()
    }

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    return (
        <section className="mt-20 mb-10">
            <div className="container mx-auto">
                <h1 className="pb-8 ml-10 text-gray-800 text-2xl font-bold">Nossos Serviços</h1>
                <div className="relative px-2 ">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex px-2 ">
                            {lista.map((item, index) => (
                                <div key={index} className=" flex flex-col items-center space-y-6 flex-[0_0_100%] md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] min-w-0 h-full px-6 " >
                                    <article className="bg-[#6C0020] py-4 rounded-lg">
                                        <div className="p-2 flex gap-2">
                                            <div className="w-6 h-6">
                                                {item.icon}
                                            </div>
                                            <div className="flex flex-col space-y-4">
                                                <div className="space-y-2">
                                                    <h3 className="text-white font-semibold">{item.name}</h3>
                                                    <p className="text-white text-sm">{item.description}</p>
                                                </div>
                                                <div className="flex justify-between border-t border-white pt-4 sm:flex-col sm:items-center sm:gap-4 lg:items-start lg:gap-0 lg:flex-row px-2 ">
                                                    <div className="flex items-center gap-2 sm:mr-4 lg:mr-0">
                                                        <ClockIcon size={24} color="#FFF" />
                                                        <span className="text-white text-sm"> {item.duration}</span>
                                                    </div>

                                                    <Link href={`https://wa.me/5511940028922?text=Olá gostaria de mais informações sobre ${item.name} `} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-sm text-[#6c0020] font-semibold px-4 py-1 rounded-lg hover:bg-rose-100 duration-300"><WhatsappLogoIcon size={24} color="#6c0020" />WhatsApp</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={scrollPrev} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-9 lg:left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer hover:bg-slate-100 duration-300  "><CaretCircleLeftIcon className="w-6 h-6" color="#8B0029" /></button>

                    <button onClick={scrollNext} className="bg-white flex items-center justify-center shadow-lg rounded-full w-10 h-10 absolute -right-1 lg:-right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer hover:bg-slate-100 duration-300 " ><CaretCircleRightIcon className="w-6 h-6" color="#8B0029" /></button>
                </div>
            </div>
        </section >
    )
}