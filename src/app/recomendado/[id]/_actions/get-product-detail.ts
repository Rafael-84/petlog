import prisma from "@/lib/prisma";


export async function getProductsDetail(id: string) {

    const res = await prisma.produtos.findUnique({
        where: {
            id: id,
        }
    })

    return res;

}