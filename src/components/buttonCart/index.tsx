"use client"

import { CartContext, CartProps } from "@/contexts/CartContext";
import { MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { useContext, useState } from "react";


export function ButtonCart({ item }: { item: CartProps }) {

    const { addItemCart } = useContext(CartContext);


    return (
        <div className="flex  gap-8 ">

            <button onClick={() => addItemCart(item)}
                className="bg-green-500 px-4 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-green-600 duration-300"
            >
                Adicionar ao carrinho
            </button>
        </div>
    )
}

