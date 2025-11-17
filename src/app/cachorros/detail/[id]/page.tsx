import { Container } from "@/components/container";
import { buscarDetalhesProdutosDog } from "../../_actions/_all-products/get-products";
import { ProdutoProp } from "@/utils/produtos.type";
import { ImageDetail } from "@/app/cachorros/_components/imageDetail";
import { MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { ButtonCart } from "@/components/buttonCart";


interface PropsParams {
    params: {
        id: string;
    }
}

export default async function Details({ params }: PropsParams) {

    const { id } = await params;
    const detalhesDoProduto = await buscarDetalhesProdutosDog(id);
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
                                <ButtonCart item={detail} />

                            </div>

                        </div>
                    </div>
                </Container>
            </section>
        </main>
    )
}