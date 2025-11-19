import { PropsParams } from "@/app/cachorros/detail/[id]/page";
import { Container } from "@/components/container";



export default async function EditProfilePet({ params }: PropsParams) {

    const { id } = await params;

    return (
        <main>
            <section>
                <Container>
                    <h1>Editar Pet</h1>
                    <span>Pet {id}</span>
                </Container>
            </section>
        </main>
    )
}