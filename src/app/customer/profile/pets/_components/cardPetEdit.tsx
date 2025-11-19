import { PenIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";


export function CardPetEdit({ id }: { id: number }) {


    return (
        <main>
            <Link href={`/customer/profile/pets/infoPet/${id}`}>
                <div className="flex flex-col items-center gap-4 shadow shadow-gray-300 rounded-md px-4 py-3">
                    <div className="relative z-10 top-0 -right-1/2">
                        <Link href={`/customer/profile/pets/editPet/${id}`}> <PenIcon className="text-[#6C0020] hover:text-[#C7033D] hover:scale-105 duration-200 cursor-pointer" width={23} height={23} /></Link>
                    </div>
                    <div className=" relative -top-1/12 w-20 h-20 ">
                        <Image className="object-contain " src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png" alt="pet" fill priority quality={100} />
                    </div>
                    <div className=" w-52 space-y-4">
                        <div className="flex justify-between">
                            <p className="font-bold italic text-[#6C0020] text-lg">{"infoPet"}</p>
                            <span className="text-gray-700 font-bold text-sm italic">Fêmea</span>
                        </div>
                        <div className="flex gap-2 justify-between">
                            <div className="flex gap-2">
                                <p className="text-gray-800 font-medium italic">Idade: </p>
                                <span>2 anos</span>

                            </div>
                            <div className="flex gap-2">
                                <p className="text-gray-800 font-medium italic">Raça: </p>
                                <span>Persa</span>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </main>
    )
}