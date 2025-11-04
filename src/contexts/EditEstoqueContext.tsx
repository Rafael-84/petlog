"use client"
import { ProdutoProp } from '@/utils/produtos.type';
import { createContext, ReactNode, useState } from 'react';

interface EditarProdutoProps {
    produto: ProdutoProp | null
    setProduto: (item: ProdutoProp | null) => void


}

export const EditEstoqueContext = createContext({} as EditarProdutoProps);

export const EditEstoqueProvider = ({ children }: { children: ReactNode }) => {

    const [produto, setProduto] = useState<ProdutoProp | null>(null)

    console.log(produto)


    return (
        <EditEstoqueContext.Provider value={{ produto, setProduto }}>
            {children}
        </EditEstoqueContext.Provider>
    )
}