import { NextResponse } from "next/server";
import prismaClient from "@/lib/prisma";

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const searchCategoria = searchParams.get("categoria");
    const searchSubCategoria = searchParams.get("subCategoria");

    try {

        const response = await prismaClient.produtos.findMany({
            where: {
                categoria: searchCategoria as string,
                subcategoria: searchSubCategoria as string
            }
        })

        return NextResponse.json(response);

    } catch (error) {
        throw new Error("Failed to fetch products");
    }
}

export async function POST(request: Request) {


    const { nome, categoria, subCategoria, uuid, fornecedor, custo, venda, quantidade, validade, imagens, precoDesconto, desconto } = await request.json();

    try {
        await prismaClient.produtos.create({
            data: {
                categoria,
                subcategoria: subCategoria,
                uuid,
                fornecedor,
                custo,
                preco: venda,
                quantidade,
                validade,
                image_url: imagens,
                preco_desconto: precoDesconto ? precoDesconto : "",
                desconto: desconto ? desconto : "",
                nome: nome,
            }
        })

        return NextResponse.json({ message: "Produto cadastrado com sucesso!" });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to create new product" }, { status: 400 })
    }

}
