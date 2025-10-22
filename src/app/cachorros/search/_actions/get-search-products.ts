import prisma from "@/lib/prisma";
import { ProdutosProps } from "@/utils/produtos.type";



export async function getItemDetail(id: string) {
    try {
        const res = await prisma.produtos.findFirst({
            where: {
                id: id
            }
        })
        return res;
    } catch (error) {
        console.log("error: ", error)
    }

}