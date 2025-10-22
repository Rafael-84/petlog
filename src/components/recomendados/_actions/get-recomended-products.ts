import { ProdutoProp } from "@/utils/produtos.type";
import { ramdomAllProducts, ramdomBirdsProducts, ramdomCatsProducts, ramdomDogProducts } from "@/utils/ramdom";

export interface RecomendadosProps {
    produtos: ProdutoProp[]
}
export async function allRecomended() {

    try {
        const produtos = await ramdomAllProducts()

        const allProducts: ProdutoProp[] = produtos.produtos as ProdutoProp[];
        const products: ProdutoProp[] = allProducts.map((product) => {
            const imageUrl = typeof product.image_url === 'string'
                ? JSON.parse(product.image_url)
                : product.image_url;
            return { ...product, image_url: imageUrl } as ProdutoProp;
        });

        return { products };

    } catch (error) {
        console.log("error: ", error)
    }


}

export async function allRecomendedDogs() {

    try {
        const produtos = await ramdomDogProducts()

        const allProducts: ProdutoProp[] = produtos.produtos as ProdutoProp[];
        const products: ProdutoProp[] = allProducts.map((product) => {
            const imageUrl = typeof product.image_url === 'string'
                ? JSON.parse(product.image_url)
                : product.image_url;
            return { ...product, image_url: imageUrl } as ProdutoProp;
        });

        return { products };

    } catch (error) {
        console.log("error: ", error)
    }
}

export async function allRecomendedCats() {

    try {
        const produtos = await ramdomCatsProducts()

        const allProducts: ProdutoProp[] = produtos.produtos as ProdutoProp[];
        const products: ProdutoProp[] = allProducts.map((product) => {
            const imageUrl = typeof product.image_url === 'string'
                ? JSON.parse(product.image_url)
                : product.image_url;
            return { ...product, image_url: imageUrl } as ProdutoProp;
        });

        return { products };

    } catch (error) {
        console.log("error: ", error)
    }
}

export async function allRecomendedBirds() {

    try {
        const produtos = await ramdomBirdsProducts()

        const allProducts: ProdutoProp[] = produtos.produtos as ProdutoProp[];
        const products: ProdutoProp[] = allProducts.map((product) => {
            const imageUrl = typeof product.image_url === 'string'
                ? JSON.parse(product.image_url)
                : product.image_url;
            return { ...product, image_url: imageUrl } as ProdutoProp;
        });

        return { products };

    } catch (error) {
        console.log("error: ", error)
    }
}