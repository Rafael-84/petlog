"use client"
import { ChangeEvent, useEffect, useState, useRef } from "react";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { useForm } from "react-hook-form";
import zod from "zod";
import { v4 as uuidV4 } from "uuid";
import { api } from "@/lib/api";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/services/firebase/firebaseConnection";


const scheema = zod.object({
    nome: zod.string().min(3, "Digite um nome válido"),
    fornecedor: zod.string().min(3, "Digite um fornecedor válido"),
    custo: zod.string().min(1, "Digite um valor válido"),
    venda: zod.string().min(1, "Digite um valor válido"),
    quantidade: zod.string().min(1, "Digite uma quantidade válida"),
    validade: zod.string(),

})

type FormData = zod.infer<typeof scheema>

interface ImageProps {
    name: string;
    url: string;
    urlPreview: string;
    uuid: string;
}

interface ProdutoInfoProps {
    nome: string;
    uuid: string;
    fornecedor: string;
    custo: string;
    venda: string;
    quantidade: string;
    validade: string;
}

export default function New() {

    const [images, setImages] = useState<ImageProps[]>([]);
    const [uuidProduto, setUuidProduto] = useState<string>();
    const [categoria, setCategoria] = useState<string>("");
    const [subcategoria, setSubcategoria] = useState<string>("");
    const inputFile = useRef<HTMLInputElement>(null)


    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(scheema)
    })

    useEffect(() => {
        const uuidProduto = uuidV4();
        setUuidProduto(uuidProduto)

    }, []);


    async function handleFile(e: ChangeEvent<HTMLInputElement>) {

        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0];

            console.log(image)

            if (image.type === "image/jpg" || image.type === "image/png" || image.type === "image/jpeg") {
                await uploadImage(image);

            } else {
                alert("Formato inválido. Aceitamos apenas PNG, JPG e JPEG.");
                e.currentTarget.value = '';
                return;
            }

        }
    }

    async function handleSaveProduct(data: FormData) {


        const produtoInfo: ProdutoInfoProps = {
            ...data,
            uuid: uuidProduto as string,
        }

        if (images?.length === 0) {
            alert("Envie pelo menos uma imagem!")
        }

        const imagens = images.map(image => {
            return {
                url: image.url,
                name: image.name,
                uuid: image.uuid
            };
        });

        try {
            await api.post("/api/products", {

                nome: data.nome,
                categoria: categoria,
                subcategoria: subcategoria,
                uuid: produtoInfo.uuid,
                fornecedor: data.fornecedor,
                custo: data.custo,
                preco: data.venda,
                quantidade: data.quantidade,
                validade: data.validade,
                image_url: imagens,
            })

            alert("Produto cadastrado com sucesso!")
            if (inputFile.current) {
                inputFile.current.value = "";
            }
            setCategoria("");
            setSubcategoria("");
            reset({ nome: "", custo: "", fornecedor: "", quantidade: "", validade: "", venda: "" });
        } catch (error) {
            alert("Erro ao cadastrar o produto")
            return;
        }
    }

    async function uploadImage(image: File) {
        const uuidImg = uuidV4();
        const imgRef = ref(storage, `/produtos/${categoria}/${subcategoria}/${uuidProduto}/${uuidImg}`)

        await uploadBytes(imgRef, image)
            .then(snapshot => {
                getDownloadURL(snapshot.ref).then(downloadUrl => {
                    const imageItem = {
                        name: uuidProduto as string,
                        uuid: uuidImg,
                        urlPreview: URL.createObjectURL(image),
                        url: downloadUrl
                    }
                    console.log(imageItem)

                    setImages(images => [...images, imageItem])
                    alert("Imagens cadastradas com sucesso!")

                })
            })
            .catch((err) => {
                alert("Erro ao cadastrar a imagem")
                console.log("erro: " + err)
            })
    }

    return (
        <section>
            <Container>
                <div className="flex items-center justify-between">
                    <h1 className="text-gray-800 text-2xl font-bold pt-4">Cadastrar Produto</h1>
                    <Link className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 duration-300 font-medium" href="/dashboard/estoque">Voltar</Link>
                </div>
                <div className="flex items-center justify-between gap-4 mt-8">
                    <div className="flex items-center gap-4 ">
                        <div className=" flex">
                            <label className="text-gray-800 text-lg font-medium mr-1">Categoria:</label>
                            <input className="w-fit border-2 border-slate-300 rounded-sm px-2" placeholder="Ex: Cachorro" type="text" value={categoria} onChange={e => setCategoria(e.target.value)} required />
                        </div>
                        <div className="w-fit flex">
                            <label className="text-gray-800 text-lg font-medium mr-1">Sub-Categoria:</label>
                            <input className="w-fit border-2 border-slate-300 rounded-sm px-2" placeholder="Ex: Racao" type="text" value={subcategoria} onChange={e => setSubcategoria(e.target.value)} required />
                        </div>
                    </div>

                    <div>
                        {images.length > 0 && (
                            <button className="mt-4 bg-green-500 text-white px-6 py-1 rounded-md hover:bg-green-600 duration-300 cursor-pointer font-bold" type="submit">Cadastrar</button>
                        )}
                    </div>
                </div>
                {categoria && subcategoria && (
                    <>
                        <form onSubmit={handleSubmit(handleSaveProduct)} className="w-full flex flex-col items-end " >
                            <div className="w-full mt-8 flex flex-col">

                                <div className="flex items-center  w-full gap-8 ">
                                    <div className="w-full  " >
                                        <label className="text-gray-800 text-lg font-medium">Produto</label>
                                        <Input placeholder="Ex: Golden Special para Cães Adultos Sabor Frango e Carne 10kg" type="text" register={register} name="nome" errors={errors?.nome?.message} />
                                    </div>

                                    <div className="flex w-full gap-4 items-center " >

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
                                <div className="flex items-center justify-center bg-slate-200 w-2xs h-48 mt-8 rounded-md border-dashed border-[2px] border-slate-400">
                                    <input type="file" accept="image/*" onChange={handleFile} ref={inputFile} className="w-full mx-1" />
                                </div>

                            </div>

                        </form>
                    </>

                )}

            </Container >
        </section >
    )
}