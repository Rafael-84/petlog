import prisma from "@/lib/prisma";

export async function allProductsCats() {

    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "gatos"
        }
    });

    return { produtos };

}

export async function getRacoesCats() {
    const racoes = await prisma.produtos.findMany({
        where: {
            categoria: "gatos",
            subcategoria: "racao"
        }
    })

    return { racoes };
}

export async function getBrinquedosCats() {
    const brinquedos = await prisma.produtos.findMany({
        where: {
            categoria: "gatos",
            subcategoria: "brinquedos"
        }
    })

    return { brinquedos };
}

export async function getHigieneCats() {
    const higiene = await prisma.produtos.findMany({
        where: {
            categoria: "gatos",
            subcategoria: "higiene"
        }
    })

    return { higiene };
}