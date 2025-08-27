import { Container } from "@/components/container";
import Link from "next/link";



export function HeaderAdmin() {
    return (
        <Container>
            <header className="w-full bg-[#6C0020] h-8 flex items-center justify-between mt-4 px-8 rounded-lg ">
                <nav className="flex gap-4 ">
                    <Link href="/dashboard" className="text-white hover:scale-105 hover:font-semibold duration-100">Vendas</Link>
                    <Link href="/dashboard/clientes" className="text-white hover:scale-105 hover:font-semibold duration-100">Clientes</Link>
                    <Link href="/dashboard/produtos" className="text-white hover:scale-105 hover:font-semibold duration-100">Produtos</Link>
                    <Link href="/dashboard/estoque" className="text-white hover:scale-105 hover:font-semibold duration-100">Estoque</Link>
                </nav>
            </header>
        </Container>
    );
}