import { ProdutoProp } from "@/utils/produtos.type";
import { buscarDetalhesProdutosCats } from "../../_actions/all-products/get-products";
import { Container } from "@/components/container";
import { ImageDetail } from "@/app/gatos/_components/imageDetail";
import { MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react/dist/ssr";


interface PropsParams {
    params: {
        id: string;
    }
}

export default async function DetailsCats({ params }: PropsParams) {

    const { id } = await params;
    const detalhesDoProduto = await buscarDetalhesProdutosCats(id);
    const detail: ProdutoProp = detalhesDoProduto.detail as ProdutoProp

    return (
        <main>
            <section >
                <Container>
                    <div className="flex py-8 gap-4 ">
                        <div className="flex  justify-center gap-4">
                            <ImageDetail produto={detail} />
                        </div>
                        <div className=" mt-18 w-1/2 space-y-5">
                            <div className="flex gap-2 flex-col">
                                <h1 className="text-slate-600 font-bold text-xl">{detail.nome}</h1>
                                <p className="text-slate-800 text-lg line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt non, quaerat perspiciatis ea voluptas debitis doloremque quidem, illo ratione provident natus sunt ullam, dignissimos aperiam fuga soluta. Nobis, placeat.</p>
                            </div>
                            <div>

                                {!detail.desconto && detail.preco && (
                                    <span className="font-bold text-gray-700 text-xl lg:pb-10">{detail.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
                                )}

                                {detail.desconto !== 0 && detail.preco_desconto !== 0 && (
                                    <p className="font-semibold text-gray-700  text-xs ">De: <span className="line-through">{Number(detail.preco.toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span></p>
                                )}

                                {detail.desconto !== 0 && detail.preco_desconto !== 0 && (
                                    <p className="font-bold text-[#8B0029] text-sm flex flex-col gap-2 ">Por: {Number(detail.preco_desconto!!.toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}  <span className="text-xs">{detail.desconto}% de desconto</span></p>
                                )}
                            </div>
                            <div className="flex items-center gap-8 mt-10">
                                <div className="border border-slate-300 w-24 items-center justify-between flex px-2 py-2 rounded-md">
                                    <button className="cursor-pointer"><MinusCircleIcon size={25} color="#6C0020" /></button>
                                    <span className="text-lg text-slate-600 font-medium">1</span>
                                    <button className="cursor-pointer"><PlusCircleIcon size={25} color="#6C0020" /></button>
                                </div>
                                <button className="bg-green-500 px-4 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-green-600 duration-300">Adicionar ao carrinho</button>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>
        </main>
    )
}