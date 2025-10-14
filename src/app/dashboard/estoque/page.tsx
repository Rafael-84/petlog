
import { Container } from "@/components/container";
import Link from "next/link";
import { ItemProduto } from "../components/ItemProduto";
import PrismaClient from "@/lib/prisma";
import { EditarProduto } from "../components/editarProduto";


export default async function Estoque() {



    const produtos = await PrismaClient.produtos.findMany();
    const itens = produtos.map(produto => {
        let imageUrl = null;
        // Verifica se image_url é uma string e tenta fazer o parse
        if (produto.image_url && typeof produto.image_url === 'string') {
            try {
                imageUrl = JSON.parse(produto.image_url);
            } catch (error) {
                console.error(`Erro ao processar a imagem do produto ${produto.id}:`, error);
                imageUrl = null; // Mantém como nulo se o parse falhar
            }
        } else if (Array.isArray(produto.image_url)) {
            // Se já for um array (caso o tipo da coluna no DB seja JSON/JSONB)
            imageUrl = produto.image_url;
        }
        //image_url: JsonValue;     
        return { ...produto, image_url: imageUrl };
    })

    return (
        <section>
            <Container>
                <div className=" flex items-center justify-between px-1 mt-4 mb-5 gap-2 lg:mb-8">
                    <h2 className=" text-[22px] lg:text-2xl font-bold  text-gray-800">Estoque</h2>
                    <nav className="flex items-center justify-center gap-5">
                        <Link className="w-fit text-sm text-red-500 font-medium hover:scale-105 hover:text-red-600 duration-200 lg:text-lg" href="/dashboard">Voltar</Link>
                        <Link className="w-fit text-sm bg-green-600 px-2 py-1 rounded-lg text-white font-medium hover:bg-green-500 duration-300" href="/dashboard/estoque/new">Cadastrar Produto</Link>
                    </nav>
                </div>
                <section className="w-full flex items-center gap-6">
                </section>
                <section>

                    <EditarProduto />

                    <table className="w-full my-2 lg:my-8  ">
                        <thead>
                            <tr className=" border-[1px] border-rose-800 font-medium   " >
                                <th className="hidden lg:table-cell py-2 text-center">Foto</th>

                                <th className="py-2 pl-1 lg:px-2 text-left text-xs lg:text-base">Produto</th>

                                <th className="pr-2 lg:pr-0 py-2 text-center  text-xs lg:text-base ">Categoria</th>

                                <th className="hidden lg:table-cell lg:py-2 lg:text-center">Fornecedor</th>

                                <th className="hidden lg:table-cell lg:py-2 lg:text-center">Custo</th>

                                <th className="pr-2 lg:pr-0  py-2 text-center text-xs lg:text-base ">Venda</th>

                                <th className="pr-2 lg:pr-0  py-2 text-center text-xs lg:text-base ">Quantidade</th>

                                <th className="hidden lg:table-cell lg:py-2 lg:text-center">Min.</th>

                                <th className="hidden lg:table-cell lg:py-2 lg:text-center">Status</th>

                                <th className="  py-2 text-center text-xs lg:text-base ">Ações</th>





                            </tr>
                        </thead>
                        <tbody>
                            {itens.map(produto => (
                                <ItemProduto produto={produto} key={produto.id} />
                            ))}
                        </tbody>
                    </table>

                </section>
            </Container >
        </section >
    )
}