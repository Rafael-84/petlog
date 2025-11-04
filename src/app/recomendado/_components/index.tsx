"use client"
import { useState } from "react";
import { ProdutoProp } from "@/utils/produtos.type";
import Image from "next/image";


export function ImageDetail({ produto }: { produto: ProdutoProp }) {

    const itemImage = produto.image_url && produto.image_url.length > 0 ? produto?.image_url : null;
    console.log(itemImage);
    const [imgSelecionada, setImgSelecionada] = useState(0);

    return (
        <>
            <section className="flex gap-4">


                <div className="flex flex-col mt-12 space-y-5">
                    {produto.image_url && produto.image_url.length > 0 ? produto?.image_url.map((item, index) => (

                        <button key={index} onClick={() => setImgSelecionada(index)} >
                            <div className={`flex flex-col p-2 border-2 cursor-pointer ${index === imgSelecionada ? "border-[#ff1d09]" : ""} duration-300`}  >
                                <Image src={item.url} alt="Foto do produto" width={50} height={50} quality={100} priority />
                            </div>
                        </button>


                    )) : <Image src={produto.image_url && produto.image_url.length > 0 ? produto?.image_url[0].url : ""} alt="Foto do produto" width={50} height={50} quality={100} priority />}
                </div>


                <div className=" shadow rounded-md overflow-hidden relative w-[350px] h-[300px] mt-8">
                    <Image className="object-contain" src={produto.image_url && produto.image_url.length > 0 ? produto?.image_url[imgSelecionada].url : ""} alt="Foto do cachorro" fill quality={100} priority />
                </div>
            </section>
        </>
    )
}