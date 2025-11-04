"use client"
import { EditEstoqueContext } from "@/contexts/EditEstoqueContext";
import { FormEvent, useContext, useState } from "react";





export function EditarProduto() {

    const { produto, setProduto } = useContext(EditEstoqueContext);
    const [novaQuantidade, setNovaQuantidade] = useState("");

    const [opcao, setOpcao] = useState("");
    const id = produto?.id

    console.log(id)
    function handleAlterarQuantidade(e: FormEvent) {
        e.preventDefault();

        if (opcao === "") {
            alert("Selecione uma opção")
            return
        }

        if (opcao === "adicionar") {
            alert("adicionar")
            //setProduto(null)
        }

        if (opcao === "subtrair") {
            alert("subtrair")
            //setProduto(null)
        }

        if (opcao === "mudar valor total") {
            alert("mudar valor total")
            //setProduto(null)
        }

    }

    return (
        <>
            {produto && (
                <div className=" border-[1px] border-rose-800 py-2 px-2">
                    <div className="flex items-center justify-between pt-2">
                        <h1 className="font-bold text-lg text-gray-800">Editando produto</h1>

                    </div>
                    <div className="flex  flex-col ">
                        <div className="flex items-center gap-4">
                            <p className="text-gray-800 font-medium">O que deseja fazer?</p>
                            <div className="flex gap-1">
                                <input type="radio" name="options" value={"adicionar"} onChange={(e) => setOpcao(e.target.value)} />
                                <label>Adicionar</label>
                            </div>

                            <div className="flex gap-1">
                                <input type="radio" name="options" value={"subtrair"} onChange={(e) => setOpcao(e.target.value)} />
                                <label>Subtrair</label>
                            </div>


                            <div className="flex gap-1">
                                <input type="radio" name="options" value={"mudar valor total"} onChange={(e) => setOpcao(e.target.value)} />
                                <label>Mudar valor total</label>
                            </div>

                        </div>
                        <form className="flex justify-around items-center py-2" onSubmit={handleAlterarQuantidade}>
                            <div className="flex gap-2">
                                <label className="text-gray-800 font-medium">Produto</label>
                                <input value={produto.nome} disabled className="rounded-md px-2 disabled:italic disabled:text-slate-500 disabled:bg-gray-200" />
                            </div>

                            <div className="flex gap-2">
                                <label className="text-gray-800 font-medium">Categoria</label>
                                <input value={produto.categoria} disabled className="rounded-md px-2 disabled:italic disabled:text-slate-500 disabled:bg-gray-200" />
                            </div>

                            <div className="flex gap-2">
                                <label className="text-gray-800 font-medium">Quantidade</label>
                                <input placeholder={produto.quantidade} value={novaQuantidade} onChange={(e) => setNovaQuantidade(e.target.value)} className="border-slate-400 border-2 rounded-md px-2" />
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="bg-white text-red-500 px-1 py-2 font-medium rounded-md hover:text-red-600 hover:scale-105 duration-300 cursor-pointer" onClick={() => setProduto(null)}>Cancelar</button>
                                <button type="submit" className="bg-green-600 text-white px-1 py-2 font-medium rounded-md hover:bg-green-700 duration-300 cursor-pointer" >Salvar</button>
                            </div>
                        </form>

                    </div>


                </div>
            )}
        </>
    )
}