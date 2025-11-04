"use client"
import Image from "next/image";
import { useContext, useState } from "react";
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
                {cart.length === 0 && (
                    <>
                        <div className="flex flex-col items-center justify-center relative ">
                            <div className="w-56 h-56 relative mt-48">
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
                        <div className="relative mt-20">
                            <Container>
                                <div className="flex justify-center mx-auto gap-2 w-3/4">
                                    <div className=" bg-amber-700 w-full flex-2">

                                        <h1>Item Aqui</h1>
                                    </div>
                                    <div className="bg-blue-300 w-full flex-1">
                                        <h2>Resumo aqui</h2>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </>
                )}
            </section>
        </main>
    )
}