import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req: Request) {

    const { searchParams } = new URL(req.url);
    const sarchCategoria = searchParams.get("cachorro");

    try {
        const produtos = await prisma.produtos.findMany({
            where: {
                categoria: sarchCategoria as string,
            }
        });
        const ramdomProducts = produtos.sort(() => Math.random() - 0.5);

        return NextResponse.json(ramdomProducts.slice(0, 6));

    } catch (error) {
        throw new Error("Failed to fetch ramdom products");
    }

}