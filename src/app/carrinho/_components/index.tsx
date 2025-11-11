"use client"
import { useState } from "react"
import { check } from "zod"

export function CartSelect() {

    const [select, setSelect] = useState("loja")

    return (
        <>
            <div className="flex flex-col space-y-1 mt-2">
                <div className="flex gap-2">
                    <input type="radio" name="loja" value={select} checked={select === "loja"} onChange={() => setSelect("loja")} />Retirar na loja
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="meu endereco" value={select} checked={select === "meu endereco"} onChange={() => setSelect("meu endereco")} />Receber na minha casa
                </div>
            </div>
        </>
    )
}