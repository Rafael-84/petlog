import prisma from "@/lib/prisma";

export async function allProductsCats() {

    const produtos = await prisma.produtos.findMany({
        where: {
            categoria: "gatos"
        },
        select: {
            nome: true,
            image_url: true,
            preco: true,
            desconto: true,
            preco_desconto: true,

        }
    });

    return { produtos };

}

export async function getRacoesCats() {
    const racoes = await prisma.produtos.findMany({
        where: {
            categoria: "gatos",
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

    return { racoes };
}

export async function getBrinquedosCats() {
    const brinquedos = await prisma.produtos.findMany({
        where: {
            categoria: "gatos",
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

    return { brinquedos };
}

export async function getHigieneCats() {
    const higiene = await prisma.produtos.findMany({
        where: {
            categoria: "gatos",
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

    return { higiene };
}

export async function buscarDetalhesProdutosCats(id: string) {
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