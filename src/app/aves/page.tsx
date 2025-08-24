"use client"
import { HeaderCategoria } from "../../components/headerCategoria"
import { Recomendado } from "@/components/recomendados";
import Image from "next/image";
import passaro from "../../../public/passaro-bg.png";
import { Container } from "@/components/container";


import produto1 from "../../../public/areia-gato.png";
import { useState } from "react";
import { RecomendadoProps } from "@/components/recomendados";
import { HeartIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { NossosServicos } from "../components/home/servicos";
import { Marcas } from "../components/home/marcas";
import { Footer } from "../components/home/footer";


export default function Gatos() {

    const [lista, setLIsta] = useState<RecomendadoProps[]>([
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: "", image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: "", image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: "", image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: "", image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: "", image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: "", image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },
        { name: "Ração Golden Special para Cães Adultos Sabor Frango e Carne", price: 149.99, desconto: 10, image: produto1 },

    ]);



    return (
        <>

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


                        <div className=" flex flex-wrap gap-6 mt-16 container pl-20 space-y-12 ">
                            {lista.map((item, index) => (
                                <article key={index} className=" flex items-center w-[200px] flex-col p-1  rounded-lg" >
                                    <div className=" flex  mx-auto  flex-col  bg-white border border-[#ff1d09] p-1 rounded-lg ">
                                        <div className="relative ">
                                            <Image src={item.image} alt="Imagem do Produto" priority />
                                        </div>
                                        <div className="flex items-center justify-between px-4">
                                            <HeartIcon size={24} />
                                            <PlusCircleIcon weight="fill" size={24} color="#8B0029" className="cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="w-full px-1 mt-2 flex flex-col items-start justify-between gap-2 relative  ">
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
                                </article>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <NossosServicos />
            <Marcas />
            <Footer />

        </>

    );
}