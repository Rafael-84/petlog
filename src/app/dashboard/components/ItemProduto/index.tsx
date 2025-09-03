import { PenIcon, TrashIcon } from "@phosphor-icons/react/dist/ssr";

export function ItemProduto() {
    return (
        <tr className="border-b-2 border-b-slate-200 last:border-b-0 h-16 bg-white hover:bg-slate-200 hover:duration-300" >
            <td className="text-center" > Imagem Aqui</td>
            <td className="text-sm ">Ração Golden Special para Cães Adultos Sabor Frango e Carne</td>
            <td className="text-center">Ração</td>
            <td className="text-center">Premier</td>
            <td className="text-center">R$80,00</td>
            <td className="text-center">R$180,00</td>
            <td className="text-center">90</td>
            <td className="text-center">10</td>
            <td className="text-center">20/03/2025</td>
            <td className="text-center">Disponível</td>
            <td className="text-center">
                <button className="cursor-pointer" ><PenIcon size={22} color="#096C00" /></button>
                <button className="ml-4 cursor-pointer"><TrashIcon size={22} color="#6C0020" /></button>
            </td>
        </tr >
    )
}