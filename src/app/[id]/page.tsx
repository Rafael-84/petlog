
import Image from "next/image";
import { getItemDetail } from "../cachorros/search/_actions/get-search-products";
import { get } from "http";
import { ProdutoProp } from "@/utils/produtos.type";
import { HeartIcon, PlusCircleIcon } from "@phosphor-icons/react/dist/ssr";

interface PropParams {
    params: {
        id: string;
    }
}

export default async function ProductDogs({ params }: PropParams) {

    const { id } = await params;
    const getDetail: ProdutoProp = await getItemDetail(id) as ProdutoProp


    return (
        <>

            <div className="flex flex-row gap-4">

                <article className=" flex items-center  w-[200px] flex-col p-1 shadow shadow-black/20 rounded-lg hover:scale-105 duration-300  " >
                    <div className=" flex  mx-auto  flex-col  bg-white border border-[#ff1d09] p-1 rounded-lg ">

                        <div className="relative w-[150px] h-[150px] cursor-pointer">

                            <Image src={getDetail?.image_url && getDetail.image_url.length > 0 ? getDetail.image_url[0].url : ""} fill alt={getDetail?.nome as string} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

                        </div>

                        <div className="flex items-center justify-between px-4">
                            <HeartIcon size={24} className="cursor-pointer hover:scale-125 duration-300" />
                            <PlusCircleIcon weight="fill" size={24} color="#8B0029" className="cursor-pointer hover:scale-125 duration-300" />
                        </div>
                    </div>
                    <div className="w-full px-1 mt-2 flex flex-col items-start justify-between gap-2 relative min-h-[120px]">
                        <p className=" text-sm pl-3">{getDetail.nome}</p>
                        {!getDetail.desconto && getDetail.preco && (
                            <span className="font-bold text-gray-700 pl-3 lg:pb-10">{getDetail.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
                        )}

                        {getDetail.desconto !== 0 && getDetail.preco_desconto !== 0 && (
                            <p className="font-semibold text-gray-700 pl-3 text-xs ">De: <span className="line-through">{Number(getDetail.preco.toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span></p>
                        )}

                        {getDetail.desconto !== 0 && getDetail.preco_desconto !== 0 && (
                            <p className="font-bold text-[#8B0029] text-sm flex flex-col gap-2 pl-3">Por: {Number(getDetail.preco_desconto!!.toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}  <span className="text-xs">{getDetail.desconto}% de desconto</span></p>
                        )}
                    </div>
                </article>

            </div>

        </>
    )

}