import { Container } from "@/components/container";
import { HeaderAdmin } from "../components/headerAdmin";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function DashboardProdutos() {
    return (
        <section>
            <Container>
                <div className="flex items-center justify-between px-1 mb-8">
                    <h2 className="text-2xl font-bold pt-4  text-gray-800">Produtos</h2>

                    <Link className="text-red-500 font-medium hover:scale-105 hover:text-red-600 duration-200 text-lg" href="/dashboard">Voltar</Link>


                </div>
                <section className="flex w-full items-center justify-center gap-6 mb-8">
                    <Card className="flex-1 flex items-center justify-center w-full px-2 bg-white border-[1px] border-[#6C0020] ">
                        <CardTitle className="font-bold text-gray-800">Total geral de Produtos </CardTitle>
                        <CardDescription className="text-slate-700 font-medium"> 1.300</CardDescription>
                    </Card>
                    <Card className="flex-1  flex items-center justify-center w-full px-2 bg-white border-[1px] border-[#6C0020] ">
                        <CardTitle className="font-bold text-gray-800">Total de produtos em estoque </CardTitle>
                        <CardDescription className="text-slate-700 font-medium"> 2.300</CardDescription>
                    </Card>
                    <Card className="flex-1  flex items-center justify-center w-full px-2 bg-white border-[1px] border-[#6C0020] ">
                        <CardTitle className="font-bold text-gray-800">Total entrada de produtos </CardTitle>
                        <CardDescription className="text-slate-700 font-medium"> 2.300</CardDescription>
                    </Card>
                    <Card className="flex-1  flex items-center justify-center w-full px-2 bg-white border-[1px] border-[#6C0020] ">
                        <CardTitle className="font-bold text-gray-800">Total saida de produtos </CardTitle>
                        <CardDescription className="text-slate-700 font-medium"> 2.300</CardDescription>
                    </Card>
                </section>
                <section className="flex w-full items-center gap-6 mb-8">

                    <div className="flex-1 flex w-full bg-red-200">
                        <Card>
                            <CardTitle>Mais saidas</CardTitle>
                        </Card>
                    </div>
                    <div className="flex-1 flex w-full bg-red-200">
                        <Card>
                            <CardTitle>Menos saidas</CardTitle>
                        </Card>
                    </div>

                </section>
                <section className="w-full">
                    <Card className="w-full bg-white">
                        <CardTitle className="text-gray-800 font-bold">Grafico percentual dos produtos</CardTitle>
                    </Card>
                </section>
            </Container>
        </section>
    );
}