"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
    CaretCircleLeftIcon,
    CaretCircleRightIcon,
    HeartIcon,
    PlusCircleIcon,
} from "@phosphor-icons/react";
import { ProdutoProp } from "@/utils/produtos.type";
import Link from "next/link";



export function RecomendadoCarousel({ produto }: { produto: ProdutoProp[] }) {

    /* const recomendado = produto.produto.map(produto => produto) */



    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
    });

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    // Renderiza o carrossel com os produtos recebidos
    return (
        <section className="relative">
            <div className="bg-[#FFDF9A] w-fit rounded-r-full px-4 absolute left-0 z-50 py-2.5 border border-[#936500]  ">
                <h2 className=" text-[#936500] text-lg font-semibold">Produtos Recomendados</h2>
            </div>
            <div className=" max-w-7xl mx-auto relative pt-24">
                <div className="relative  ">
                    <div className="overflow-hidden  mt-8" ref={emblaRef}>
                        <div className="flex gap-4 py-2.5 ">
                            {produto.map((item) => (
                                <article key={item.id} className=" flex flex-col items-center space-y-6 flex-[0_0_100%] sm:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/4)] min-w-0 h-full ">
                                    <div className="shadow shadow-black/20 rounded-lg hover:scale-105 duration-300 px-3 bg-white/70  py-1 " >
                                        <div className="flex-1  flex flex-col p-1 bg-white border border-[#ff1d09] rounded-lg " >
                                            <div className=" flex w-40 mx-auto  flex-col  bg-white ">
                                                <Link href={`/recomendado/${item.id}`}>
                                                    <div className="relative w-[150px] h-[150px] cursor-pointer">
                                                        <Image src={item.image_url && item.image_url.length > 0 ? item.image_url[0].url : ""} alt="Imagem do Produto" className="object-cover" fill priority />
                                                    </div>
                                                </Link>
                                                <div className="flex items-center justify-between px-4">
                                                    <HeartIcon size={24} />
                                                    <PlusCircleIcon weight="fill" size={24} color="#8B0029" className="cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 w-40 mt-2 flex flex-col items-start justify-between gap-2 relative  ">
                                            <p className=" text-sm line-clamp-2">{item.nome}</p>
                                            {!item.desconto && item.preco && (
                                                <span className="font-bold text-gray-700 lg:pb-10">{item.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
                                            )}

                                            {item.desconto !== 0 && item.preco !== 0 && (
                                                <p className="font-semibold text-gray-700 text-xs ">De: <span className="line-through">{Number(item.preco.toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span></p>
                                            )}

                                            {item.desconto !== 0 && item.preco !== 0 && (
                                                <p className="font-bold text-[#8B0029] text-sm flex flex-col gap-2">Por: {Number((item.preco * (1 - (Number(item.desconto) / 100))).toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}  <span className="text-xs">{item.desconto}% de desconto</span></p>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <button onClick={scrollPrev} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-20 lg:left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer hover:bg-slate-100 duration-300  "><CaretCircleLeftIcon className="w-6 h-6" color="#8B0029" /></button>
                    <button onClick={scrollNext} className="bg-white flex items-center justify-center shadow-lg rounded-full w-10 h-10 absolute right-10 lg:-right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer hover:bg-slate-100 duration-300 " ><CaretCircleRightIcon className="w-6 h-6" color="#8B0029" /></button>
                </div>
            </div>
        </section>
    );
}