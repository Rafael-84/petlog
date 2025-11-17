import { Container } from "@/components/container";
import Link from "next/link";



export function HeaderProfile() {
    return (
        <>
            <header>
                <Container>
                    <nav className="bg-[#6C0020] h-8 flex items-center  mt-4 px-8 rounded-lg gap-3 ">
                        <Link className="text-white font-medium hover:scale-105 duration-200" href={`/customer/profile`}>Perfil</Link>
                        <Link className="text-white font-medium hover:scale-105 duration-200" href={`/customer/profile/pets`}>Pets</Link>
                    </nav>
                </Container>
            </header>
        </>
    )
}