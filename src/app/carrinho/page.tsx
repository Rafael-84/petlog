"use client"
import Image from "next/image";
import { useContext } from "react";
import dogCart from "../../../public/dog-cart.png";
import Link from "next/link";
import { CartContext } from "@/contexts/CartContext";
import { Container } from "@/components/container";
import { TrashIcon, MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { Footer } from "../components/home/footer";
import { CartSelect } from "./_components";

export default function Cart() {


    const { cart, addItemCart, removeItemCart, removeItem, total } = useContext(CartContext);



    return (
        <main>
            <section className="relative ">

                <div className="pt-20">
                    <div className="bg-[#FFDF9A] w-fit rounded-r-full px-14  relative left-0 z-50 py-2.5 border border-[#936500]   ">
                        <h2 className=" text-[#936500] text-lg font-semibold">Carrinho</h2>
                    </div>
                </div>
                <div className="pb-4">
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
                                <section className="flex  justify-center gap-2">
                                    <div className="flex flex-col flex-2 mt-9 w-full">
                                        {cart.map(item => (
                                            <div key={item.id} className="relative">
                                                <Container>
                                                    <section className="flex  mx-auto  pl-20">
                                                        <div className=" flex flex-2 w-full relative gap-2 border pt-2 border-[#6C0020] rounded-md overflow-hidden px-4">
                                                            <Link href={`/${item.categoria + "s"}/detail/${item.id}`}>
                                                                <div className="flex w-24 h-24 relative ">
                                                                    <Image className="object-contain hover:scale-105 duration-300 " src={item.image_url && item.image_url.length > 0 ? item.image_url[0].url : ""} alt={`Imagem: ${item.nome}`} fill priority quality={100} />
                                                                </div>
                                                            </Link>
                                                            <div className="flex flex-1 gap-2 items-center justify-center">
                                                                <span className="flex-2 text-gray-700 font-medium">{item.nome}</span>
                                                                <div className=" w-20 h-10 flex items-center justify-between px-2 border border-[#6C0020] rounded-md">
                                                                    <button onClick={() => removeItemCart(item)} className="text-[#6C0020] hover:text-[#C7033D] duration-300 cursor-pointer"><MinusCircleIcon size={20} /></button>
                                                                    <span> {item.quantidade}</span>
                                                                    <button onClick={() => addItemCart(item)} className="text-[#6C0020] hover:text-[#C7033D] duration-300 cursor-pointer"> <PlusCircleIcon size={20} /> </button>
                                                                </div>

                                                                <p className="flex-2 flex items-center justify-center text-gray-700 font-medium">{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

                                                                <div className="flex items-center justify-center">
                                                                    <button onClick={() => removeItem(item)} className="text-[#6C0020] hover:text-[#C7033D] duration-300 cursor-pointer"><TrashIcon size={24} /></button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </section>
                                                </Container>
                                            </div>
                                        ))}
                                    </div>
                                    <div className=" flex flex-col  w-3/4  flex-1 mt-10 ">
                                        <div className=" flex flex-col  h-fit  gap-4 py-3 border border-[#B3B3B3] rounded-lg">
                                            <div className=" flex flex-col w-full items-center space-y-3">
                                                <h2 className="text-gray-700 text-lg font-semibold">Resumo do Pedido</h2>
                                                <div className="flex items-center justify-between w-3/4  gap-4">
                                                    <div className="flex flex-col  justify-between gap-2">
                                                        <p>Total de Itens</p>
                                                        <p>Desconto de cupons</p>
                                                    </div>
                                                    <div className="flex flex-col  justify-between gap-2">
                                                        <p>{cart.length} itens</p>
                                                        <p>0</p>
                                                    </div>

                                                </div>
                                                <div className="w-full bg-slate-400 h-[1px]"></div>
                                                <div className="flex gap-2 items-center justify-between w-3/4 ">
                                                    <span className="text-gray-700  font-bold">Total do Pedido</span>
                                                    <span className="text-gray-700  font-bold">{total}</span>
                                                </div>
                                            </div>
                                        </div>

                                        < CartSelect />

                                        <div className=" my-4 ">
                                            <div className="flex flex-col space-y-1">
                                                <label>Cupom</label>
                                                <input type="text" className="w-full py-2 px-2 border border-slate-400 rounded-md outline-none " placeholder="Digite o cupom:" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-4 mt-2">
                                            <button className=" w-full py-2 bg-white border border-[#C7033D] rounded-md text-[#C7033D] cursor-pointer hover:bg-[#C7033D] hover:border-none  hover:text-white duration-300">Continuar para o pagamento</button>

                                            <button className=" w-full py-2 bg-[#C7033D] border-0 rounded-md text-white cursor-pointer hover:bg-[#6C0020] hover:border hover:border-[#C7033D] hover:text-white duration-300"> + Adicionar mais produtos</button>
                                        </div>
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