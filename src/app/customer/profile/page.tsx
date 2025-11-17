import { Container } from "@/components/container";
import { UserData } from "../_components/user-data";
import { PetsCard } from "../_components/pets-card";


export default function Profile() {
    return (
        <main>

            <Container>
                <section>
                    <h1 className="my-8 font-bold text-2xl text-gray-800">Perfil</h1>
                    <div className="flex">
                        <UserData />
                        <PetsCard />
                    </div>
                </section>
                <section className="mt-4 w-full shadow shadow-gray-400 px-2">
                    <h2>Últimas compras realizadas...</h2>
                </section>
            </Container>


        </main >
    )
}