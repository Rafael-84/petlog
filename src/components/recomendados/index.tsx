import { ProdutosProps } from "@/utils/produtos.type";
import { allRecomended, allRecomendedDogs, allRecomendedCats, allRecomendedBirds } from "./_actions/get-recomended-products";
import { RecomendadoCarousel } from "./RecomendadoCarousel";
import { get } from "http";


export interface RecomendadosProps {
    products: ProdutosProps[]
}

export async function Recomendado({ categoria }: { categoria: string }) {

    /* const getAllProducts = await allRecomended()
    const allProducts: ProdutoProp[] = getAllProducts?.produtos as ProdutoProp[];
    const products: ProdutoProp[] = allProducts.map((product) => {
        const imageUrl = typeof product.image_url === 'string'
            ? JSON.parse(product.image_url)
            : product.image_url;
        return { ...product, image_url: imageUrl } as ProdutoProp;
    }); */

    const getAllProducts = await allRecomended()
    const getAllProductsDogs = await allRecomendedDogs()
    const getAllProductsCats = await allRecomendedCats()
    const getAllProductsBirds = await allRecomendedBirds()




    return (
        <section className="mt-20 mb-10 z-50">
            {categoria === "all" && (
                <>
                    <RecomendadoCarousel produto={getAllProducts?.products || []} />
                </>
            )}

            {categoria === "cachorro" && (
                <>
                    <RecomendadoCarousel produto={getAllProductsDogs?.products || []} />
                </>
            )}

            {categoria === "gato" && (
                <>
                    <RecomendadoCarousel produto={getAllProductsCats?.products || []} />
                </>
            )}

            {categoria === "ave" && (
                <>
                    <RecomendadoCarousel produto={getAllProductsBirds?.products || []} />
                </>
            )}
        </section>
    )
}