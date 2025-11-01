import { ProdutoProp } from "@/utils/produtos.type";
import { buscarDetalhesProdutosBird } from "../../_actions/all-products/get-products";
import { Container } from "@/components/container";
import Image from "next/image";


interface PropsParams {
    params: {
        id: string
    }
}

export default async function DetailsAves({ params }: PropsParams) {

    const { id } = await params
    const detalhesDoProduto = await buscarDetalhesProdutosBird(id);
    const detail: ProdutoProp = detalhesDoProduto.detail as ProdutoProp

    return (
        <main>
            <section>
                <Container>
                    <div className="flex items-center">
                        <div>
                            <Image src={detail?.image_url && detail?.image_url.length > 0 ? detail?.image_url[0].url : ""} alt="Foto do cachorro" width={300} height={300} quality={100} priority />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1>{detail?.nome}</h1>
                            <p>{detail?.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    )
}