import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import zod from "zod";

const scheema = zod.object({
    produto: zod.string().min(3, "Digite um nome válido"),
    categoria: zod.string().min(3, "Digite uma categoria válida"),
    fornecedor: zod.string().min(3, "Digite um fornecedor válido"),
    custo: zod.number().min(1, "Digite um valor válido"),
    venda: zod.number().min(1, "Digite um valor válido"),
    quantidade: zod.number().min(1, "Digite uma quantidade válida"),
    minimo: zod.number().min(1, "Digite uma quantidade válida"),
    validade: zod.string().min(3, "Digite uma data válida"),
})

type FormData = zod.infer<typeof scheema>

export default function New() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(scheema)
    })

    function handleCreateProduct(data: FormData) {
        console.log(data)
    }

    return (
        <section>
            <Container>
                <h1 className="text-gray-800 text-2xl font-bold pt-4">Cadastrar Produto</h1>
                <form onSubmit={handleSubmit(handleCreateProduct)} className="w-full max-w-lg mt-8 flex flex-col gap-4">
                    <div>
                        <label>Produto</label>
                        <Input placeholder="Ex: Ração Golden Special para Cães Adultos Sabor Frango e Carne 10kg" type="text" register={register} name="name" errors={errors?.produto?.message} />
                    </div>
                    {/* <input type="text" placeholder="Nome do Produto" className="w-full border-[1px] border-gray-300 rounded-md px-3 py-2 mt-4 focus:outline-none focus:border-green-500" />
                    <input type="text" placeholder="Código do Produto" className="w-full border-[1px] border-gray-300 rounded-md px-3 py-2 mt-4 focus:outline-none focus:border-green-500" />
                    <input type="text" placeholder="Categoria" className="w-full border-[1px] border-gray-300 rounded-md px-3 py-2 mt-4 focus:outline-none focus:border-green-500" />
                    <input type="text" placeholder="Fornecedor" className="w-full border-[1px] border-gray-300 rounded-md px-3 py-2 mt-4 focus:outline-none focus:border-green-500" />
                    <input type="number" placeholder="Custo" className="w-full border-[1px] border-gray-300 rounded-md px-3 py-2 mt-4 focus:outline-none focus:border-green-500" />
                    <input type="number" placeholder="Preço de Venda" className="w-full border-[1px] border-gray-300 rounded-md px-3 py-2 mt-4 focus:outline-none focus:border-green-500" />
                    <input type="number" placeholder="Quantidade em Estoque" className="w-full border-[1px] border-gray-300 rounded-md px-3 py-2 mt-4 focus:outline-none focus:border-green-500" />
                    <input type="number" placeholder="Estoque Mínimo" className="w-full border-[1px] border-gray-300 rounded-md px-3 py-2 mt-4 focus:outline-none focus:border-green-500" />
                    <input type="date" placeholder="Data de Validade" className="w-full border-[1px] border-gray-300 rounded-md px-3 py-2 mt-4 focus:outline-none focus:border-green-500" />
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md mt-6 hover:bg-green-500 duration-300">Cadastrar Produto</button> */}
                </form>
            </Container>
        </section>
    )
}