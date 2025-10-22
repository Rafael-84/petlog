import prisma from "@/lib/prisma";


export async function ramdomAllProducts() {
    const getProdutos = await prisma.produtos.findMany({})
    const ramdomProducts = getProdutos.sort(() => Math.random() - 0.5);
    const produtos = ramdomProducts.slice(0, 6);
    return { produtos }
}

export async function ramdomDogProducts() {
    const getProdutos = await prisma.produtos.findMany({
        where: {
            categoria: "cachorro"
        }
    })
    const ramdomProducts = getProdutos.sort(() => Math.random() - 0.5);
    const produtos = ramdomProducts.slice(0, 6);
    return { produtos }
}

export async function ramdomCatsProducts() {
    const getProdutos = await prisma.produtos.findMany({
        where: {
            categoria: "gatos"
        }
    })
    const ramdomProducts = getProdutos.sort(() => Math.random() - 0.5);
    const produtos = ramdomProducts.slice(0, 6);
    return { produtos }
}

export async function ramdomBirdsProducts() {
    const getProdutos = await prisma.produtos.findMany({
        where: {
            categoria: "passaros"
        }
    })
    const ramdomProducts = getProdutos.sort(() => Math.random() - 0.5);
    const produtos = ramdomProducts.slice(0, 6);
    return { produtos }
}