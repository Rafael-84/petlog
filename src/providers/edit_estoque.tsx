"use client"
import { Produto } from '@/utils/produtos.type';
import { createContext, ReactNode, useState } from 'react';

interface EditarProdutoProps {
    produto: Produto | null
    setProduto: (item: Produto | null) => void


}

export const EditEstoqueContext = createContext({} as EditarProdutoProps);

export const EditEstoqueProvider = ({ children }: { children: ReactNode }) => {

    const [produto, setProduto] = useState<Produto | null>(null)

    console.log(produto)


    return (
        <EditEstoqueContext.Provider value={{ produto, setProduto }}>
            {children}
        </EditEstoqueContext.Provider>
    )
}