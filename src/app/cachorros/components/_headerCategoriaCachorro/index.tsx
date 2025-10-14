
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"


export function HeaderCategoria({ color }: { color: string }) {



    return (
        <header className="bg-transparent flex flex-col space-y-4 lg:space-y-0 sm:flex-row items-center justify-between lg:px-8 py-2 mt-14">
            <nav className="flex items-center gap-2">
                <Link href="/cachorros" className={`text-[${color}] text-lg font-medium`}>Todos</Link>
                <Link href="/cachorros/racoes-dog" className={`text-[${color}] text-lg font-medium`}>Rações</Link>
                <Link href="/cachorros/brinquedos-dog" className={`text-[${color}] text-lg font-medium`}>Brinquedos</Link>
                <Link href="/cachorros/higiene-dog" className={`text-[${color}] text-lg font-medium`}>Higiene</Link>
            </nav>
            <form className="flex items-center lg:w-1/4 px-1">
                <input type="text" placeholder="Digite um produto..." className=" bg-white py-0.5  px-2 w-full outline-none border border-gray-500 rounded-l-full" />
                <button className="bg-[#6C0020] rounded-r-full py-1 px-1.5 cursor-pointer hover:bg-[#C7033D] duration-300 "><MagnifyingGlassIcon size={22} color="#FFF" /></button>
            </form>
        </header>
    )
}