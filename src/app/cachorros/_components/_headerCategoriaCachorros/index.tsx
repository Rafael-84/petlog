"use client"
import { useState } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import Link from "next/link";


export function HeaderCategoria({ color }: { color: string }) {

    const [linkAtivo, setLinkAtivo] = useState<string>("todos");

    return (
        <header className="bg-transparent flex flex-col space-y-4 lg:space-y-0 sm:flex-row items-center justify-between lg:px-8 py-2 mt-14">
            <nav className="flex items-center gap-2">
                <Link href="/cachorros/products" className={`${linkAtivo === "todos" ? "font-bold" : ""} text-lg ${linkAtivo !== "todos" ? "font-medium" : ""}  hover:font-bold hover:scale-105 duration-200`} style={{ color: color }} onClick={() => setLinkAtivo("todos")}   >Todos</Link>

                <Link href="/cachorros/products/racoes" className={`${linkAtivo === "racoes" ? "font-bold" : ""} text-lg ${linkAtivo !== "racoes" ? "font-medium" : ""} hover:font-bold hover:scale-105 duration-200`} style={{ color: color }} onClick={() => setLinkAtivo("racoes")}>Rações</Link>

                <Link href="/cachorros/products/brinquedos" className={`${linkAtivo === "brinquedos" ? "font-bold" : ""} text-lg ${linkAtivo !== "brinquedos" ? "font-medium" : ""} hover:font-bold hover:scale-105 duration-200`} style={{ color: color }} onClick={() => setLinkAtivo("brinquedos")}>Brinquedos</Link>

                <Link href="/cachorros/products/higiene" className={`${linkAtivo === "higiene" ? "font-bold" : ""} text-lg ${linkAtivo !== "higiene" ? "font-medium" : ""} hover:font-bold hover:scale-105 duration-200`} style={{ color: color }} onClick={() => setLinkAtivo("higiene")}>Higiene</Link>
            </nav>
            <form className="flex items-center lg:w-1/4 px-1">
                <input type="text" placeholder="Digite um produto..." className=" bg-white py-0.5  px-2 w-full outline-none border border-gray-500 rounded-l-full" />
                <button className="bg-[#6C0020] rounded-r-full py-1 px-1.5 cursor-pointer hover:bg-[#C7033D] duration-300 "><MagnifyingGlassIcon size={22} color="#FFF" /></button>
            </form>
        </header >
    )
}