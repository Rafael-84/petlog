"use client"
import useEmblaCarousel from "embla-carousel-react"
import produto1 from "../../../public/areia-gato.png";
import Image, { StaticImageData } from "next/image";
import { CaretCircleLeftIcon, CaretCircleRightIcon, HeartIcon } from "@phosphor-icons/react";
import { PlusCircleIcon } from "@phosphor-icons/react";
import { useState } from "react";

export interface RecomendadoProps {
    name: string;
    price: number;
    desconto: string | number;
    image: string | StaticImageData;
}

export function Recomendado() {
    const [lista, setLIsta] = useState<RecomendadoProps[]>([
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: "", image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: "", image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: "", image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
    ]);


    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
    })



    function scrollNext() {
        emblaApi?.scrollNext()
    }

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    return (
        <section className="mt-20 mb-10 z-50">
            <div className="bg-[#FFDF9A] w-fit flex items-center justify-center rounded-r-full px-4 py-2 border border-[#936500] mb-20">
                <h1 className="text-[#936500] font-bold font-mali ">Produtos Recomendados</h1>
            </div>
            <div className=" max-w-7xl mx-auto ">
                <div className="relative ">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex ">
                            {lista.map((item, index) => (
                                <div key={index} className=" flex flex-col items-center space-y-6 flex-[0_0_100%] sm:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/4)] min-w-0 h-full px-3 " >
                                    <article className="flex-1  flex flex-col p-1 bg-white border border-[#ff1d09] rounded-lg" >
                                        <div className=" flex w-40 mx-auto  flex-col  bg-white ">
                                            <div className="relative ">
                                                <Image src={item.image} alt="Imagem do Produto" priority />
                                            </div>
                                            <div className="flex items-center justify-between px-4">
                                                <HeartIcon size={24} />
                                                <PlusCircleIcon weight="fill" size={24} color="#8B0029" className="cursor-pointer" />
                                            </div>
                                        </div>
                                    </article>
                                    <div className="flex-1 w-40 mt-2 flex flex-col items-start justify-between gap-2 relative  ">
                                        <p className=" text-sm">{item.name}</p>
                                        {!item.desconto && item.price && (
                                            <span className="font-bold text-gray-700 lg:pb-10">{item.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
                                        )}

                                        {item.desconto && item.price && (
                                            <p className="font-semibold text-gray-700 text-xs ">De: <span className="line-through">{Number(item.price.toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span></p>
                                        )}

                                        {item.desconto && item.price && (
                                            <p className="font-bold text-[#8B0029] text-sm flex flex-col gap-2">Por: {Number((item.price * (1 - (Number(item.desconto) / 100))).toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}  <span className="text-xs">{item.desconto}% de desconto</span></p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={scrollPrev} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-20 lg:left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer hover:bg-slate-100 duration-300  "><CaretCircleLeftIcon className="w-6 h-6" color="#8B0029" /></button>

                    <button onClick={scrollNext} className="bg-white flex items-center justify-center shadow-lg rounded-full w-10 h-10 absolute right-10 lg:-right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer hover:bg-slate-100 duration-300 " ><CaretCircleRightIcon className="w-6 h-6" color="#8B0029" /></button>
                </div>
            </div>
        </section>
    )
}