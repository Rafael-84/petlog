"use client"
import { useContext } from "react";
import { PenIcon, TrashIcon, WarningIcon, CheckIcon, SirenIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Produto, ProdutoProps } from "@/utils/produtos.type";
import { EditEstoqueContext } from "@/providers/edit_estoque";

export function ItemProduto({ produto }: ProdutoProps) {

    const images = produto.image_url && produto.image_url.length > 0 ? produto.image_url[0].url : null
    const { setProduto } = useContext(EditEstoqueContext)

    function abrirEdicao(produto: Produto) {
        setProduto(produto)
    }
    return (
        <tr className="border-b-2 border-b-slate-200 last:border-b-0 h-16 bg-white hover:bg-slate-200 hover:duration-300 select-none" >
            <td className="hidden lg:table-cell">
                {images ? (
                    <div className="flex items-center justify-center">
                        <Image src={images} alt={produto.nome} width={50} height={60} style={{ width: 'auto', height: 'auto' }} />
                    </div>
                ) : (
                    <p>No Image</p>
                )}
            </td>
            <td className="pl-1 lg:pl-0 text-gray-700 font-medium text-wrap pr-2 lg:pr-0 text-xs lg:text-sm leading-6 select-none">{produto.nome}</td>

            <td className="text-center text-gray-700 font-medium pr-2 lg:pr-0 text-xs lg:text-sm select-none">{produto.categoria}</td>

            <td className="hidden lg:table-cell lg:text-center lg:text-gray-700 lg:font-medium select-none">{produto.fornecedor}</td>

            <td className="hidden lg:table-cell lg:text-center lg:text-gray-700 lg:font-medium select-none">{Number(produto.custo).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</td>

            <td className="text-center text-gray-700 font-medium text-xs lg:text-sm select-none">{Number(produto.preco).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</td>

            <td className={`text-center font-bold text-xs lg:text-sm select-none ${Number(produto.quantidade) > 15 ? "text-green-500" : Number(produto.quantidade) <= 15 && Number(produto.quantidade) >= 10 ? "text-yellow-500" : "text-red-500"}`}>{Number(produto.quantidade)}</td>

            <td className="hidden lg:table-cell lg:text-center lg:text-gray-700 lg:font-medium select-none">10</td>

            {Number(produto.quantidade) > 15 && (
                <td className="hidden lg:table-cell">
                    <div className="flex items-center justify-center text-green-500 gap-2 font-medium select-none">
                        <CheckIcon />
                        <span>Disponível</span>
                    </div>
                </td>
            )}

            {Number(produto.quantidade) <= 15 && Number(produto.quantidade) >= 10 && (
                <td className="hidden lg:table-cell">
                    <div className="flex items-center justify-center text-yellow-500 gap-2 font-medium select-none">
                        <WarningIcon />
                        <span>Estoque baixo</span>
                    </div>
                </td>
            )}

            {Number(produto.quantidade) < 10 && (
                <td className="hidden lg:table-cell">
                    <div className="flex items-center justify-center text-red-500 gap-2 font-medium select-none">
                        <SirenIcon />
                        {Number(produto.quantidade) === 0 ? <span>Sem estoque</span> : <span>Estoque crítico</span>}
                    </div>
                </td>
            )}
            <td className="text-center pr-4 lg:pr-0">
                <div className="flex items-center justify-center gap-0.5">
                    <button onClick={() => abrirEdicao(produto)} className="cursor-pointer select-none" ><PenIcon size={22} color="#096C00" /></button>
                    <button className="ml-4 cursor-pointer select-none"><TrashIcon size={22} color="#6C0020" /></button>
                </div>
            </td>
        </tr >
    )
}