export interface ProdutoProps {
    produto: {
        id: string;
        nome: string;
        categoria: string;
        subcategoria: string;
        preco: string;
        fornecedor: string;
        custo: string;
        desconto: string | null;
        preco_desconto: string | null;
        uuid: string;
        image_url: { url: string; name: string; uuid: string; }[] | null;
        quantidade: string;
        validade: string;
        created_at: Date | null;
        updated_at: Date | null;
    }

}

export interface Produto {
    id: string;
    nome: string;
    categoria: string;
    subcategoria: string;
    preco: string;
    fornecedor: string;
    custo: string;
    desconto: string | null;
    preco_desconto: string | null;
    uuid: string;
    image_url: { url: string; name: string; uuid: string; }[] | null;
    quantidade: string;
    validade: string;
    created_at: Date | null;
    updated_at: Date | null;
}