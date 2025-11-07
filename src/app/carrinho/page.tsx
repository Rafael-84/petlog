"use client"
import Image from "next/image";
import { useContext } from "react";
import dogCart from "../../../public/dog-cart.png";
import Link from "next/link";
import { CartContext } from "@/contexts/CartContext";
import { Container } from "@/components/container";

export default function Cart() {


    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);



    return (
        <main>
            <section className="relative">

                <div className="bg-[#FFDF9A] w-fit rounded-r-full px-14 mt-20 absolute left-0 z-50 py-2.5 border border-[#936500] relative  ">
                    <h2 className=" text-[#936500] text-lg font-semibold">Carrinho</h2>
                </div>
                <div>
                    {cart.length === 0 && (
                        <>
                            <div className="flex flex-col items-center justify-center relative ">
                                <div className="w-56 h-56 relative mt-12">
                                    <Image className="object-contain" src={dogCart} alt="Cachorro do carrinho" fill priority quality={100} />
                                </div>
                                <div className="relative -top-14">
                                    <p className="  text-slate-800 text-xl font-semibold">Que pena! Seu carrinho está vazio!</p>

                                </div>

                                <Link href="/" className="relative -top-10 text-[#6C0020] bg-white border border-[#6C0020] px-4 py-2 rounded-lg font-bold  hover:text-[#C7033D] hover:border-[#C7033D] duration-300">Voltar ao Início</Link>
                            </div>
                        </>
                    )}

                    {cart.length !== 0 && (
                        <>
                            <Container>
                                <section className="flex gap-2">
                                    <div className="flex flex-col flex-2 mt-10 w-full">
                                        {cart.map(item => (
                                            <div key={item.id} className="relative">
                                                <Container>
                                                    <section className="flex  mx-auto  pl-20">
                                                        <div className=" flex flex-2 w-full relative gap-2 border border-[#6C0020] rounded-md overflow-hidden px-4">
                                                            <Link href={`/detail/${item.id}`}>
                                                                <div className="flex w-24 h-24 relative ">
                                                                    <Image className="object-contain " src={item.image_url && item.image_url.length > 0 ? item.image_url[0].url : ""} alt={`Imagem: ${item.nome}`} fill priority quality={100} />
                                                                </div>
                                                            </Link>
                                                            <div className="flex flex-1 gap-2 items-center justify-center">
                                                                <h1 className="flex-2">{item.nome}</h1>
                                                                <div className="flex-1 flex items-center justify-center">
                                                                    <span>Quantidade</span>
                                                                </div>
                                                                <p className="flex-1 flex items-center justify-center">{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                                                <div className="flex items-center justify-center">
                                                                    <span>lixeira</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </section>
                                                </Container>
                                            </div>
                                        ))}
                                    </div>
                                    <div className=" flex-1 mt-10">
                                        <h2>Resumo aqui</h2>
                                    </div>
                                </section>
                            </Container>
                        </>
                    )}
                </div>

            </section>
        </main>
    )
}