import { PropsParams } from "@/app/cachorros/detail/[id]/page";
import { Container } from "@/components/container";


export default async function InfoPets({ params }: PropsParams) {

    const { id } = await params;

    return (
        <main>
            <section>
                <Container>
                    <h1>PetId: {id}</h1>
                </Container>
            </section>
        </main>
    )
}