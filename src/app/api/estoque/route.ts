import { NextResponse } from "next/server";
import prismaClient from "@/lib/prisma";

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const searchCategoria = searchParams.get("categoria");
    const searchSubCategoria = searchParams.get("subCategoria");

    try {

        const response = await prismaClient.produtos.findMany()

        return NextResponse.json(response);

    } catch (error) {
        throw new Error("Failed to fetch products");
    }
}

export async function POST(request: Request) {


    const { nome, categoria, subcategoria, uuid, fornecedor, custo, preco, quantidade, validade, image_url, precoDesconto, desconto } = await request.json();

    try {
        await prismaClient.produtos.create({
            data: {
                nome,
                categoria,
                subcategoria,
                uuid,
                fornecedor,
                custo,
                preco: preco,
                quantidade,
                validade,
                image_url,
                desconto: desconto ? desconto : "",
                preco_desconto: precoDesconto ? precoDesconto : ""

            }
        })

        return NextResponse.json({ message: "Produto cadastrado com sucesso!" });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to create new product" }, { status: 400 })
    }

}
