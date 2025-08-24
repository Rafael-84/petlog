"use client"

import { ShoppingCartIcon } from "@phosphor-icons/react" 
import Link from "next/link"

export function CartUser(){
    return(
        <>
            <Link href="/carrinho"><ShoppingCartIcon size={24} color="#6C0020" /></Link>   
        </>
    )
}