import prisma from "@/lib/prisma"


export async function getAllProductsAves() {
    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "passaros"
        },
        select: {
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,

        }
    })

    return { produtos }
}

export async function getRacoesAves() {
    const racoes = await prisma.produtos.findMany({
        where: {
            categoria: "passaros",
            subcategoria: "racao"
        },
        select: {
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,

        }
    })

    return { racoes }
}

export async function getBriquendosAves() {
    const brinquedos = await prisma.produtos.findMany({
        where: {
            categoria: "passaros",
            subcategoria: "brinquedos"
        },
        select: {
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,

        }
    })

    return { brinquedos }
}

export async function getHigieneAves() {
    const higiene = await prisma.produtos.findMany({
        where: {
            categoria: "passaros",
            subcategoria: "higiene"
        },
        select: {
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,

        }
    })

    return { higiene }
}

export async function buscarDetalhesProdutosBird(id: string) {
    const detail = await prisma.produtos.findUnique({
        where: {
            id: id
        },
        select: {
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,

        }

    });

    return { detail };

}