interface EditarProdutoProps {
    uuid: string;
    // Você provavelmente vai querer passar uma função para cancelar a edição também
    // onCancel: () => void;
}

export function EditarProduto({ uuid }: EditarProdutoProps) {
    return (
        <>
            {uuid && (
                <div className="bg-green-50">
                    <div className="text-center">
                        <h1 className="font-bold text-lg">Editando produto</h1>
                        <p>UUID: {uuid}</p>

                    </div>

                </div>
            )}
        </>
    )
}