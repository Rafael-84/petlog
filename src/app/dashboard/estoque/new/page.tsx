"use client"
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import zod from "zod";

const scheema = zod.object({
    produto: zod.string().min(3, "Digite um nome válido"),
    categoria: zod.string().min(3, "Digite uma categoria válida"),
    subCategoria: zod.string().min(3, "Digite uma sub-categoria válida"),
    fornecedor: zod.string().min(3, "Digite um fornecedor válido"),
    custo: zod.string().min(1, "Digite um valor válido"),
    venda: zod.string().min(1, "Digite um valor válido"),
    quantidade: zod.string().min(1, "Digite uma quantidade válida"),
    validade: zod.string(),
})

type FormData = zod.infer<typeof scheema>

export default function New() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(scheema)
    })

    function handleCreateProduct(data: FormData) {
        alert("Produto cadastrado com sucesso!")
        console.log(data)
    }

    return (
        <section>
            <Container>
                <div className="flex items-center justify-between">
                    <h1 className="text-gray-800 text-2xl font-bold pt-4">Cadastrar Produto</h1>
                    <Link className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 duration-300 font-medium" href="/dashboard/estoque">Voltar</Link>
                </div>
                <form onSubmit={handleSubmit(handleCreateProduct)} className="w-full flex flex-col items-start " >
                    <div className="w-full mt-8 flex flex-col">

                        <div>
                            <input type="file" />
                        </div>
                        <div className="flex items-center  w-full gap-8 ">
                            <div className="w-full  " >
                                <label className="text-gray-800 text-lg font-medium">Produto</label>
                                <Input placeholder="Ex: Golden Special para Cães Adultos Sabor Frango e Carne 10kg" type="text" register={register} name="produto" errors={errors?.produto?.message} />
                            </div>

                            <div className="flex w-full gap-4 items-center " >
                                <div className="w-full">
                                    <label className="text-gray-800 text-lg font-medium">Categoria</label>
                                    <Input placeholder="Ex: Cachorro" type="text" register={register} name="categoria" errors={errors?.categoria?.message} />
                                </div>
                                <div className="w-full">
                                    <label className="text-gray-800 text-lg font-medium">Sub-Categoria</label>
                                    <Input placeholder="Ex: Racao" type="text" register={register} name="subCategoria" errors={errors?.subCategoria?.message} />
                                </div>
                                <div className="w-full">
                                    <label className="text-gray-800 text-lg font-medium">Fornecedor</label>
                                    <Input placeholder="Ex: Premier" type="text" register={register} name="fornecedor" errors={errors?.fornecedor?.message} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row w-full gap-4 mt-4">
                                <div className="w-full">
                                    <label className="text-gray-800 text-lg font-medium">Custo</label>
                                    <Input placeholder="Ex: 80.00" type="text" register={register} name="custo" errors={errors?.custo?.message} />
                                </div>
                                <div className="w-full">
                                    <label className="text-gray-800 text-lg font-medium">Valor de venda</label>
                                    <Input placeholder="Ex: 90.00" type="text" register={register} name="venda" errors={errors?.venda?.message} />
                                </div>
                                <div className="w-full">
                                    <label className="text-gray-800 text-lg font-medium">Quantidade</label>
                                    <Input placeholder="Ex: 30" type="text" register={register} name="quantidade" errors={errors?.quantidade?.message} />
                                </div>
                                <div className="w-full">
                                    <label className="text-gray-800 text-lg font-medium">Validade</label>
                                    <Input placeholder="Ex: 22/10/2025" type="date" register={register} name="validade" errors={errors?.validade?.message} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="mt-4 bg-green-500 text-white px-6 py-1 rounded-md hover:bg-green-600 duration-300 cursor-pointer font-bold" type="submit">Cadastrar</button>
                </form>
            </Container >
        </section >
    )
}