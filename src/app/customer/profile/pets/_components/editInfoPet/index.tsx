"use client"
import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputEdit } from "../inputEdit";



const scheema = zod.object({

});

type FormData = zod.infer<typeof scheema>;

export function EditInfoPet({ id }: { id: number | string }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(scheema) });



    return (
        <>
            <div className="flex flex-col gap-3 w-full mx-auto mt-5">
                <div className="flex mx-auto space-x-10 ">
                    <div className="flex flex-col space-y-2 gap-2 ">
                        <div className="flex  items-center justify-between mx-auto gap-3">
                            <div className="flex gap-1">
                                <label >Tutor:</label>
                                <InputEdit name="tutor" placeholder="Digite o nome do Tutor" type="text" register={register} />
                            </div>

                            <div className="flex gap-1">
                                <label >Tipo:</label>
                                <select className="w-full border-2 bg-white border-slate-300 rounded-sm px-2" >
                                    <option value="">Selecione...</option>
                                    <option value="cao">Cão</option>
                                    <option value="gato">Gato</option>
                                    <option value="gato">Ave</option>
                                    <option value="gato">Outros</option>

                                </select>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                            <div className="flex gap-2">
                                <label>Raça:</label>
                                <InputEdit name="tutor" placeholder="Digite o nome do Tutor" type="text" register={register} />
                            </div>

                            <div className="flex gap-1">
                                <label >Porte:</label>
                                <select className="w-full border-2 bg-white border-slate-300 rounded-sm px-2" >
                                    <option value="">Selecione...</option>
                                    <option value="pequeno">Pequeno</option>
                                    <option value="médio">Médio</option>
                                    <option value="grande">Grande</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-3">
                        <div className="flex gap-2">

                            <label>Idade:</label>
                            <InputEdit name="tutor" placeholder="Digite o nome do Tutor" type="text" register={register} />

                            <label >Peso:</label>
                            <InputEdit name="tutor" placeholder="Digite o nome do Tutor" type="text" register={register} />
                        </div>

                        <div className="flex gap-2">
                            <label>Cor:</label>
                            <InputEdit name="tutor" placeholder="Digite o nome do Tutor" type="text" register={register} />

                            <label >Alergias:</label>
                            <InputEdit name="tutor" placeholder="Digite o nome do Tutor" type="text" register={register} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}