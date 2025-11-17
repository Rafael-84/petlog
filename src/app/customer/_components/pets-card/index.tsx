import { PetData } from "../pet-data";



export function PetsCard() {
    return (
        <main>
            <section>
                <div className="flex-wrap flex justify-end  gap-2">
                    <div className="shadow-sm shadow-gray-400 rounded-md p-4">
                        <PetData infoPet={"chihiro"} />
                    </div>
                    <div className="shadow-sm shadow-gray-400 rounded-md p-4">
                        <PetData infoPet={"Jorge"} />
                    </div>
                    <div className="shadow-sm shadow-gray-400 rounded-md p-4">
                        <PetData infoPet={"Julian"} />
                    </div>
                    <div className="shadow-sm shadow-gray-400 rounded-md p-4">
                        <PetData infoPet={"Dora"} />
                    </div>
                </div>
            </section>
        </main>
    )
}