"use client"
import { UserIcon, SpinnerGapIcon } from "@phosphor-icons/react"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

export function UserLogin() {

    const { data, status } = useSession();

    const user = (data?.user);


    return (
        <>

            {status === "loading" && (
                <SpinnerGapIcon className="animate-spin" size={24} color="#6C0020" />
            )}

            {status === "unauthenticated" && (
                <button className="cursor-pointer" onClick={() => signIn("google")}><UserIcon size={24} color="#6C0020" /></button>
            )}

            {status === "authenticated" && (
                <div className="flex items-center gap-2 ml-3">
                    <div className="relative w-10 h-10">
                        <Image src={user?.image as string} className="w-25 h-25 object-contain rounded-full" fill priority quality={100} alt="Imagem do usuário" />
                    </div>
                    <div>
                        <p className=" font-medium text-[#6C0020]">{user?.name}</p>
                        <div className="flex">
                            <Link href="/customer/profile" className="mr-3 text-slate-600 font-medium hover:text-slate-800 duration-300">Perfil</Link>
                            <button className="text-red-500 text-sm font-medium italic cursor-pointer hover:text-red-600 duration-300" onClick={() => signOut()}>Sair</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}