export interface ProdutoProp {
    id: string;
    nome: string;
    categoria: string;
    subcategoria: string;
    preco: number;
    fornecedor: string;
    custo: number;
    desconto: number | null;
    preco_desconto: number | null;
    uuid: string;
    image_url: ImageProps[] | null;
    quantidade: number;
    validade: string;
    created_at: Date | null;
    updated_at: Date | null;
}

export interface ImageProps {
    name: string;
    url: string;
    urlPreview: string;
    uuid: string;
}

export interface ExibirProdutoProp {
    id: string | number;
    nome: string;
    preco: number;
    desconto: number | null;
    preco_desconto: number | null;
    image_url: ImageProps[] | null;
    quantidade: number;
    /* total?: number */
}



/* id: string;
    nome: string;
    preco: number;
    desconto: number | null;
    preco_desconto: number | null;
    image_url: ImageProps[] | null; */