"use client"
import { useContext } from "react";
import { CartContext, CartProps } from "@/contexts/CartContext";
import { HeartIcon, PlusCircleIcon } from "@phosphor-icons/react";
import toast from "react-hot-toast";


export function AddCart({ item }: { item: CartProps }) {

    const { addItemCart } = useContext(CartContext);

    return (
        <>
            <div className="flex items-center justify-between px-4">
                <HeartIcon size={24} className="cursor-pointer hover:scale-125 duration-300" />
                <button onClick={() => addItemCart(item)}><PlusCircleIcon weight="fill" size={24} color="#8B0029" className="cursor-pointer hover:scale-125 duration-300" /></button>

            </div>
        </>
    )
}