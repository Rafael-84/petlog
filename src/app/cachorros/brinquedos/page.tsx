import { ProdutoProp } from "@/utils/produtos.type";
import { buscarProdutosCachorrosBrinquedos } from "../_actions/_all-products/get-products";
import Image from "next/image";
import { HeartIcon, PlusCircleIcon } from "@phosphor-icons/react/dist/ssr";

export default async function BrinquedosDog() {

    const buscarBrinquedos = await buscarProdutosCachorrosBrinquedos()
    const listaBrinquedos: ProdutoProp[] = buscarBrinquedos.produtos as ProdutoProp[]


    return (
        <main>
            <section className="flex flex-col">
                <div className="mb-8">
                    <h2 className="text-xl text-[#6C0020] font-medium ">Brinquedos</h2>
                </div>

                <div className="flex flex-row gap-4">
                    {listaBrinquedos.map((item) => (
                        <article key={item.id} className=" flex items-center  w-[200px] flex-col p-1 shadow shadow-black/20 rounded-lg hover:scale-105 duration-300  " >
                            <div className=" flex  mx-auto  flex-col  bg-white border border-[#ff1d09] p-1 rounded-lg ">
                                <div className="relative w-[150px] h-[150px] cursor-pointer ">
                                    {(item.image_url) && item.image_url.length > 0 && (
                                        <Image src={item.image_url[0].url} fill alt={item.nome} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    )}
                                </div>
                                <div className="flex items-center justify-between px-4">
                                    <HeartIcon size={24} className="cursor-pointer hover:scale-125 duration-300" />
                                    <PlusCircleIcon weight="fill" size={24} color="#8B0029" className="cursor-pointer hover:scale-125 duration-300" />
                                </div>
                            </div>
                            <div className="w-full px-1 mt-2 flex flex-col items-start justify-between gap-2 relative min-h-[120px]">
                                <p className=" text-sm pl-3">{item.nome}</p>
                                {!item.desconto && item.preco && (
                                    <span className="font-bold text-gray-700 pl-3 lg:pb-10">{item.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
                                )}

                                {item.desconto !== 0 && item.preco_desconto !== 0 && (
                                    <p className="font-semibold text-gray-700 pl-3 text-xs ">De: <span className="line-through">{Number(item.preco.toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span></p>
                                )}

                                {item.desconto !== 0 && item.preco_desconto !== 0 && (
                                    <p className="font-bold text-[#8B0029] text-sm flex flex-col gap-2 pl-3">Por: {Number(item.preco_desconto!!.toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}  <span className="text-xs">{item.desconto}% de desconto</span></p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

