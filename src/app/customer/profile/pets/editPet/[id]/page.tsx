
import { PropsParams } from "@/app/cachorros/detail/[id]/page";
import { Container } from "@/components/container";
import Image from "next/image";
import { EditInfoPet } from "../../_components/editInfoPet";



export default async function EditProfilePet({ params }: PropsParams) {

    const { id } = await params;

    return (
        <main>
            <section>
                <Container>
                    <h1 className="text-gray-800 text-lg font-medium pt-2">Editar informações do Pet</h1>

                    <div className="flex flex-col items-center justify-center shadow-md rounded-lg p-8 mt-5">
                        <div className="flex flex-col w-fit">
                            <div className="relative w-28 h-28">
                                <Image className="object-contain " src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png" alt={`Foto do ${id}`} fill priority quality={100} />
                            </div>
                            <p className="text-center my-3">Pudim</p>
                        </div>

                        <EditInfoPet id={id} />

                    </div>
                </Container>
            </section>
        </main>
    )
}