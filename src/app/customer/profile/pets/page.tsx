import { Container } from "@/components/container"
import { PetsCard } from "../../_components/pets-card"
import Image from "next/image"
import { PenIcon } from "@phosphor-icons/react/dist/ssr";
import { CardPetEdit } from "./_components/cardPetEdit";


export default function Pets() {
    return (
        <main>
            <section>
                <Container>

                    <div className="flex flex-col  w-full ">
                        <h1 className="my-8 font-bold text-2xl text-gray-800">Pets</h1>
                        <div className="flex flex-wrap">
                            <CardPetEdit id={123} />
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    )
}