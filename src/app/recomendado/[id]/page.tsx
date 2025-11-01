
interface PropsParams {
    params: {
        id: string;
    }
}

export default async function DetailsHome({ params }: PropsParams) {

    const { id } = await params;

    return (
        <main>
            <section>
                <h1>Detalhes Home Carrousel {id} </h1>
            </section>
        </main>
    )
}