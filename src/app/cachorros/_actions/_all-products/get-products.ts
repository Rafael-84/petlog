import prisma from "@/lib/prisma";



export async function buscarProdutosCachorros() {
    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "cachorro"
        },
        select: {
            id: true,
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,
            quantidade: true,
            categoria: true,


        }

    });

    return { produtos };
}

export async function buscarProdutosCachorrosRacao() {
    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "cachorro",
            subcategoria: "racao"
        },
        select: {
            id: true,
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,
            categoria: true,
        }

    });

    return { produtos };
}


export async function buscarProdutosCachorrosBrinquedos() {
    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "cachorro",
            subcategoria: "brinquedos"
        },
        select: {
            id: true,
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,
            categoria: true,
        }
    });

    return { produtos };
}

export async function buscarProdutosCachorrosHigiene() {
    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "cachorro",
            subcategoria: "higiene"
        },
        select: {
            id: true,
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,
            categoria: true,
        }

    });

    return { produtos };
}

export async function buscarDetalhesProdutosDog(id: string) {
    const detail = await prisma.produtos.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,

        }

    });

    return { detail };

}