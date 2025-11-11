"use client"
import Link from "next/link";
import { UserLogin } from "./userLogin";
import { CartUser } from "../cart";
import { PhoneIcon, MapPinAreaIcon, HeartIcon } from "@phosphor-icons/react/dist/ssr";
import { useSession } from "next-auth/react";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { ShoppingCartIcon } from "@phosphor-icons/react";




export function Header() {


    const { status } = useSession();

    const [ativo, setAtivo] = useState<string>("");
    const { cart } = useContext(CartContext);


    return (
        <header className="bg-white h-20 py-2 px-2 flex items-center justify-center shadow-sm shadow-[#6C0020] z-50">
            <div className="flex  mx-auto items-center justify-between w-full max-w-7xl">

                <Link href="/"><h2 className={`text-[#6C0020] font-bold text-xl ${ativo === "/" ? "" : ""}`} onClick={() => setAtivo("/")}>PetLog</h2></Link>

                <nav className="flex items-center gap-4">
                    <Link href="/cachorros/products" className={`text-[#6C0020] font-bold hover:text-[#C7033D] duration-300  ${ativo === "/cachorros/products" ? "text-[#C7033D]" : ""} `} onClick={() => setAtivo("/cachorros/products")}><span className="sr-only">Pagina cachorros</span>Cachorros</Link>
                    <Link href="/gatos/products" className={`text-[#6C0020] font-bold hover:text-[#C7033D] duration-300 ${ativo === "/gatos/products" ? "text-[#C7033D]" : ""} `} onClick={() => setAtivo("/gatos/products")}><span className="sr-only">Pagina gatos</span>Gatos</Link>
                    <Link href="/aves/products" className={`text-[#6C0020] font-bold hover:text-[#C7033D] duration-300 ${ativo === "/aves/products" ? "text-[#C7033D]" : ""}`} onClick={() => setAtivo("/aves/products")}><span className="sr-only">Pagina aves</span>Aves</Link>
                </nav>

                <nav className="flex items-center gap-4">
                    {status === "authenticated" && (
                        <Link href="/favoritos">< HeartIcon size={24} color="#6C0020" /></Link>
                    )}
                    <Link href="https://www.google.com/maps/place/Av. Nossa Sra. do Carmo, 1448 - São Pedro, Belo Horizonte - MG, 30330-000" target="_blank"><MapPinAreaIcon size={24} color="#6C0020" /></Link>
                    <Link href="https://wa.me/551140028922?text=Olá gostaria de mais informações" target="_blank"><PhoneIcon size={24} color="#6C0020" /></Link>
                    {
                        cart.length > 0 && (
                            <Link href="/carrinho" className={`relative ${ativo === "/carrinho" ? "" : ""}`} onClick={() => setAtivo("/carrinho")}>
                                <div className="relative">
                                    <span className="absolute -top-2.5 left-3 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{cart.length}</span>
                                    <ShoppingCartIcon size={24} color="#6C0020" />
                                </div>
                            </Link>
                        )
                    }
                    {
                        cart.length === 0 && (
                            <Link href="/carrinho" className={`relative ${ativo === "/carrinho" ? "" : ""}`} onClick={() => setAtivo("/carrinho")}>
                                <ShoppingCartIcon size={24} color="#6C0020" />
                            </Link>
                        )
                    }
                    <UserLogin />
                </nav>

            </div>
        </header>
    )
}