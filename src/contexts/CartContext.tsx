"use client"
import { ImageProps } from "@/utils/produtos.type";
import { useState, createContext } from "react";



interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: CartProps) => void;
    removeItemCart: (item: CartProps) => void;
    total: string;
}

export interface CartProps extends CartTotalProp {

    id: string | number;
    nome: string;
    preco: number;
    desconto?: number | null;
    preco_desconto?: number | null;
    image_url: ImageProps[] | null;
    quantidade: number;


}

interface CartTotalProp {
    total?: number;
}


export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState("");

    function addItemCart(newItem: CartProps) {

        const findIndex = cart.findIndex(item => item.id === newItem.id);
        if (findIndex !== -1) {
            let cartList = cart
            cartList[findIndex].quantidade = cartList[findIndex].quantidade + 1;
            cartList[findIndex].total = cartList[findIndex].quantidade * cartList[findIndex].preco;
            setCart(cartList)
            getTotalProducts(cartList);
            return;
        }

        let data = {
            ...newItem,
            quantidade: 1,
            total: newItem.preco
        }
        setCart(products => [...products, data]);
        getTotalProducts([...cart, data]);
    }
    function removeItemCart(item: CartProps) {
        const findIndex = cart.findIndex(product => product.id === item.id)
        if (cart[findIndex]?.quantidade > 1) {
            let cartList = cart;
            cartList[findIndex].quantidade = cartList[findIndex].quantidade - 1;
            cartList[findIndex].total = cartList[findIndex].quantidade - cartList[findIndex].preco;
            setCart(cartList);
            getTotalProducts(cartList);
            return;

        }
    }

    function getTotalProducts(items: CartProps[]) {
        let myCart = items;
        let total = myCart.reduce((acc, obj) => { return acc + obj.total!! }, 0);
        const resultadoFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        setTotal(resultadoFormatado)
    }


    return (
        <CartContext.Provider value={{ cart, cartAmount: cart.length, addItemCart, removeItemCart, total }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;

