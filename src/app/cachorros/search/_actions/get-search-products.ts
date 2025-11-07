import prisma from "@/lib/prisma";




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