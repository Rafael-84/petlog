import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";



export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        return NextResponse.json({ error: "Not Authorized" }, { status: 401 })
    }

    const { idUser, nome, email, telefone, endereco, cpf, imageUrl, pets } = await request.json();

    try {
        await prismaClient.cliente.create({
            data: {
                id_user: idUser,
                nome,
                email: email ? email : "",
                telefone,
                cpf: cpf ? cpf : "",
                endereco,
                image_url: imageUrl ? imageUrl : "",
            }
        })

        return NextResponse.json({ message: "Cliente cadastrado com suceso" })
    } catch (err) {
        return NextResponse.json({ error: "Failed create new customer" }, { status: 400 })
    }
}










