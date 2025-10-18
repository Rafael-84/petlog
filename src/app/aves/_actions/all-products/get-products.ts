import prisma from "@/lib/prisma"


export async function getAllProductsAves() {
    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "passaros"
        },
    })

    return { produtos }
}

export async function getRacoesAves() {
    const racoes = await prisma.produtos.findMany({
        where: {
            categoria: "passaros",
            subcategoria: "racao"
        },
    })

    return { racoes }
}

export async function getBriquendosAves() {
    const brinquedos = await prisma.produtos.findMany({
        where: {
            categoria: "passaros",
            subcategoria: "brinquedos"
        },
    })

    return { brinquedos }
}

export async function getHigieneAves() {
    const higiene = await prisma.produtos.findMany({
        where: {
            categoria: "passaros",
            subcategoria: "higiene"
        },
    })

    return { higiene }
}