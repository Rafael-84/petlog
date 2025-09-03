import { Container } from "@/components/container";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ItemProduto } from "../components/ItemProduto";


export default function Estoque() {
    return (
        <section>
            <Container>
                <div className="flex items-center justify-between px-1 mb-8">
                    <h2 className="text-2xl font-bold pt-4  text-gray-800">Estoque</h2>
                    <div className="flex items-center justify-center gap-5">
                        <Link className="text-red-500 font-medium hover:scale-105 hover:text-red-600 duration-200 text-lg" href="/dashboard">Voltar</Link>
                        <Link className="bg-green-600 px-2 py-1 rounded-lg text-white font-medium hover:bg-green-500 duration-300" href="/dashboard/estoque/new">Cadastrar Produto</Link>
                    </div>
                </div>
                <section className="w-full flex items-center gap-6">
                    <Card className="flex-1  flex items-center justify-center w-full px-2 bg-white border-[1px] border-[#6C0020] ">
                        <CardTitle className="font-bold text-gray-800">Total de produtos em estoque </CardTitle>
                        <CardDescription className="text-slate-700 font-medium"> 2.300</CardDescription>
                    </Card>
                    <Card className="flex-1  flex items-center justify-center w-full px-2 bg-white border-[1px] border-[#6C0020] ">
                        <CardTitle className="font-bold text-gray-800">Total de produtos vencidos ou avariados </CardTitle>
                        <CardDescription className="text-slate-700 font-medium">60</CardDescription>
                    </Card>
                    <Card className="flex-1  flex items-center justify-center w-full px-2 bg-white border-[1px] border-[#6C0020] ">
                        <CardTitle className="font-bold text-gray-800">Valor Total do estoque atual</CardTitle>
                        <CardDescription className="text-slate-700 font-medium">R$600.000,00</CardDescription>
                    </Card>
                </section>
                <section>
                    <table className="w-full my-8">
                        <thead >
                            <tr className=" border-[1px] border-rose-800 font-medium" >
                                <td className="pl-1 text-center ">Foto</td>
                                <td className="py-2 ">Produto</td>
                                <td className="py-2 text-center ">Categoria</td>
                                <td className="py-2 text-center ">Fornecedor</td>
                                <td className="py-2 text-center ">Custo</td>
                                <td className="py-2 text-center ">Venda</td>
                                <td className="py-2 text-center ">Quantidade</td>
                                <td className="py-2 text-center ">Min.</td>
                                <td className="py-2 text-center ">Validade</td>
                                <td className="py-2 text-center ">Status</td>
                                <td className="py-2 text-center ">Ações</td>
                            </tr>
                        </thead>
                        <tbody>
                            <ItemProduto />
                            <ItemProduto />
                        </tbody>
                    </table>
                </section>
            </Container>
        </section>
    )
}