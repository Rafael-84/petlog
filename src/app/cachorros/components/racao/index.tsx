/* import prismaClient from "@/lib/prisma";




export async function Racao() {


    const response = await prismaClient.produtos.findMany({
        where: {
            categoria: "racao",
            subcategoria: "cachorro"
        }
    });
    console.log(response);




    return (
        <></>
    )

} */