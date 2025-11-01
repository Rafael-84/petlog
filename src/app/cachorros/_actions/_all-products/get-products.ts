import prisma from "@/lib/prisma";



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


export async function buscarProdutosCachorrosBrinquedos() {
    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "cachorro",
            subcategoria: "brinquedos"
        },

    });

    return { produtos };
}

export async function buscarProdutosCachorrosHigiene() {
    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "cachorro",
            subcategoria: "higiene"
        },

    });

    return { produtos };
}

export async function buscarDetalhesProdutosDog(id: string) {
    const detail = await prisma.produtos.findUnique({
        where: {
            id: id
        },

    });

    return { detail };

}