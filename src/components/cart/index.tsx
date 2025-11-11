"use client"

import { CartContext } from "@/contexts/CartContext";
import { ShoppingCartIcon } from "@phosphor-icons/react"
import Link from "next/link"
import { useContext } from "react";

export function CartUser() {

    const { cart } = useContext(CartContext);

    return (
        <>
            {
                cart.length > 0 && (
                    <Link href="/carrinho" className="relative">
                        <div className="relative">
                            <span className="absolute -top-2.5 left-3 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{cart.length}</span>
                            <ShoppingCartIcon size={24} color="#6C0020" />
                        </div>
                    </Link>
                )
            }
            {
                cart.length === 0 && (
                    <Link href="/carrinho" className="relative">
                        <ShoppingCartIcon size={24} color="#6C0020" />
                    </Link>
                )
            }
        </>
    )
}