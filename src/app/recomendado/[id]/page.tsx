import { ExibirProdutoProp } from "@/utils/produtos.type";
import { getProductsDetail } from "./_actions/get-product-detail";
import { Container } from "@/components/container";
import { ImageDetail } from "../_components";
import { ButtonCart } from "@/components/buttonCart";


interface PropsParams {
    params: {
        id: string;
    }
}

export default async function DetailsHome({ params }: PropsParams) {

    const { id } = await params;
    const detalhesDoProduto: ExibirProdutoProp = await getProductsDetail(id) as ExibirProdutoProp;
    console.log(detalhesDoProduto);




    return (
        <main>
            <section  >
                <Container>
                    <div className="flex py-8 gap-4 ">
                        <div className="flex  justify-center gap-4">
                            <ImageDetail produto={detalhesDoProduto} />
                        </div>
                        <section >
                            <div className=" mt-12 w-3/4 space-y-5 ">
                                <div className="flex gap-2 flex-col">
                                    <h1 className="text-slate-600 font-bold text-lg">{detalhesDoProduto.nome}</h1>
                                    <p className="text-slate-800 line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt non, quaerat perspiciatis ea voluptas debitis doloremque quidem, illo ratione provident natus sunt ullam, dignissimos aperiam fuga soluta. Nobis, placeat.</p>
                                </div>
                                <div>

                                    {!detalhesDoProduto.desconto && detalhesDoProduto.preco && (
                                        <p className="font-bold text-gray-700 text-lg lg:pb-10">{Number(detalhesDoProduto.preco.toFixed(2)).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>
                                    )}

                                    {detalhesDoProduto.desconto !== 0 && detalhesDoProduto.preco_desconto !== 0 && (
                                        <p className="font-semibold text-gray-700  text-xs ">De: <span className="line-through">{Number(detalhesDoProduto.preco.toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span></p>
                                    )}

                                    {detalhesDoProduto.desconto !== 0 && detalhesDoProduto.preco_desconto !== 0 && (
                                        <p className="font-bold text-[#8B0029] text-sm flex flex-col gap-2 ">Por: {Number(detalhesDoProduto.preco_desconto!!.toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}  <span className="text-xs">{detalhesDoProduto.desconto}% de desconto</span></p>
                                    )}
                                </div>
                            </div>
                            <div className=" relative -top-3 flex justify-center w-1/2">
                                <ButtonCart item={detalhesDoProduto} />
                            </div>
                        </section>

                    </div>
                </Container>
            </section>
        </main>
    )
}