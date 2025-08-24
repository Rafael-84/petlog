
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr"


export function HeaderCategoria({ color }: { color: string }) {



    return (
        <header className="bg-transparent flex flex-col space-y-4 lg:space-y-0 sm:flex-row items-center justify-between lg:px-8 py-2 mt-14">
            <nav className="flex items-center gap-2">
                <h3 className={`text-[${color}] text-lg font-medium`}>Rações</h3>
                <h3 className={`text-[${color}] text-lg font-medium`}>Brinquedos</h3>
                <h3 className={`text-[${color}] text-lg font-medium`}>Higiene</h3>
            </nav>
            <form className="flex items-center lg:w-1/4 px-1">
                <input type="text" placeholder="Digite um produto..." className=" bg-white py-0.5  px-2 w-full outline-none border border-gray-500 rounded-l-full" />
                <button className="bg-[#6C0020] rounded-r-full py-1 px-1.5 cursor-pointer hover:bg-[#C7033D] duration-300 "><MagnifyingGlassIcon size={22} color="#FFF" /></button>
            </form>
        </header>
    )
}