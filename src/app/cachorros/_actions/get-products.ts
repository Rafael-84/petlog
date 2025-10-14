import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function buscarProdutosCachorros() {
    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "cachorro"
        },

    });

    return { produtos };
}

export async function buscarProdutosCachorrosRacao() {
    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "cachorro",
            subcategoria: "racao"
        },

    });

    return { produtos };
}