"use client"
import { ChangeEvent, useState } from "react";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import zod, { object } from "zod";
import { v4 as uuidV4 } from "uuid";
import { api } from "@/lib/api";

import { ref, uploadBytes, getDownloadURL, StorageReference } from "firebase/storage";
import { storage } from "@/services/firebase/firebaseConnection";
import { create } from "domain";



const tiposAceitos = [
    "image/png",
    "image/jpeg"
]

const scheema = zod.object({
    nome: zod.string().min(3, "Digite um nome válido"),
    fornecedor: zod.string().min(3, "Digite um fornecedor válido"),
    custo: zod.string().min(1, "Digite um valor válido"),
    venda: zod.string().min(1, "Digite um valor válido"),
    quantidade: zod.string().min(1, "Digite uma quantidade válida"),
    validade: zod.string(),
    /* images: zod.any().refine((files) => tiposAceitos.includes(files?.[0].type), { error: "Tipo inválido, são permitidos apenas jpeg e png" }) */
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
    //const [produtosRegister, setProdutosRegister] = useState<ProdutoInfoProps>();
    const [categoria, setCategoria] = useState<string>();
    const uuidProduto = uuidV4();
    const [subCategoria, setSubCategoria] = useState<string>();


    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(scheema)
    })



    async function handleFile(e: ChangeEvent<HTMLInputElement>) {



        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0];

            console.log(image)

            if (image.type === "image/jpg" || image.type === "image/png") {
                await uploadImage(image);

            } else {
                alert("Formato inválido. Aceitamos apenas PNG, JPG e JPEG.");
                return;
            }

        }
    }

    async function handleSaveProduct(data: FormData) {


        const produtoInfo: ProdutoInfoProps = {
            ...data,
            uuid: uuidProduto,
        }
        const imagens = images.map(image => {
            return {
                name: data.nome,
                uuid: image.uuid,
                url: image.url
            }
        })

        console.log(imagens[0].uuid)

        try {

            await api.post("/api/products", {
                data: {
                    nome: data.nome,
                    categoria: categoria,
                    subcategoria: subCategoria,
                    uuid: produtoInfo.uuid,
                    fornecedor: data.fornecedor,
                    custo: data.custo,
                    preco: data.venda,
                    quantidade: data.quantidade,
                    validade: data.validade,
                    image_url: imagens,
                    preco_desconto: "",
                    desconto: "",
                }
            })
            alert("Item cadstrado com sucesso")

        } catch (error) {
            console.log("error: ", error)
        }

    }



    async function uploadImage(image: File) {
        const uuidImg = uuidV4();
        const imgRef = ref(storage, `/produtos/${categoria}/${subCategoria}/${uuidProduto}/${uuidImg}`)

        await uploadBytes(imgRef, image)
            .then(snapshot => {
                getDownloadURL(snapshot.ref).then(downloadUrl => {
                    const imageItem = {
                        name: uuidImg,
                        uuid: uuidProduto,
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

    // produtos/${categoria}/${subcategoria}/uuidProduto/imagem.png
    /*  async function uploadImage(image: File) {
 
         const uuidImg = uuidV4()
         const produtoUid = produtosUuid?.uuid
         
         const uploadRef = ref(storage, `produtos/${produtosUuid?.categoria}/${produtosUuid?.subCategoria}/${produtoUid}`)
 
         await uploadBytes(uploadRef, image)
             .then((snapshot) => {
                 getDownloadURL(snapshot.ref).then((downloadUrl) => {
                     const imageItem = {
                         name: uuidImg,
                         uuid: produtoUid as string,
                         urlPreview: URL.createObjectURL(image),
                         url: downloadUrl
                     }
 
                     setImages((images) => [...images, imageItem]);
                     images.map(item => {
                         console.log(item)
                     })
                     console.log("Imagem enviada com sucesso!")
                 })
             }).catch((error) => {
                 console.log("Erro ao cadastrar a imagem. " + error)
             })
     } */





    return (
        <section>
            <Container>
                <div className="flex items-center justify-between">
                    <h1 className="text-gray-800 text-2xl font-bold pt-4">Cadastrar Produto</h1>
                    <Link className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 duration-300 font-medium" href="/dashboard/estoque">Voltar</Link>
                </div>
                <div className="flex items-center gap-4 mt-8">
                    <div className="w-fit">
                        <label className="text-gray-800 text-lg font-medium mr-1">Categoria:</label>
                        <input className="border-[2px] border-slate-300 rounded-md" placeholder="Ex: Cachorro" type="text" value={categoria} onChange={e => setCategoria(e.target.value)} required />
                    </div>
                    <div className="w-fit">
                        <label className="text-gray-800 text-lg font-medium mr-1">Sub-Categoria:</label>
                        <input className="border-[2px] border-slate-300 rounded-md" placeholder="Ex: Racao" type="text" value={subCategoria} onChange={e => setSubCategoria(e.target.value)} required />
                    </div>
                </div>
                {categoria && subCategoria && (
                    <>
                        <div className="flex items-center justify-center bg-slate-200 w-2xs h-48 mt-8 rounded-md border-dashed border-[2px] border-slate-400">
                            <input type="file" accept="image/*" onChange={handleFile} className="w-full mx-1" />
                        </div>

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

                            </div>
                            <button className="mt-4 bg-green-500 text-white px-6 py-1 rounded-md hover:bg-green-600 duration-300 cursor-pointer font-bold" type="submit">Cadastrar</button>
                        </form>
                    </>

                )}

            </Container >
        </section >
    )
}