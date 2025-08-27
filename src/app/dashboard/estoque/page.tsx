import { Container } from "@/components/container";
import Link from "next/link";


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
            </Container>
        </section>
    )
}