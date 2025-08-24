import { WhatsappLogoIcon, InstagramLogoIcon, FacebookLogoIcon, TiktokLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";


export function Footer() {
    return (
        <footer>
            <section className="bg-white">
                <div className="container mx-auto flex flex-col px-2 gap-12 lg:gap-0 lg:flex-row justify-around pt-12 pb-16">
                    <div className="space-y-4">
                        <h4 className="text-[#6C0020] font-bold text-xl">PetLog</h4>
                        <p className="text-[#5a011c] italic">Onde patinhas felizes encontram carinho sem fim.</p>
                        <Link href="https://wa.me/5511940028922?text=Olá gostaria de mais informações" target="_blank" rel="noopener noreferrer" className="bg-green-500 px-4 py-1 flex gap-2 rounded-lg w-fit text-white hover:bg-green-600 duration-300"><WhatsappLogoIcon size={24} color="#FFF" /> Entre em contato</Link>
                    </div>
                    <div className="space-y-4">
                        <p className="text-[#6C0020] font-bold text-xl ">Contatos</p>
                        <ul>
                            <li className="text-[#5a011c] flex gap-2 "><p className="font-medium ">Email:</p>teste@teste.com</li>
                            <li className="text-[#5a011c] flex gap-2"><p className="font-medium">Telefone:</p>(xx) xxxxx-xxxx</li>
                        </ul>
                        <span className="text-[#5a011c] flex gap-2"><p className="font-medium">Endereço:</p>Rua X, centro, Belo Horizonte | SP</span>
                    </div>
                    <div>
                        <p className="text-[#6C0020] font-bold text-xl ">Redes Sociais</p>
                        <ul className="flex gap-2 py-4">
                            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:shadow-lg hover:scale-110 duration-200"><InstagramLogoIcon size={24} color="#6C0020" /></Link>
                            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:shadow-lg hover:scale-110 duration-200"><FacebookLogoIcon size={24} color="#6C0020" /></Link>
                            <Link href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:shadow-lg hover:scale-110 duration-200"><TiktokLogoIcon size={24} color="#6C0020" /></Link>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    )
}