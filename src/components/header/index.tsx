"use client"
import Link from "next/link";
import { UserLogin } from "./userLogin";
import { CartUser } from "../cart";
import { PhoneIcon, MapPinAreaIcon, HeartIcon } from "@phosphor-icons/react/dist/ssr";
import { useSession } from "next-auth/react";
import { useState } from "react";




export function Header() {


    const { status } = useSession();

    const [ativo, setAtivo] = useState<string>("");



    return (
        <header className="bg-white h-20 py-2 px-2 flex items-center justify-center shadow-sm shadow-[#6C0020] z-50">
            <div className="flex  mx-auto items-center justify-between w-full max-w-7xl">

                <Link href="/"><h2 className={`text-[#6C0020] font-bold text-xl ${ativo === "/" ? "" : ""}`} onClick={() => setAtivo("/")}>PetLog</h2></Link>

                <nav className="flex items-center gap-4">
                    <Link href="/cachorros/products" className={`text-[#6C0020] font-bold hover:text-[#C7033D] duration-300  ${ativo === "/cachorros/products" ? "text-[#C7033D]" : ""} `} onClick={() => setAtivo("/cachorros/products")}><span className="sr-only">Pagina cachorros</span>Cachorros</Link>
                    <Link href="/gatos" className={`text-[#6C0020] font-bold hover:text-[#C7033D] duration-300 ${ativo === "/gatos" ? "text-[#C7033D]" : ""} `} onClick={() => setAtivo("/gatos")}><span className="sr-only">Pagina gatos</span>Gatos</Link>
                    <Link href="/aves" className={`text-[#6C0020] font-bold hover:text-[#C7033D] duration-300 ${ativo === "/aves" ? "text-[#C7033D]" : ""}`} onClick={() => setAtivo("/aves")}><span className="sr-only">Pagina aves</span>Aves</Link>
                </nav>

                <nav className="flex items-center gap-4">
                    {status === "authenticated" && (
                        <Link href="/favoritos">< HeartIcon size={24} color="#6C0020" /></Link>
                    )}
                    <Link href="https://www.google.com/maps/place/Av. Nossa Sra. do Carmo, 1448 - São Pedro, Belo Horizonte - MG, 30330-000" target="_blank"><MapPinAreaIcon size={24} color="#6C0020" /></Link>
                    <Link href="https://wa.me/551140028922?text=Olá gostaria de mais informações" target="_blank"><PhoneIcon size={24} color="#6C0020" /></Link>
                    <CartUser />
                    <UserLogin />
                </nav>

            </div>
        </header>
    )
}